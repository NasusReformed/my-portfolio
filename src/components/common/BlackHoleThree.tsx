'use client';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { ShaderMaterial } from 'three';
extend({ ShaderMaterial });

export default function BlackHoleThree() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <BackgroundDistortion />
          <BlackHole />
          <ParticleSwirl />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.5} intensity={2.5} />
        </EffectComposer>
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}

function BlackHole() {
  const group = useRef<THREE.Group>(null);
  const accretionDiskRef = useRef<THREE.Mesh>(null);
  const clock = useRef(new THREE.Clock());

  useFrame(() => {
    const time = clock.current.getElapsedTime();
    if (accretionDiskRef.current) {
      const mat = accretionDiskRef.current.material as THREE.ShaderMaterial;
      if (mat && mat.uniforms && mat.uniforms.time) {
        mat.uniforms.time.value = time;
      }
    }
    if (group.current) {
      group.current.rotation.y += 0.0015;
      group.current.rotation.x = Math.sin(clock.current.elapsedTime * 0.2) * 0.1;
    }
  });

  const accretionShader = useMemo(
    () => ({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      varying vec2 vUv;
      uniform float time;
      void main() {
        float dist = distance(vUv, vec2(0.5));
        float ring = smoothstep(0.2, 0.21, dist) - smoothstep(0.48, 0.5, dist);
        float glow = sin(dist * 20.0 - time * 2.0) * 0.5 + 0.5;
        vec3 color = mix(vec3(1.0, 0.4, 0.0), vec3(1.0, 1.0, 0.2), glow);
        gl_FragColor = vec4(color * ring * glow, ring);
      }
    `,
    }),
    [],
  );

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <mesh>
        <ringGeometry args={[0.52, 0.65, 64]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={accretionDiskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.7, 1.5, 128]} />
        {/* @ts-ignore */}
        <shaderMaterial
          attach="material"
          args={[accretionShader]}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
    </group>
  );
}

function BackgroundDistortion() {
  const ref = useRef<THREE.Mesh>(null);
  const distortionShader = useMemo(
    () => ({
      uniforms: { time: { value: 0 } },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      varying vec2 vUv;
      uniform float time;
      void main() {
        vec2 uv = vUv - 0.5;
        float r = length(uv);
        float angle = atan(uv.y, uv.x);
        float distortion = 0.05 / r;
        uv.x += cos(angle) * distortion;
        uv.y += sin(angle) * distortion;
        uv += 0.5;
        vec3 col = vec3(0.01, 0.01, 0.02) + 0.02 * sin(20.0 * r - time);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
    }),
    [],
  );

  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.ShaderMaterial;
      if (mat && mat.uniforms && mat.uniforms.time) {
        mat.uniforms.time.value = clock.getElapsedTime();
      }
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial args={[distortionShader]} side={THREE.BackSide} />
    </mesh>
  );
}

function ParticleSwirl() {
  const particles = useRef<THREE.Points>(null);
  const count = 1000;
  const dummy = new THREE.Object3D();
  const speeds = useMemo(
    () => Array.from({ length: count }, () => Math.random() * 0.002 + 0.001),
    [],
  );
  const distances = useMemo(() => Array.from({ length: count }, () => Math.random() * 3 + 0.5), []);
  const angles = useRef(new Float32Array(count).map(() => Math.random() * Math.PI * 2));

  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      col[i * 3] = 1.0;
      col[i * 3 + 1] = 0.5 + Math.random() * 0.5;
      col[i * 3 + 2] = 0.0;
    }
    return col;
  }, [count]);

  useFrame(() => {
    for (let i = 0; i < count; i++) {
      angles.current[i] += speeds[i];
      distances[i] *= 0.997; // spiral inwards
      const r = distances[i];
      const angle = angles.current[i];

      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = Math.sin(angle) * r;
    }
    if (particles.current) {
      particles.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.05} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}
