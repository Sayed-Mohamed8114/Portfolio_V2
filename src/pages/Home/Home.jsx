import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../../components/common/Loader";
import { Island } from "../../components/models/island";
import Sky from "../../components/models/sky";
import Bird from "../../components/models/bird";
import Plane from "../../components/models/plane";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenHome = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenHome = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenHome();
  const [planeScale, planePosition] = adjustPlaneForScreenHome();
  return (
    <section className="w-full h-screen relative">
      <Canvas
    style={{touchAction:"none"}}
        className={`w-full h-screen bg-transparent ${isRotating ? `cursor-grabbing` : `cursor-grab`} `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/*directional light = is like a light come from a source like the sun or whatever
          position in it = is like the position of the sun and where the light will full on the figure 
          intensity in in = the bold of the light  
          */}
          <directionalLight position={[1, 1, 1]} intensity={1.2} />
          <ambientLight intensity={1} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Bird />
          <Plane 
          isRotating={isRotating} rotation={[0,20,0]}
          planeScale={planeScale} planePosition={planePosition} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
