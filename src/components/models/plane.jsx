import { useGLTF } from "@react-three/drei";
import Plane from "../../assets/3d/plane.glb"

export default function plane({isRotating , ...props }) {
    const {scene , animations }  = useGLTF(Plane)
  return (
    <mesh {...props}>
        <primitive  object={scene}/>
    </mesh>
  )
}
