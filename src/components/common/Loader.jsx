import { Html } from "@react-three/drei";
export default function Loader() {
  return (
    //this html that we imported from three-drei is to make the loader as three js component
    <Html>
      <div className="flex justify-center items-center ">
        <div className="w-20 h-20 border-2 opacity-5 border-blue-500 border-t-blue-950 rounded-full animate-spin " />
      </div>
    </Html>
  );
}
