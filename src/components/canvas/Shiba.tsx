import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { CanvasLoader } from "../common";

const Shiba = ({ isMobile }: { isMobile: boolean }) => {
	const shiba = useGLTF("./shiba/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight
				position={[10, 50, 10]}
				angle={0.15}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={shiba.scene}
				scale={isMobile ? 35 : 40}
				position={[0, isMobile ? 12 : 10, 10]}
				rotation={[0, 0, 0]}
			/>
		</mesh>
	);
};

const ShibaCanvas = () => {
	const isMobile = useMediaQuery("(max-width: 1024px)");

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [30, 0, 100], fov: 40 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Shiba isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ShibaCanvas;
