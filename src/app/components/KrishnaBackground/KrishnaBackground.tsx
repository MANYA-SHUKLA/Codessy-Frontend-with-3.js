'use client';
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

// Performance Monitor Component
function PerformanceMonitor() {
  const { gl } = useThree();
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  
  useFrame(() => {
    frameCount.current++;
    
    // Limit frame rate to 30fps for background to save performance
    const currentTime = performance.now();
    if (currentTime - lastTime.current < 33) { // ~30fps
      return;
    }
    lastTime.current = currentTime;
  });

  useEffect(() => {
    // Enable antialiasing only for high-performance devices
    const canvas = gl.domElement;
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    
    if (context) {
      const debugInfo = context.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        
        // Reduce quality for low-end devices
        if (renderer.includes('Intel') || renderer.includes('Integrated')) {
          gl.setPixelRatio(1);
        } else {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
      }
    }
  }, [gl]);

  return null;
}

// Floating Particles Component
function FloatingParticles() {
  const pointsRef = useRef<any>(null);
  const sphere = useMemo(() => random.inSphere(new Float32Array(1500), { radius: 3 }) as Float32Array, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
      
      // Pulsating scale effect
      pointsRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
      pointsRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
      pointsRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#d4af37"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Divine Orbs Component
function DivineOrbs() {
  const orbsRef = useRef<any[]>([]);
  
  const orbs = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        Math.sin((i / 6) * Math.PI * 2) * 2.5,
        Math.cos((i / 6) * Math.PI * 2) * 2.5,
        Math.sin(i) * 1.5
      ],
      color: i % 2 === 0 ? '#d4af37' : '#8b5cf6',
      scale: 0.4 + Math.random() * 0.2
    }));
  }, []);

  useFrame((state) => {
    orbsRef.current.forEach((orb, i) => {
      if (orb) {
        const time = state.clock.elapsedTime;
        orb.position.y = orbs[i].position[1] + Math.sin(time + i) * 0.2;
        orb.rotation.x = time * 0.5;
        orb.rotation.y = time * 0.3;
        
        // Pulsating effect
        const scale = orbs[i].scale * (1 + Math.sin(time * 2 + i) * 0.1);
        orb.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <>
      {orbs.map((orb, i) => (
        <Sphere
          key={i}
          ref={(ref) => { if (ref) orbsRef.current[i] = ref; }}
          args={[0.08, 16, 16]}
          position={orb.position as [number, number, number]}
          scale={orb.scale}
        >
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.5}
            toneMapped={false}
          />
        </Sphere>
      ))}
    </>
  );
}

// Flute Notes Component
function FluteNotes() {
  const notesRef = useRef<any[]>([]);
  
  const notes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        Math.sin((i / 8) * Math.PI * 2) * 1.8,
        Math.cos((i / 8) * Math.PI * 2) * 1.8,
        -1 + (i % 2) * 0.5
      ],
      delay: i * 0.5,
      scale: 0.6 + Math.random() * 0.3
    }));
  }, []);

  useFrame((state) => {
    notesRef.current.forEach((note, i) => {
      if (note) {
        const time = state.clock.elapsedTime + notes[i].delay;
        note.position.y = notes[i].position[1] + Math.sin(time * 2) * 0.3;
        note.rotation.z = time * 1.5;
        
        // Breathing scale effect
        const scale = notes[i].scale * (0.8 + Math.sin(time * 3) * 0.2);
        note.scale.set(scale, scale, scale);
        
        // Fade in and out
        note.material.opacity = 0.3 + Math.sin(time * 2) * 0.3;
      }
    });
  });

  return (
    <>
      {notes.map((note, i) => (
        <mesh
          key={i}
          ref={ref => { if (ref) notesRef.current[i] = ref; }}
          position={note.position as [number, number, number]}
          scale={note.scale}
        >
          <torusGeometry args={[0.25, 0.03, 12, 24]} />
          <meshBasicMaterial
            color="#10b981"
            transparent
            opacity={0.6}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
}

// Peacock Feather Component
function PeacockFeather() {
  const featherRef = useRef<any>(null);
  
  useFrame((state) => {
    if (featherRef.current) {
      const time = state.clock.elapsedTime;
      featherRef.current.rotation.y = time * 0.2;
      featherRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
      
      // Gentle floating motion
      featherRef.current.position.y = Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <group ref={featherRef} position={[0, 0, -2]}>
      {/* Main feather stem */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 1.5, 6]} />
        <meshBasicMaterial color="#059669" toneMapped={false} />
      </mesh>
      
      {/* Feather eye patterns - reduced count for performance */}
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[0, 0.6 - (i * 0.15), 0.08]}>
          <ringGeometry args={[0.08, 0.12, 12]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#8b5cf6' : '#d4af37'}
            transparent
            opacity={0.7}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Cosmic Energy Field Component
function CosmicEnergy() {
  const energyRef = useRef<any>(null);
  
  useFrame((state) => {
    if (energyRef.current) {
      const time = state.clock.elapsedTime;
      energyRef.current.rotation.y = time * 0.1;
      energyRef.current.rotation.x = time * 0.05;
      
      // Pulsating energy
      const scale = 1 + Math.sin(time * 2) * 0.2;
      energyRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={energyRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <shaderMaterial
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
        vertexShader={`
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            float intensity = sin(vUv.x * 8.0 + time) * 0.5 + 0.5;
            intensity *= sin(vUv.y * 6.0 + time * 1.2) * 0.5 + 0.5;
            
            vec3 color1 = vec3(0.831, 0.686, 0.216); // Gold
            vec3 color2 = vec3(0.541, 0.369, 0.965); // Purple
            vec3 color = mix(color1, color2, intensity);
            
            float alpha = intensity * 0.2 * (1.0 - length(vPosition) / 2.0);
            gl_FragColor = vec4(color, alpha);
          }
        `}
        uniforms={{
          time: { value: 0 }
        }}
      />
    </mesh>
  );
}

// Camera Controller Component
function CameraController() {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Gentle camera movement
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.05) * 0.3;
    camera.position.y = Math.cos(time * 0.05) * 0.2;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main Animated Background Component
function AnimatedBackground() {
  const { scene } = useThree();
  
  useFrame((state) => {
    // Update shader uniforms
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.ShaderMaterial) {
        if (child.material.uniforms.time) {
          child.material.uniforms.time.value = state.clock.elapsedTime;
        }
      }
    });
  });

  return (
    <>
      <FloatingParticles />
      <DivineOrbs />
      <FluteNotes />
      <PeacockFeather />
      <CosmicEnergy />
    </>
  );
}

// Main Krishna Background Component
export default function KrishnaBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 75,
          near: 0.1,
          far: 100
        }}
        gl={{
          alpha: true,
          antialias: typeof window !== 'undefined' && 
                     window.devicePixelRatio <= 1 && 
                     !navigator.userAgent.toLowerCase().includes('mobile'),
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false
        }}
        performance={{ min: 0.5 }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}
      >
        <color attach="background" args={['#0f172a']} />
        <fog attach="fog" args={['#0f172a', 3, 12]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[8, 8, 8]} intensity={0.4} color="#d4af37" />
        <pointLight position={[-8, -8, -8]} intensity={0.2} color="#8b5cf6" />
        
        <PerformanceMonitor />
        <CameraController />
        <AnimatedBackground />
      </Canvas>
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-900/80" />
      </div>
      
      {/* Dynamic glowing orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/20 rounded-full filter blur-3xl animate-glow-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-glow-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-2/3 w-48 h-48 bg-green-400/15 rounded-full filter blur-3xl animate-glow-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Mobile performance overlay */}
      <div className="absolute inset-0 md:hidden bg-slate-900/10" />
    </div>
  );
}