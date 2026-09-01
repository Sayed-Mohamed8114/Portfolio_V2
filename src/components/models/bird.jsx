import { useGLTF } from "@react-three/drei";
import Bird from "../../assets/3d/bird.glb"


export default function bird() {
    const {scene,animations} = useGLTF(Bird)
  return (
    <mesh position={[-5,2,1]} scale={[0.0030,0.003,0.003]}>
        <primitive object={scene} />
    </mesh>
  )
}
