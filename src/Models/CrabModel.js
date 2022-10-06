/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { DoubleSide, Vector3 } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/desktopAndCrab.gltf");
  const position = new Vector3(0, -7.9, 0);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["desktopandcrab-0"].geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
        position={position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["desktopandcrab-1"].geometry}
        material={materials["palette.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        position={position}
      />
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={new Vector3(6, -8, -2)}
      >
        <planeGeometry args={[48, 48]} />
        <meshStandardMaterial color={"#3F3F46"} side={DoubleSide} />
      </mesh>
      <spotLight
        castShadow
        args={["#aaaaaa", 0.5, 0, Math.PI / 6, 0.4]}
        position={[-1, 40, -1]}
      />
    </group>
  );
}

useGLTF.preload("/desktopAndCrab.gltf");
