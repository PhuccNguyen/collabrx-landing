'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Sphere, Box, Torus, Float, Line, Trail, Sparkles } from '@react-three/drei'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import * as THREE from 'three'


// Extend the three-fiber catalog with Line2
extend({ Line2, LineMaterial, LineGeometry })

const AnimatedSphere: React.FC<{ position: [number, number, number]; color: string; delay: number }> = ({ 
  position, 
  color, 
  delay 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + delay
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + delay
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1 + 1
      meshRef.current.scale.setScalar(pulse)
    }
    
    if (materialRef.current) {
      const glow = Math.sin(state.clock.elapsedTime * 3 + delay) * 0.1 + 0.3
      materialRef.current.emissiveIntensity = glow
    }
  })

  return (
    <Float speed={1 + delay * 0.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[0.6, 32, 32]} position={position}>
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <Sparkles 
        count={20} 
        scale={2} 
        size={2} 
        speed={0.5}
        color={color}
        position={position}
      />
    </Float>
  )
}

const BlockchainCube: React.FC<{ position: [number, number, number]; delay: number }> = ({ position, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireframeMeshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + delay
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + delay
    }
    if (wireframeMeshRef.current) {
      wireframeMeshRef.current.rotation.y = state.clock.elapsedTime * -0.3 + delay
      wireframeMeshRef.current.rotation.x = state.clock.elapsedTime * -0.2 + delay
    }
  })

  return (
    <Float speed={2 + delay * 0.3} rotationIntensity={1} floatIntensity={1.2}>
      <group position={position}>
        {/* Solid core */}
        <Box ref={meshRef} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial
            color="#0d9488"
            transparent
            opacity={0.3}
            emissive="#0d9488"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.9}
          />
        </Box>
        {/* Wireframe overlay */}
        <Box ref={wireframeMeshRef} args={[1, 1, 1]}>
          <meshStandardMaterial
            color="#14B8A6"
            wireframe
            transparent
            opacity={0.7}
            emissive="#14B8A6"
            emissiveIntensity={0.1}
          />
        </Box>
      </group>
    </Float>
  )
}

const ConnectingLines: React.FC = () => {
  // ✅ khai báo kiểu rõ ràng
  const points: [number, number, number][] = useMemo(() => [
    [-2,  1,  0],
    [ 0,  0,  0],
    [ 2, -1,  0],
    [ 0,  0,  0],
    [-3, -1, -1],
    [ 0,  0,  0],
    [ 3,  1, -1],
  ], []);

  return (
    <>
      {points.slice(0, -1).map((point, index) => {
        if (index % 2 === 1) return null // Skip center points for rendering
        const nextPoint = points[index + 1]
        return (
          <Line
            key={index}
            // ✅ ép TypeScript hiểu đây là 2 tuple 3D
            points={[
              point as [number, number, number],
              nextPoint as [number, number, number],
            ]}
            color="#14B8A6"
            lineWidth={2}
            transparent
            opacity={0.6}
            dashed
            dashSize={0.1}
            gapSize={0.05}
          />
        )
      })}
    </>
  )
}

const DataParticles: React.FC = () => {
  const particleCount = 50
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        speed: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "#14B8A6" : "#0d9488"
      })
    }
    return temp
  }, [])

  return (
    <>
      {particles.map((particle, index) => (
        <Float key={index} speed={particle.speed} floatIntensity={2}>
          <Sphere args={[0.02, 8, 8]} position={particle.position}>
            <meshBasicMaterial color={particle.color} transparent opacity={0.8} />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

const RotatingTorus: React.FC = () => {
  const torusRef = useRef<THREE.Mesh>(null)
  const torus2Ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (torus2Ref.current) {
      torus2Ref.current.rotation.x = state.clock.elapsedTime * -0.15
      torus2Ref.current.rotation.z = state.clock.elapsedTime * 0.25
    }
  })

  return (
    <>
      <Torus ref={torusRef} args={[2.5, 0.1, 16, 100]} position={[0, 0, -2]}>
        <meshStandardMaterial
          color="#14B8A6"
          transparent
          opacity={0.4}
          emissive="#14B8A6"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
      <Torus ref={torus2Ref} args={[1.8, 0.08, 12, 80]} position={[0, 0, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#0d9488"
          transparent
          opacity={0.3}
          emissive="#0d9488"
          emissiveIntensity={0.15}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </>
  )
}

const CloudBlockchainScene: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#14B8A6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0d9488" />
        <pointLight position={[0, 10, 5]} intensity={0.6} color="#06b6d4" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#14B8A6"
          castShadow
        />

        {/* Main Elements */}
        <AnimatedSphere position={[-2.5, 1.5, 0]} color="#14B8A6" delay={0} />
        <AnimatedSphere position={[2.5, -1.5, 0.5]} color="#06b6d4" delay={1} />
        <AnimatedSphere position={[0, 2, -1]} color="#0d9488" delay={2} />
        
        <BlockchainCube position={[0, 0, 0]} delay={0} />
        <BlockchainCube position={[-3, -1, -1]} delay={0.5} />
        <BlockchainCube position={[3, 1, -1]} delay={1} />
        <BlockchainCube position={[1, -2, 1]} delay={1.5} />
        
        <ConnectingLines />
        <RotatingTorus />
        <DataParticles />

        {/* Post-processing effects */}
        <fog attach="fog" args={['#0B1220', 8, 20]} />
      </Canvas>
      
      {/* Overlay gradient for better integration */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 20%, rgba(11, 18, 32, 0.3) 70%)`
        }}
      />
    </div>
  )
}

export default CloudBlockchainScene
