import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '..', 'public', 'images');

const QUALITY = 80;
const SUPPORTED = new Set(['.png', '.jpg', '.jpeg', '.webp']);

// Magic bytes for image type detection
const MAGIC = {
  jpeg: [0xff, 0xd8, 0xff],
  png: [0x89, 0x50, 0x4e, 0x47],
  webp: [0x52, 0x49, 0x46, 0x46], // RIFF....WEBP
};

function detectFormat(buf) {
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg';
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e) return 'png';
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46) return 'webp';
  return null;
}

let totalSaved = 0;
let totalFiles = 0;

function bytesToMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED.has(ext)) return;

  const originalSize = fs.statSync(filePath).size;

  try {
    const inputBuf = fs.readFileSync(filePath);
    const actualFormat = detectFormat(inputBuf);

    if (!actualFormat) {
      console.log(`? ${path.relative(imagesDir, filePath)}  (unknown format, skipped)`);
      return;
    }

    // For files labeled .webp but are actually JPEG, output as proper WebP
    const targetFormat = (ext === '.webp' && actualFormat === 'jpeg') ? 'webp' : ext.replace('.', '');

    let outputBuf;
    if (targetFormat === 'png') {
      outputBuf = await sharp(inputBuf).png({ compressionLevel: 9, palette: true, quality: QUALITY }).toBuffer();
    } else if (targetFormat === 'jpeg' || targetFormat === 'jpg') {
      outputBuf = await sharp(inputBuf).jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    } else if (targetFormat === 'webp') {
      outputBuf = await sharp(inputBuf).webp({ quality: QUALITY }).toBuffer();
    }

    const newSize = outputBuf.length;
    const relPath = path.relative(imagesDir, filePath);

    if (newSize < originalSize) {
      // Write to temp file first, then rename (avoids Windows locking issues)
      const tmpPath = filePath + '.tmp';
      fs.writeFileSync(tmpPath, outputBuf);
      fs.renameSync(tmpPath, filePath);
      const saved = ((originalSize - newSize) / 1024 / 1024).toFixed(2);
      totalSaved += (originalSize - newSize);
      totalFiles++;
      console.log(`✓ ${relPath}  ${bytesToMB(originalSize)}MB → ${bytesToMB(newSize)}MB  (-${saved}MB)`);
    } else {
      console.log(`- ${relPath}  (already optimal, skipped)`);
    }
  } catch (err) {
    console.error(`✗ ${path.relative(imagesDir, filePath)}: ${err.message}`);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.isFile()) {
      await compressFile(fullPath);
    }
  }
}

console.log('Compressing images in public/images/ ...\n');

const start = Date.now();
await walk(imagesDir);

const elapsed = ((Date.now() - start) / 1000).toFixed(1);
console.log(`\nDone in ${elapsed}s. Compressed ${totalFiles} files, saved ${bytesToMB(totalSaved)}MB total.`);
