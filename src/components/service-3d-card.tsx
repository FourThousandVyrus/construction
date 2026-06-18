"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export function Service3DCard({
  href,
  eyebrow,
  title,
  copy,
  color = "#2f6b69",
}: {
  href: string;
  eyebrow: string;
  title: string;
  copy: string;
  color?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex h-[400px] flex-col justify-end overflow-hidden rounded-[2rem] border border-[rgba(16,39,43,0.08)] bg-white/72 p-6 transition-all duration-300 hover:bg-white/80 hover:shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true, alpha: true }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh scale={1.5}>
                  <sphereGeometry args={[1, 32, 32]} />
                  <MeshDistortMaterial color={color} speed={2} distort={0.2} transparent opacity={0.15} />
                </mesh>
              </Float>
            </Suspense>
          </Canvas>
        )}
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        {/* Holographic Data Overlay (Hover Only) */}
        <div className="pointer-events-none absolute -top-40 -right-4 h-32 w-48 rounded-2xl border border-white/20 bg-white/5 p-4 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:-top-32 group-hover:opacity-100 sm:-right-8">
           <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite]" />
           </div>
            <p className="text-[8px] uppercase tracking-widest text-[var(--slate-soft)]">Site Telemetry</p>
            <div className="mt-2 h-[1px] w-full bg-white/10" />
            <div className="mt-3 flex items-center justify-between">
               <span className="text-[10px] text-white/40">Status</span>
               <span className="text-[10px] font-bold text-green-400 uppercase">Active</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
               <span className="text-[10px] text-white/40">Progress</span>
               <span className="text-[10px] font-bold text-white">78.4%</span>
            </div>
        </div>

        <p className="text-xs uppercase tracking-[0.22em] text-[var(--slate-strong)]">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{copy}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--slate-strong)] transition-transform group-hover:translate-x-1"
        >
          Explore Solution
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
