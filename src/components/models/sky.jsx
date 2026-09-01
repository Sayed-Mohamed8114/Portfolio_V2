import { useGLTF } from "@react-three/drei";
import skyScene from "../../assets/3d/sky.glb"

export default function sky() {
  const Sky = useGLTF(skyScene)
  return (
    <mesh>
      <primitive object={Sky.scene}/> 
    </mesh>
  )
}
