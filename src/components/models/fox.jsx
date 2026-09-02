import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Fox from "../../assets/3d/fox.glb"

export default function fox() {
    const ref = useRef(); 
    const {scene , animations} = useGLTF(Fox);
    const actions = useAnimations(animations , ref) ; 
    
  return (
    <div>fox</div>
  )
}
