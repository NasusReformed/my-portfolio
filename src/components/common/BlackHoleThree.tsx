'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Shader Interstellar mejorado
const fragShader = `
#define PI 3.14159265359
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
  float r = length(uv);
  float angle = atan(uv.y, uv.x);
  angle += u_time * 0.18;

  // Photon ring: más definido y brillante
  float photonRing = smoothstep(0.19, 0.205, r) - smoothstep(0.205, 0.22, r);
  photonRing *= 1.0 + 0.45 * sin(angle * 2.0 + u_time * 0.7);
  photonRing = pow(photonRing, 0.7);
  // Disco de acreción asimétrico y gradiente relativista
  float disk = exp(-pow((r - 0.33) * 3.0, 2.0)) * (0.7 + 0.3 * sin(angle + u_time * 0.2));
  float diskColor = smoothstep(-0.1, 0.5, uv.y + 0.05) * (0.7 + 0.3 * cos(angle - 0.5));
  vec3 diskCol = mix(vec3(1.0, 0.5, 0.1), vec3(1.0, 0.8, 0.3), 0.5 + 0.5 * sin(angle - u_time * 0.1));
  diskCol = mix(diskCol, vec3(1.0, 0.2, 0.0), 0.4 + 0.6 * pow(1.0 - abs(uv.y), 2.0));
  // Coloración relativista (azulado abajo, rojizo arriba)
  diskCol = mix(diskCol, vec3(0.7, 0.8, 1.0), smoothstep(0.0, -0.3, uv.y));
  diskCol = mix(diskCol, vec3(1.0, 0.5, 0.2), smoothstep(0.0, 0.3, uv.y));

  // Núcleo negro absoluto
  float core = 1.0 - smoothstep(0.16, 0.19, r);

  // Lente gravitacional fuerte cerca del horizonte
  float lens = 0.07 / (r + 0.07);
  uv += lens * uv * (1.0 + 0.3 * sin(u_time * 0.2));

  // Sutiles detalles de distorsión y brillo
  float glow = 0.08 / (abs(r - 0.2) + 0.01);
  vec3 glowCol = vec3(1.0, 0.8, 0.4) * glow * 0.5;

  // Composición final
  vec3 color = vec3(0.0);
  color += diskCol * disk * diskColor * (1.0 - core);
  color += vec3(1.0, 0.95, 0.7) * photonRing * 2.5;
  color += glowCol * (1.0 - core);
  color *= 1.0 - core;
  color = mix(color, vec3(0.0), core);
  color = pow(color, vec3(0.8)); // gamma
  gl_FragColor = vec4(color, 1.0);
}
`;

const vertShader = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

export default function BlackHoleThree() {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    rendererRef.current = renderer;
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2() },
    };
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertShader,
      fragmentShader: fragShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };
    window.addEventListener('resize', handleResize);
    const handleMouseMove = (e: MouseEvent) => {
      uniforms.u_mouse.value.x = e.clientX;
      uniforms.u_mouse.value.y = height - e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    const clock = new THREE.Clock();
    let running = true;
    function animate() {
      if (!running) return;
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      aria-hidden="true"
    />
  );
}
