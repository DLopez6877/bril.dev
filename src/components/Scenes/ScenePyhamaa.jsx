import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { disposeModel } from '../../lib/Helpers';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ScenePyhamaa = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);
    // const controlsRef = useRef(null);

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
        camera.position.set(6.82, 1.52, 0.97);
        camera.rotation.set(0, 1.48, 0);
        let position = 0;

        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25;
        // controls.enableZoom = true;
        // controlsRef.current = controls;

        const gltfLoader = new GLTFLoader();
        let model;

        gltfLoader.load('/assets/models/sacrification_church_of_pyhamaa/scene.gltf', function (gltf) {
            model = gltf.scene;
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
                        // Entered
                        moveCamera(3.72, 2.31, 1.72);
                        rotateCamera(0.06, 0.69, -0.03);
                        position = 1;
                        break;
                    case 1:
                        // Front
                        moveCamera(1.88, 4.04, -2.42);
                        rotateCamera(-0.25, 0.50, 0.12);
                        position = 2;
                        break;
                    case 2:
                        // Boat
                        moveCamera(-1.67, 2.42, -0.64);
                        rotateCamera(-1.15, 1.37, 1.15);
                        position = 3;
                        break;
                    case 3:
                        // Back
                        moveCamera(-0.41, 2.63, 1.22);
                        rotateCamera(-3.09, 0.04, 3.13);
                        position = 4;
                        break;
                    case 4:
                        // Entrance
                        moveCamera(6.82, 1.52, 0.97);
                        rotateCamera(0, 1.48, 0);
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
            if (rendererRef.current) {
                rendererRef.current.setAnimationLoop(null);
                rendererRef.current.dispose();
            }

            if (model) {
                disposeModel(model);
                scene.remove(model);
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

export default ScenePyhamaa;
