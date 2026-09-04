import { Html } from "@react-three/drei";
export default function Loader() {
  return (
    //this html that we imported from three-drei is to make the loader as three js component
    <Html>
      <div className="flex justify-center items-center ">
        <div className="w-20 h-20 border-2 opacity-5 border-sky-900 border-t-blue-600 rounded-full animate-spin " />
      </div>
    </Html>
  );
}
