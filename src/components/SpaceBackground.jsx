import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import * as THREE from "three"
import { useRef } from "react"


function GlitterParticles({ count = 100 }) {
  const mesh = useRef()
  const temp = new THREE.Object3D()

  const particles = Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 50,
    y: (Math.random() - 0.5) * 50,
    z: (Math.random() - 0.5) * 50,
    scale: Math.random() * 0.5 + 0.2,
    speed: Math.random() * 0.002 + 0.001,
  }))

  useFrame(() => {
    let i = 0
    for (const particle of particles) {
      const t = Date.now() * particle.speed
      temp.position.set(
        particle.x + Math.sin(t) * 2,
        particle.y + Math.cos(t * 0.7) * 2,
        particle.z + Math.sin(t * 0.5) * 2
      )
      temp.scale.setScalar(particle.scale)
      temp.updateMatrix()
      mesh.current.setMatrixAt(i++, temp.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color="#ff69b4" emissive="#c084fc" emissiveIntensity={1.5} />
    </instancedMesh>
  )
}


export default function SpaceBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      {}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      {}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {}
      <GlitterParticles count={200} />
    </Canvas>
  )
}
