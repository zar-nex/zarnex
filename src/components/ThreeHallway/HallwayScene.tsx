import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Text, Float, MeshReflectorMaterial, Environment, Stars, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

interface Subsidiary {
  id: string
  name: string
  sub: string
  desc: string
  color: string
  z: number
  side: 'left' | 'right'
}

const SUBS: Subsidiary[] = [
  {
    id: 'gallery',
    name: 'Art\nGallery',
    sub: 'Curating Vision',
    desc: 'Original works, sculpture, and immersive installation.',
    color: '#ff3300',
    z: -28,
    side: 'left',
  },
  {
    id: 'nft',
    name: 'NFT\nVault',
    sub: 'Digital Assets',
    desc: 'On-chain provenance and custody for blue-chip collectibles.',
    color: '#00ddff',
    z: -64,
    side: 'right',
  },
  {
    id: 'cafe',
    name: 'Photo\nCafé',
    sub: 'Community & Focus',
    desc: 'Working café and studio hybrid. Espresso and darkrooms.',
    color: '#b06a3a',
    z: -100,
    side: 'left',
  },
  {
    id: 'ai',
    name: 'AI\nInstitute',
    sub: 'Machine Learning',
    desc: 'Applied research and model deployment for enterprise.',
    color: '#00e87a',
    z: -136,
    side: 'right',
  },
  {
    id: 'robotics',
    name: 'Robot\nProduction',
    sub: 'Hardware Lab',
    desc: 'Precision assembly of autonomous industrial arms.',
    color: '#ff8800',
    z: -172,
    side: 'left',
  },
  {
    id: 'studio',
    name: 'Music\nStudio',
    sub: 'Sound Engineering',
    desc: 'Five live rooms. Spatial audio and artist development.',
    color: '#8800ff',
    z: -208,
    side: 'right',
  },
  {
    id: 'screens',
    name: 'Tech &\nScreens',
    sub: 'Display Technology',
    desc: 'LED architecture and immersive projection solutions.',
    color: '#0044ff',
    z: -244,
    side: 'left',
  },
]

const HALL_L = 290
const HALL_W = 26
const HALL_H = 13

