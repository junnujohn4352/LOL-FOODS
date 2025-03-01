import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import { Mesh } from 'three';

// This is a placeholder component for 3D food models
// In a real application, you would use actual 3D models
const FoodModel: React.FC<{ position?: [number, number, number], scale?: number }> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FF6B6B" roughness={0.5} metalness={0.2} />
      </mesh>
    </Float>
  );
};

export default FoodModel;