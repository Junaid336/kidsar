import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";

import { useSearchParams } from "react-router-dom";
// import Model from "./Model";



function Model(props) {
  let [searchParams] = useSearchParams();
  let id = searchParams.get("id")
  const { scene } = useGLTF(`/models/${id}.gltf`)
  return <primitive object={scene} {...props} />
}




const XrHitModel = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id, scale: [0.1, 0.1, 0.1] }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model key={id} position={position} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Model />}
    </>
  );
};

export default XrHitModel;
