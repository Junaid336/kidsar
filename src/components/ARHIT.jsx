import React, { Suspense, useRef, useState } from 'react'
import { extend } from '@react-three/fiber'
import { Interactive, XR, ARButton, Controllers, useHitTest } from '@react-three/xr'
import { Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// extend({ boxBufferGeometry })

function Box({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest} position-z={-1}>
      <boxGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  )
}

function Button(props) {
  const [hover, setHover] = useState(false)
  const [color, setColor] = useState('blue')

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0)
      
  }

//    const reticleRef = useRef();
//     useHitTest((hitMatrix, hit) =>{
//         hitMatrix.decompose(
//         reticleRef.current.position, 
//        // reticleRef.quaternion, 
//         reticleRef.current.scale);
    
//     });
    const [cubes , setcubes] = useState([]);
    const placecube= (e) => {
        let position =e.intersection.object.position.clone();
        let id =Date.now();
        setcubes([...cubes,{position,id}]);

    
    };

  return (
    <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={[onSelect, placecube] } >
      <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.8, 0.2, 0.2]} {...props}> 
        <Suspense fallback={null}>
          <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
            Hello react-xr!
          </Text>
        </Suspense>
      </Box>
    </Interactive>
  )
}

const ARHIT = () => {
  return ( 
     
    <>
      <ARButton sessionInit={{
        requiredFeatures:["hit-test"],
      }}/>
      <Canvas className='min-h-screen min-w-screen'>
        <XR referenceSpace="local">
          <ambientLight />
          {/* {Box.map(({ position,id }) => {
            return <Box key={id} position={position}/>;
          })} */}
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}

export default ARHIT