import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const RotatingGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.1;
      wireRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -t * 0.05;
      outerRef.current.rotation.z = Math.sin(t * 0.06) * 0.1;
    }
  });

  return (
    <group>
      {/* Inner glowing sphere */}
      <Sphere ref={meshRef} args={[2.2, 64, 64]}>
        <MeshDistortMaterial
          color="#00d9ff"
          emissive="#00b8d4"
          emissiveIntensity={0.08}
          transparent
          opacity={0.08}
          distort={0.15}
          speed={1.2}
        />
      </Sphere>
      {/* Wireframe overlay */}
      <Sphere ref={wireRef} args={[2.22, 40, 40]}>
        <meshBasicMaterial
          color="#00d9ff"
          wireframe
          transparent
          opacity={0.12}
        />
      </Sphere>
      {/* Outer shell - faint */}
      <Sphere ref={outerRef} args={[2.5, 24, 24]}>
        <meshBasicMaterial
          color="#4dd0e1"
          wireframe
          transparent
          opacity={0.06}
        />
      </Sphere>
      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.7, 0.015, 16, 120]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
        <torusGeometry args={[2.85, 0.01, 16, 120]} />
        <meshBasicMaterial color="#4dd0e1" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[Math.PI / 3, -0.2, 0.3]}>
        <torusGeometry args={[2.95, 0.008, 16, 120]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

const Globe = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 1 }}>
      <div className="w-[340px] h-[340px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={0.4} color="#00d9ff" />
          <pointLight position={[-5, -3, 3]} intensity={0.2} color="#4dd0e1" />
          <RotatingGlobe />
        </Canvas>
      </div>
    </div>
  );
};

export default Globe;
