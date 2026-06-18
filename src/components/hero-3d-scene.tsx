"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import * as THREE from "three";

const COLUMN_POSITIONS: [number, number, number][] = [
  [-1.2, 2.25, -1.2],
  [-1.2, 2.25, 1.2],
  [1.2, 2.25, -1.2],
  [1.2, 2.25, 1.2],
];

const LEVELS = [0.5, 1.5, 2.5, 3.5, 4.2];

function SteelFrame({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -progress * 0.15;
    }
  });

  const fill = (index: number) => {
    const threshold = 0.1 + index * 0.18;
    const nextThreshold = threshold + 0.12;
    return Math.max(0, Math.min(1, (progress - threshold) / (nextThreshold - threshold)));
  };

  return (
    <group ref={groupRef} position={[1, -0.5, 0]}>
      {/* Columns — always visible when > 0 */}
      {COLUMN_POSITIONS.map((pos, i) => {
        const colOpacity = Math.min(1, progress * 3);
        return (
          <mesh key={`col-${i}`} position={pos}>
            <boxGeometry args={[0.1, 4.5, 0.1]} />
            <meshStandardMaterial
              color="#00b8d4"
              emissive="#00b8d4"
              emissiveIntensity={0.2}
              transparent
              opacity={colOpacity}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        );
      })}

      {/* Beams + panels per level */}
      {LEVELS.map((y, levelIdx) => {
        const f = fill(levelIdx);
        if (f <= 0) return null;

        const beamOpacity = f;
        const panelOpacity = Math.max(0, (f - 0.3) / 0.7);

        return (
          <group key={`level-${levelIdx}`}>
            {/* X-direction beams */}
            <mesh position={[0, y, -1.2]} rotation={[0, 0, 0]}>
              <boxGeometry args={[2.4, 0.05, 0.05]} />
              <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={0.15}
                transparent
                opacity={beamOpacity}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, y, 1.2]} rotation={[0, 0, 0]}>
              <boxGeometry args={[2.4, 0.05, 0.05]} />
              <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={0.15}
                transparent
                opacity={beamOpacity}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Z-direction beams */}
            <mesh position={[-1.2, y, 0]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.05, 0.05, 2.4]} />
              <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={0.15}
                transparent
                opacity={beamOpacity}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[1.2, y, 0]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.05, 0.05, 2.4]} />
              <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={0.15}
                transparent
                opacity={beamOpacity}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Floor panel */}
            <mesh position={[0, y - 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[2.2, 2.2]} />
              <meshStandardMaterial
                color="#00b8d4"
                transparent
                opacity={panelOpacity * 0.15}
                side={THREE.DoubleSide}
                metalness={0.3}
                roughness={0.6}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function TowerCrane({ progress }: { progress: number }) {
  const boomRef = useRef<THREE.Group>(null);
  const hookRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (boomRef.current) {
      const boomAngle = 0.4 - progress * 0.5;
      boomRef.current.rotation.z = boomAngle;
    }
    if (hookRef.current) {
      const hookY = -2 - progress * 2.5;
      hookRef.current.position.y = hookY;
    }
  });

  const cableLength = 2 + progress * 2.5;

  return (
    <group position={[-3.5, 0, 0]}>
      {/* Mast */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[0.1, 4, 0.1]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Mast cross-bracing */}
      {[0.5, 1.5, 2.5, 3.5].map((y) => (
        <mesh key={`brace-${y}`} position={[0, y, 0]}>
          <boxGeometry args={[0.04, 0.04, 0.3]} />
          <meshStandardMaterial color="#4b5563" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      {/* Boom group — pivots at top of mast */}
      <group ref={boomRef} position={[0, 4, 0]}>
        {/* Main boom arm */}
        <mesh position={[1.75, 0, 0]}>
          <boxGeometry args={[3.5, 0.05, 0.06]} />
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.1} metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Counter-boom */}
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[1.2, 0.05, 0.06]} />
          <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Counterweight */}
        <mesh position={[-0.9, -0.15, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.2]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.05} roughness={0.7} />
        </mesh>

        {/* Crane cab */}
        <mesh position={[0.1, 0.1, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.2]} />
          <meshStandardMaterial color="#00b8d4" emissive="#00b8d4" emissiveIntensity={0.1} metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Hook + cable group */}
        <group ref={hookRef} position={[3.4, 0, 0]}>
          {/* Cable */}
          <mesh position={[0, -cableLength / 2, 0]}>
            <cylinderGeometry args={[0.012, 0.012, cableLength, 4]} />
            <meshStandardMaterial color="#9ca3af" transparent opacity={0.8} />
          </mesh>

          {/* Hook */}
          <mesh position={[0, -cableLength, 0]}>
            <boxGeometry args={[0.08, 0.15, 0.06]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.1} metalness={0.5} roughness={0.4} />
          </mesh>

          {/* Load — small box being lifted (visible when progress > 0.3) */}
          {progress > 0.3 && (
            <mesh position={[0, -cableLength - 0.25, 0]}>
              <boxGeometry args={[0.35, 0.35, 0.35]} />
              <meshStandardMaterial
                color="#00b8d4"
                transparent
                opacity={Math.max(0, 1 - (progress - 0.3) * 2)}
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
          )}
        </group>
      </group>
    </group>
  );
}

function ConstructionSite({ progress }: { progress: number }) {
  const groundRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      <SteelFrame progress={progress} />
      <TowerCrane progress={progress} />

      {/* Ground plane */}
      <mesh ref={groundRef} position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial
          color="#0a1628"
          metalness={0.3}
          roughness={0.8}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Ground grid */}
      <gridHelper args={[16, 16, "#00b8d4", "#00b8d4"]} position={[0, -0.45, 0]} />
    </group>
  );
}

export default function Hero3DScene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsub = scrollProgress.on("change", setProgress);
    return () => unsub();
  }, [scrollProgress]);

  return (
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#050d1a,#0b1a30,#16243d)]">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(6,182,212,0.08),transparent_60%)]" />

      <Canvas
        camera={{ position: [5, 4, 7], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[8, 12, 4]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-4, 6, -4]} intensity={0.6} color="#00b8d4" />

        <ConstructionSite progress={progress} />

        <Sparkles
          count={40}
          scale={10}
          size={0.8}
          speed={0.1}
          color="#f97316"
          opacity={0.5 * (1 - progress)}
        />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
