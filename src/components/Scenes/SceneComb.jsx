import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SceneComb = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
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
        camera.position.set(15.25, 4.33, 8.68);
        camera.rotation.set(0.04, -0.25, 0.01);
        let position = 0;

        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25;
        // controls.enableZoom = true;
        // controlsRef.current = controls;

        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/assets/models/comb_sisters/scene.gltf', function (gltf) {
            const model = gltf.scene;
            scene.add(model);

            const handleMouseUp = (event) => {

                // console.log(`
                //     pos.x: ${camera.position.x}
                //     pos.y: ${camera.position.y}
                //     pos.z: ${camera.position.z}
                // `)
                // console.log(`
                //     rotation.x: ${camera.rotation.x}
                //     rotation.y: ${camera.rotation.y}
                //     rotation.z: ${camera.rotation.z}
                // `)

                if (!container.contains(event.target)) return;
                switch (position) {
                    case 0:
                        // Center
                        moveCamera(17.29, 6.66, 10.15);
                        rotateCamera(-0.58, 0.95, 0.49);
                        position = 1;
                        break;
                    case 1:
                        // Picture
                        moveCamera(-2.74, 7.52, 3.99);
                        rotateCamera(-0.94, 1.46, 0.93);
                        position = 2;
                        break;
                    case 2:
                        // Door
                        moveCamera(1.74, 3.72, 8.56);
                        rotateCamera(-0.13, -1.22, -0.12);
                        position = 3;
                        break;
                    case 3:
                        // Bucket
                        moveCamera(-2.73, 2.48, 11.93);
                        rotateCamera(-2.74, -1.34, -2.75);
                        position = 4;
                        break;
                    case 4:
                        // Backwall
                        moveCamera(-22.51, 4.56, 10.95);
                        rotateCamera(-1.13, -1.46, -1.13);
                        position = 5;
                        break;
                    case 5:
                        // Corner
                        moveCamera(-2.77, 5.37, 7.97);
                        rotateCamera(-2.86, 0.96, 2.91);
                        position = 6;
                        break;
                    case 6:
                        // ladder
                        moveCamera(15.25, 4.33, 8.68);
                        rotateCamera(0.04, -0.25, 0.01);
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

            // if (controlsRef.current) {
            //     controlsRef.current.dispose();
            // }
        };
    }, []);

    return (
        <div className='three-scene-container' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div ref={containerRef} className='scene' style={{ position: 'relative', width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default SceneComb;
