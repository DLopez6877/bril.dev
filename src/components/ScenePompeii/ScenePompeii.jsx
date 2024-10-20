import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import './ScenePompeii.scss';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ScenePompeii = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);
    const [gl, setGl] = useState(null);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return;


        const container = containerRef.current;


        if (!rendererRef.current) {
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            const dpr = window.devicePixelRatio || 1;
            renderer.setPixelRatio(Math.min(dpr, 2));
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setClearColor(0xE2E4D0);
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;

            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;
        }

        const renderer = rendererRef.current;
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(5, 1.1, -7);
        let position = 0;

        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/public/assets/models/room_amorini_dorati_house__pompeii/scene.gltf', function (gltf) {
            const model = gltf.scene;
            scene.add(model);

            const handleMouseUp = (event) => {
                if (!container.contains(event.target)) return;
                switch (position) {
                    case 0:
                        moveCamera(5.5, 0.8, -12);
                        rotateCamera(0, 0.1, 0);
                        position = 1;
                        break;
                    case 1:
                        moveCamera(4, -1.8, -10);
                        rotateCamera(0.1, -1.1, 0.1);
                        position = 2;
                        break;
                    case 2:
                        moveCamera(6.5, 1, -10);
                        rotateCamera(0, -1.6, 0);
                        position = 3;
                        break;
                    case 3:
                        moveCamera(3, 1, -12);
                        rotateCamera(0, -1.2, 0);
                        position = 4;
                        break;
                    case 4:
                        moveCamera(5, 1.6, -7);
                        rotateCamera(0, 0.1, 0);
                        position = 0;
                        break;
                    default:
                        break;
                }
            };

            window.addEventListener('mouseup', handleMouseUp);

            function moveCamera(x, y, z) {
                gsap.to(camera.position, {
                    x,
                    y,
                    z,
                    duration: 3,
                });
            }

            function rotateCamera(x, y, z) {
                gsap.to(camera.rotation, {
                    x,
                    y,
                    z,
                    duration: 3.2,
                });
            }

            return () => {
                window.removeEventListener('mouseup', handleMouseUp);
            };
        });

        function animate() {
            renderer.render(scene, camera);
        }

        renderer.setAnimationLoop(animate);

        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return (
        <div className='three-scene-container'>
            <div ref={containerRef} className='scene'></div>
        </div>
    );
};

export default ScenePompeii;
