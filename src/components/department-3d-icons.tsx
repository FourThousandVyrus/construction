"use client";

import { useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function BuildingIcon() {
  const frameRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (frameRef.current) {
      frameRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      frameRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
    }
  });
  return (
    <group ref={frameRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <MeshDistortMaterial color="#f97316" speed={2} distort={0.15} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.4, 0.15, 0.4]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[0.6, 0.1, 0.6]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
    </group>
  );
}

function ToolIcon() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 1.2;
    }
  });
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.7, 0.2, 64, 8]} />
        <MeshWobbleMaterial color="#64748b" speed={2} factor={0.4} />
      </mesh>
    </Float>
  );
}

function GearIcon() {
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.8;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.6;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = state.clock.getElapsedTime() * 1.2;
    }
  });
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[0.8, 0.06, 12, 24]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh ref={innerRef}>
        <torusGeometry args={[0.35, 0.04, 8, 12]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

function BlueprintIcon() {
  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial color="#f97316" speed={3} distort={0.3} wireframe />
      </mesh>
    </Float>
  );
}

export function Department3DIcon({ type }: { type: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-24 w-24 bg-gray-50/50 animate-pulse rounded-2xl" />;

  return (
    <div className="h-24 w-24">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {type === "Turnkey Construction" ? <BuildingIcon /> : null}
          {type === "Civil & Infrastructure" ? <BuildingIcon /> : null}
          {type === "MEP & Technical Systems" ? <GearIcon /> : null}
          {type === "Project Management" ? <BlueprintIcon /> : null}
        </Suspense>
      </Canvas>
    </div>
  );
}