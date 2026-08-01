import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function CrystalOrb({
  position,
  scale = 1,
  speed = 1,
  color = "#38bdf8",
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15 * speed;
    ref.current.rotation.y += delta * 0.25 * speed;
  });

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.55}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function Ring({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.z -= delta * 0.12;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1.1, 0.06, 16, 64]} />
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.8}
          roughness={0.2}
          emissive="#0284c7"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} />
      <pointLight position={[-3, -2, -2]} intensity={0.6} color="#67e8f9" />
      <CrystalOrb position={[0, 0.1, 0]} scale={1.15} color="#38bdf8" />
      <CrystalOrb position={[-1.6, 0.9, -0.4]} scale={0.38} speed={1.4} color="#22d3ee" />
      <CrystalOrb position={[1.5, -0.7, 0.3]} scale={0.32} speed={0.9} color="#0ea5e9" />
      <Ring position={[0.1, 0, 0]} scale={1.35} />
      <Environment preset="city" />
    </>
  );
}

function SceneFallback() {
  return (
    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-100 to-cyan-50 dark:from-slate-900 dark:to-slate-800 animate-pulse" />
  );
}

/** Lightweight Three.js hero sculpture — lazy-safe and mobile-friendly */
export const Hero3DScene = () => {
  return (
    <div
      className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square mx-auto"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-500/10 to-transparent blur-3xl" />
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};
