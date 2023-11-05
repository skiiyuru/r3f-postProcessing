import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"
import Effects from "./Effects"

export default function Experience() {
  const glowStrength = 10

  return (
    <>
      <color attach={"background"} args={["#000909"]} />

      {/* Effects */}
      <Effects />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        {/* <meshStandardMaterial
          toneMapped={false}
          // color={[1.5, 1, 4]}
          // color={"orange"}
          color={"white"}
          emissive={"orange"}
          emissiveIntensity={2}
        /> */}
        <meshBasicMaterial
          color={[4 * glowStrength, 1 * glowStrength, 2 * glowStrength]}
          toneMapped={false}
        />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}
