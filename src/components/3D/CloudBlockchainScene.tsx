'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group, BufferGeometry, Material } from 'three';
import * as THREE from 'three';

// Enhanced Floating Cube với improved animation
function FloatingCube({ 
  position, 
  color, 
  scale = 0.8,
  speed = 0.5 
}: { 
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * speed + position[0]) * 0.4;
      meshRef.current.rotation.y = time * speed * 0.7;
      meshRef.current.rotation.z = Math.cos(time * speed + position[2]) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(time * 1.5 + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.8 + position[1]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        wireframe
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Enhanced DNA Helix với more complex animation
function DNAHelix() {
  const groupRef = useRef<Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const helixPoints = useMemo(() => {
    const points = [];
    const doubleHelix = [];
    
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 4;
      const x1 = Math.cos(angle) * 0.5;
      const z1 = Math.sin(angle) * 0.5;
      const x2 = Math.cos(angle + Math.PI) * 0.5;
      const z2 = Math.sin(angle + Math.PI) * 0.5;
      const y = (i / 40) * 4 - 2;
      
      points.push([x1, y, z1] as [number, number, number]);
      doubleHelix.push([x2, y, z2] as [number, number, number]);
    }
    
    return { points, doubleHelix };
  }, []);

  return (
    <group ref={groupRef} position={[-3.5, 0, -1]}>
      {/* First helix strand */}
      {helixPoints.points.map((point, index) => (
        <mesh key={`helix1-${index}`} position={point}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color="#14b8a6"
            emissive="#14b8a6"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Second helix strand */}
      {helixPoints.doubleHelix.map((point, index) => (
        <mesh key={`helix2-${index}`} position={point}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color="#2dd4bf"
            emissive="#2dd4bf"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Connecting bonds */}
      {helixPoints.points.map((point, index) => {
        if (index % 3 === 0 && index < helixPoints.doubleHelix.length) {
          const endPoint = helixPoints.doubleHelix[index];
          const midPoint = [
            (point[0] + endPoint[0]) / 2,
            (point[1] + endPoint[1]) / 2,
            (point[2] + endPoint[2]) / 2
          ] as [number, number, number];
          
          return (
            <mesh key={`bond-${index}`} position={midPoint}>
              <cylinderGeometry args={[0.02, 0.02, 1]} />
              <meshStandardMaterial 
                color="#0ea5e9"
                transparent
                opacity={0.6}
              />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
}

// Enhanced Central Sphere với pulsing effect
function CentralSphere() {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null!);
  const innerSphereRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null!);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.1;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.3;
      
      // Pulsing scale effect
      const scale = 1 + Math.sin(time * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
    
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x = -time * 0.2;
      innerSphereRef.current.rotation.y = -time * 0.4;
      const innerScale = 0.7 + Math.cos(time * 2.5) * 0.05;
      innerSphereRef.current.scale.setScalar(innerScale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#14b8a6"
          emissive="#14b8a6"
          emissiveIntensity={0.15}
          transparent
          opacity={0.7}
          wireframe
        />
      </mesh>
      
      {/* Inner sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.8, 24, 24]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

// Enhanced Particle Field với layers
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const pointsRef2 = useRef<THREE.Points>(null!);
  
  const { particles1, particles2 } = useMemo(() => {
    const temp1 = new Float32Array(1500 * 3);
    const temp2 = new Float32Array(800 * 3);
    
    // First layer - larger spread
    for (let i = 0; i < 1500; i++) {
      temp1[i * 3] = (Math.random() - 0.5) * 20;
      temp1[i * 3 + 1] = (Math.random() - 0.5) * 20;
      temp1[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    // Second layer - closer particles
    for (let i = 0; i < 800; i++) {
      temp2[i * 3] = (Math.random() - 0.5) * 12;
      temp2[i * 3 + 1] = (Math.random() - 0.5) * 12;
      temp2[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    
    return { particles1: temp1, particles2: temp2 };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.rotation.x = time * 0.01;
    }
    if (pointsRef2.current) {
      pointsRef2.current.rotation.y = -time * 0.03;
      pointsRef2.current.rotation.z = time * 0.01;
    }
  });

  return (
    <group>
      {/* First particle layer */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles1.length / 3}
            array={particles1}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#2dd4bf"
          size={0.02}
          transparent
          opacity={0.4}
          sizeAttenuation={true}
        />
      </points>
      
      {/* Second particle layer */}
      <points ref={pointsRef2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles2.length / 3}
            array={particles2}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#0ea5e9"
          size={0.015}
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}

// Network Connections
function NetworkConnections() {
  const linesRef = useRef<
    THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>
  >(null!);
  
  const connectionGeometry = useMemo(() => {
    const vertices = [];
    const colors = [];
    
    // Create network connections
    const nodes = [
      [0, 0, 0],        // Center
      [3, 0, -1],       // Blockchain area
      [-3.5, 0, -1],    // DNA area
      [1.5, 2, 1],      // Top right
      [-1.5, -2, 1],    // Bottom left
      [2, -1.5, -2],    // Bottom right back
      [-2, 1.5, 2],     // Top left front
    ];
    
    // Connect nodes with lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) { // Random connections
          vertices.push(...nodes[i], ...nodes[j]);
          
          // Color gradient
          colors.push(0.08, 0.72, 0.65, 0.08, 0.72, 0.65); // #14b8a6
        }
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (!linesRef.current) return;
    const mat = linesRef.current.material; // now LineBasicMaterial
    mat.transparent = true;
    mat.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  return (
    <lineSegments ref={linesRef} geometry={connectionGeometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.3} linewidth={1} />
    </lineSegments>
  );
}

// Main Enhanced Scene
function Scene() {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} color="#f0f9ff" />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#14b8a6" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#0ea5e9" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#2dd4bf"
      />
      
      {/* 3D Objects */}
      <CentralSphere />
      <DNAHelix />
      
      {/* Enhanced Blockchain Network */}
      <FloatingCube position={[3, 0, -1]} color="#0ea5e9" scale={0.9} speed={0.6} />
      <FloatingCube position={[3.8, 0.5, -0.5]} color="#3b82f6" scale={0.7} speed={0.8} />
      <FloatingCube position={[2.5, -0.5, -1.5]} color="#1d4ed8" scale={0.6} speed={0.7} />
      <FloatingCube position={[3.2, 0.8, -2]} color="#0ea5e9" scale={0.8} speed={0.5} />
      <FloatingCube position={[4.2, -0.3, -1.2]} color="#2563eb" scale={0.5} speed={0.9} />
      
      {/* Additional floating elements */}
      <FloatingCube position={[-1, 2.5, 1]} color="#14b8a6" scale={0.4} speed={1.2} />
      <FloatingCube position={[1, -2.5, 1.5]} color="#2dd4bf" scale={0.6} speed={0.4} />
      
      <ParticleField />
      <NetworkConnections />
    </>
  );
}

// Enhanced Error Fallback
function SceneFallback() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: `
        radial-gradient(circle at 30% 40%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at center, rgba(20, 184, 166, 0.04) 0%, transparent 70%)
      `,
      pointerEvents: 'none'
    }} />
  );
}

export default function CloudBlockchainScene() {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0 
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        performance={{ min: 0.5, max: 1 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={(state) => {
          state.gl.setClearColor('#020617', 0);
        }}
      >
        <color attach="background" args={['#020617']} />
        <fog attach="fog" args={['#020617', 5, 25]} />
        <Suspense fallback={<SceneFallback />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
