

import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";


const XrHitModelContainer = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas className="pos-absolute absolute">
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    </div>
  );
};

export default XrHitModelContainer;
