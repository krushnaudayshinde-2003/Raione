import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef, useMemo } from 'react';

const BinaryParticles = ({ count = 600 }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30; // wider spread
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 15 - 5;
      const char = Math.random() > 0.5 ? '0' : '1';
      const speed = Math.random() * 0.5 + 0.1;
      const scale = Math.random() * 0.3 + 0.1;
      const opacity = Math.random() * 0.6 + 0.1;
      temp.push({ x, y, z, char, speed, scale, opacity, id: i });
    }
    return temp;
  }, [count]);

  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      child.position.y -= p.speed * 0.05;
      child.position.x += Math.sin(state.clock.elapsedTime * p.speed + p.id) * 0.005;
      
      // Reset position when falling out of bounds
      if (child.position.y < -12) {
        child.position.y = 12;
        child.position.x = (Math.random() - 0.5) * 30;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p) => (
        <Text
          key={p.id}
          position={[p.x, p.y, p.z]}
          fontSize={p.scale}
          color="#7b61ff"
          fillOpacity={p.opacity}
          anchorX="center"
          anchorY="middle"
        >
          {p.char}
        </Text>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <fog attach="fog" args={['#050505', 5, 15]} />
        <BinaryParticles count={600} />
      </Canvas>
    </div>
  );
};

export default Scene;
