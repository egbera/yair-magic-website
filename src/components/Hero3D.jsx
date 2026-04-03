import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles as DreiSparkles, Center, Text3D } from '@react-three/drei';
import * as THREE from 'three';
import './Hero3D.css';

// Using a placeholder box for "cards" or a mystic object
function MagicOrb() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#9d4edd" 
          emissive="#7b2cbf" 
          emissiveIntensity={0.8}
          wireframe={true}
        />
      </mesh>
      {/* Inner solid core */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#0f0525" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

const Hero3D = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content container">
        <div className="hero-text">
          <h2 className="hero-subtitle">Prepare to be amazed</h2>
          <h1 className="hero-title">
            The Magic of <br/>
            <span className="glow-text-gold">Yair</span>
          </h1>
          <p className="hero-description">
            Experience illusions, mind-bending card tricks, and unforgettable moments with a 12-year-old prodigy redefining magic.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn-primary">Discover More</a>
            <a href="#booking" className="btn-outline">Book a Show</a>
          </div>
        </div>
        
        <div className="hero-canvas-container floating">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ffbe3d" />
            
            <MagicOrb />
            
            {/* Sparkles around the orb */}
            <DreiSparkles count={100} scale={4} size={2} speed={0.4} color="#ffbe3d" />
            <DreiSparkles count={50} scale={5} size={3} speed={0.2} color="#9d4edd" />

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5}/>
            <Environment preset="night" />
          </Canvas>
          <div className="glow-backdrop"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
