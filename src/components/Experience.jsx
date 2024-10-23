import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useAtom } from "jotai";
import { Book } from "./Book";
import { pageAtom } from "./UI";

// Modify these values in your Book.jsx
const insideCurveStrength = 0.12; // Reduced from 0.18
const outsideCurveStrength = 0.03; // Reduced from 0.05
const turningCurveStrength = 0.06; // Reduced from 0.09

export const Experience = () => {
  const [currentPage] = useAtom(pageAtom);
  const isBookClosed = currentPage === 0;
  
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={isBookClosed ? 1 : 0}
        speed={2}
        rotationIntensity={isBookClosed ? 2 : 0}
        floatingRange={isBookClosed ? [0, 0.5] : [0, 0]}
      >
        <Book />
      </Float>
      <OrbitControls />
      <Environment preset="studio" intensity={0.5} /> {/* Reduced environment light intensity */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[2, 5, 2]}
        intensity={1.2} // Reduced from 2.5
        color="#fdf4dc"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <spotLight
        position={[-5, 5, 2]}
        intensity={0.3}
        color="#fdf4dc"
        angle={0.5}
        penumbra={1}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.15} /> {/* Slightly reduced shadow opacity */}
      </mesh>
    </>
  );
};