export function HallwayScene({ scrollProgress }: { scrollProgress: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const { size } = useThree()
  
  const totalScrollable = SUBS[SUBS.length - 1].z - 18
  
  useFrame((state, delta) => {
    const targetZ = 8 + totalScrollable * scrollProgress
    cameraRef.current.position.z += (targetZ - cameraRef.current.position.z) * 0.1
    
    // Slower sway
    cameraRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    cameraRef.current.position.y = 1.9 + Math.sin(state.clock.elapsedTime * 0.15) * 0.05
    
    // Look slightly ahead
    cameraRef.current.lookAt(cameraRef.current.position.x * 0.5, 2.1, cameraRef.current.position.z - 12)
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={58} near={0.1} far={500} position={[0, 1.9, 8]} />
      
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#f0eeeb" />
      <directionalLight position={[0, 20, 5]} intensity={1} castShadow />
      
      {/* Atmosphere */}
      <fog attach="fog" args={['#ffffff', 18, 100]} />
      <Stars radius={100} depth={50} count={3000} factor={2} saturation={0} fade speed={1} />

      {/* Hallway Structure */}
      <group>
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -HALL_L / 2 + 5]} receiveShadow>
          <planeGeometry args={[HALL_W, HALL_L + 20]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={2}
            roughness={0.8}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#f5f5f7"
            metalness={0.2}
            mirror={1}
          />
        </mesh>

        {/* Ceiling */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, HALL_H, -HALL_L / 2 + 5]}>
          <planeGeometry args={[HALL_W, HALL_L + 20]} />
          <meshStandardMaterial color="#eeeeee" roughness={0.8} />
        </mesh>

        {/* Walls */}
        <mesh position={[-HALL_W / 2, HALL_H / 2, -HALL_L / 2 + 5]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[HALL_L + 20, HALL_H]} />
          <meshStandardMaterial color="#e5e5ea" roughness={0.9} />
        </mesh>
        <mesh position={[HALL_W / 2, HALL_H / 2, -HALL_L / 2 + 5]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[HALL_L + 20, HALL_H]} />
          <meshStandardMaterial color="#e5e5ea" roughness={0.9} />
        </mesh>

        {/* Pillars */}
        {useMemo(() => {
          const pillars = []
          for (let z = 0; z > -(HALL_L - 10); z -= 14) {
            pillars.push(
              <group key={`p-${z}`}>
                <mesh position={[-HALL_W / 2 + 1.2, HALL_H / 2, z]}>
                  <boxGeometry args={[0.55, HALL_H, 0.55]} />
                  <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
                </mesh>
                <mesh position={[HALL_W / 2 - 1.2, HALL_H / 2, z]}>
                  <boxGeometry args={[0.55, HALL_H, 0.55]} />
                  <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
                </mesh>
              </group>
            )
          }
          return pillars
        }, [])}

        {/* Strip Lights */}
        {useMemo(() => {
          const strips = []
          for (let z = -4; z > -(HALL_L - 10); z -= 14) {
            strips.push(
              <group key={`s-${z}`}>
                 <mesh position={[0, HALL_H - 0.1, z]}>
                    <boxGeometry args={[0.3, 0.08, 2.5]} />
                    <meshStandardMaterial color="#c5a059" emissive="#c5a059" emissiveIntensity={2} />
                 </mesh>
                 <pointLight position={[0, HALL_H - 0.5, z]} intensity={1.5} distance={22} color="#c5a059" />
              </group>
            )
          }
          return strips
        }, [])}

        {/* Entry Branding */}
        <group position={[0, 0, 7.5]}>
           <mesh position={[0, HALL_H/2, 0]}>
              <boxGeometry args={[HALL_W + 1, HALL_H + 2, 0.5]} />
              <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.9} />
           </mesh>
           <Text
              position={[0, 4, 0.3]}
              fontSize={1.5}
              color="#d4af37"
              anchorX="center"
              anchorY="middle"
           >
              Z/\RNEX HOLDING
           </Text>
           <Text
              position={[0, 2.5, 0.3]}
              fontSize={0.8}
              color="#86868b"
              fillOpacity={0.8}
              anchorX="center"
              anchorY="middle"
           >
              BUILDING THE FUTURE.
           </Text>
           <pointLight position={[0, 4, 1]} intensity={1} color="#d4af37" distance={10} />
        </group>

        {/* Zones */}
        {SUBS.map((sub, i) => (
          <Zone key={sub.id} sub={sub} index={i} />
        ))}
      </group>
    </>
  )
}

function Zone({ sub, index }: { sub: Subsidiary, index: number }) {
  const groupRef = useRef<THREE.Group>(null!)
  const sx = sub.side === 'left' ? -1 : 1
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Group subtle float
    groupRef.current.position.y = Math.sin(t * 0.5 + index) * 0.1
  })

  return (
    <group ref={groupRef} position={[sx * 7, 0, sub.z]}>
      {/* Zone Light */}
      <pointLight intensity={3} distance={30} color={sub.color} position={[0, 4, 0]} />
      
      {/* Decorative Volume */}
      <mesh position={[0, HALL_H / 2 - 0.5, 0]}>
        <boxGeometry args={[12, HALL_H - 1, 16]} />
        <meshStandardMaterial color={sub.color} transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>

      {/* Floating Name */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          position={[0, 4, 0]}
          fontSize={1.2}
          color={sub.color}
          anchorX="center"
          anchorY="middle"
          maxWidth={8}
          textAlign="center"
        >
          {sub.name.toUpperCase()}
        </Text>
      </Float>

      {/* Corporate Indicator */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 16]} />
        <meshStandardMaterial color={sub.color} transparent opacity={0.1} />
      </mesh>
      
      <mesh position={[sx * -2.5, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.2, 16]} />
        <meshStandardMaterial color={sub.color} emissive={sub.color} emissiveIntensity={1} />
      </mesh>
    </group>
  )
}
