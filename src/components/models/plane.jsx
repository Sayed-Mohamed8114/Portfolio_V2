import { useAnimations, useGLTF } from "@react-three/drei";
import Plane from "../../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

export default function plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(Plane);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
