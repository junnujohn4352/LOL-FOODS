import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import FoodModel from './FoodModel';

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <FoodModel position={[-2, 0, 0]} scale={0.8} />
          <FoodModel position={[0, 0, 0]} scale={1} />
          <FoodModel position={[2, 0, 0]} scale={0.8} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;