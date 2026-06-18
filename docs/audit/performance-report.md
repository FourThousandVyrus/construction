# Performance Report — Epicshield Surfaces

This report documents performance optimizations needed for the Epicshield Surfaces website.

---

## 1. Current State & Assets Analysis

### Heavy Images
The `/public/images` directory contains 27 image files, several of which exceed 200KB or 400KB in size:
* `image_2.jpeg` (520KB)
* `image_15.jpeg` (459KB)
* `image_16.jpeg` (389KB)
* `image_12.jpeg` (233KB)

### 3D Render Overhead
The website loads `@react-three/fiber` and `@react-three/drei` on the Home page (`MedicalHeroScene`), Capabilities page (`Department3DIcon`), and Emergency page (`MedicalHeroScene`).
* **Problem:** These libraries add significant bundle weight (~200KB gzipped).
* **Impact:** Blocking main thread and causing high Interaction to Next Paint (INP) latency on low-end mobile devices.

---

## 2. Action Plan

### Image Asset Optimization
1. Use Next.js `next/image` with explicit width/height and `priority` attribute for above-the-fold assets (e.g. Hero backgrounds).
2. Set sizes attribute for images inside grids (e.g., `(max-width: 768px) 100vw, 33vw`) to avoid loading desktop-sized images on mobile devices.
3. Lazy-load non-priority images by default.

### 3D Scene Performance
1. Wrap all React Three Fiber canvases in `Suspense` with a lightweight, CSS-only skeleton fallback.
2. Ensure canvases use flat rendering options or lower pixel ratios on device screens with pixel ratios above 2.
3. Implement dynamic imports with `ssr: false` for the 3D-heavy components to shrink the initial page chunk.
