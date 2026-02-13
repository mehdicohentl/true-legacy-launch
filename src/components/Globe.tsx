import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const RotatingGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12;
      wireRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group>
      {/* Inner glowing sphere */}
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#c9a962"
          emissive="#c9a962"
          emissiveIntensity={0.15}
          transparent
          opacity={0.12}
          distort={0.2}
          speed={1.5}
        />
      </Sphere>
      {/* Wireframe overlay */}
      <Sphere ref={wireRef} args={[1.82, 32, 32]}>
        <meshBasicMaterial
          color="#c9a962"
          wireframe
          transparent
          opacity={0.2}
        />
      </Sphere>
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#c9a962" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <torusGeometry args={[2.4, 0.015, 16, 100]} />
        <meshBasicMaterial color="#c9a962" transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

const Globe = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 0 }}>
      <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px]">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#c9a962" />
          <RotatingGlobe />
        </Canvas>
      </div>
    </div>
  );
};

export default Globe;
