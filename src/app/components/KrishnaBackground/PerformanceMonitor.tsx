'use client';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export function PerformanceMonitor() {
  const { gl, scene, camera } = useThree();
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  
  useFrame(() => {
    frameCount.current++;
    
  
    const currentTime = performance.now();
    if (currentTime - lastTime.current < 33) { 
      return;
    }
    lastTime.current = currentTime;
  });

  useEffect(() => {

    const canvas = gl.domElement;
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    
    if (context) {
      const debugInfo = context.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        

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
