import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'

function App() {
  return (
    <div>
       <Canvas shadows>
        <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
