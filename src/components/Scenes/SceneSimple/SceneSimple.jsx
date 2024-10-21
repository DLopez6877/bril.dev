import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const SceneSimple = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!rendererRef.current) {
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            const dpr = window.devicePixelRatio || 1;
            renderer.setPixelRatio(Math.min(dpr, 2));
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setClearColor(0x272727);
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;
        }

        const renderer = rendererRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 0, 10);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xA9F43A });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        window.addEventListener('resize', () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', null);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default SceneSimple;
