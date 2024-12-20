import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { disposeModel } from "../../lib/Helpers";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./ThreeScene.scss";
import ReactGA from "react-ga4";

const ThreeScene = ({ cameraPositions }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const [loading, setLoading] = useState(true);
  let position = 0;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    if (!rendererRef.current) {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      const dpr = window.devicePixelRatio || 1;
      renderer.setPixelRatio(Math.min(dpr, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0xe2e4d0);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;

      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    }

    const renderer = rendererRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe2e4d0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    if (!cameraPositions) {
      camera.position.set(0, 0, 0);
      camera.rotation.set(-2.01, -0.9, -2.11);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.5;
      controls.enableZoom = true;
      controls.update();
      controlsRef.current = controls;
    } else {
      const { posX, posY, posZ, rotateX, rotateY, rotateZ } =
        cameraPositions[cameraPositions.length - 1];
      camera.position.set(posX, posY, posZ);
      camera.rotation.set(rotateX, rotateY, rotateZ);
    }

    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"
    );
    gltfLoader.setDRACOLoader(dracoLoader);
    let model;
    THREE.Cache.enabled = true;

    gltfLoader.load(
      "/assets/bril_gallery/scene.gltf",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setLoading(false);
        // three provides error state
      }
    );

    const handleMouseUp = (event) => {
      if (!container.contains(event.target)) return;
      ReactGA.event({
        category: "Click",
        action: "Clicked Scene",
        label: event.target,
      });

      if (!cameraPositions) {
        console.log(`
camera.position.set(${camera.position.x.toFixed(
          2
        )}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)});
camera.rotation.set(${camera.rotation.x.toFixed(
          2
        )}, ${camera.rotation.y.toFixed(2)}, ${camera.rotation.z.toFixed(2)});
`);
      } else {
        const { posX, posY, posZ, rotateX, rotateY, rotateZ } =
          cameraPositions[position];
        moveCamera(posX, posY, posZ);
        rotateCamera(rotateX, rotateY, rotateZ);
        position = (position + 1) % cameraPositions.length;
      }
    };

    window.addEventListener("mouseup", handleMouseUp);

    function moveCamera(x, y, z) {
      gsap.to(camera.position, { x, y, z, duration: 3 });
    }

    function rotateCamera(x, y, z) {
      gsap.to(camera.rotation, { x, y, z, duration: 3.2 });
    }

    function animate() {
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    const resizeObserver = new ResizeObserver(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    resizeObserver.observe(container);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);

      if (rendererRef.current) {
        rendererRef.current.setAnimationLoop(null);
        rendererRef.current.dispose();
      }

      if (model) {
        disposeModel(model);
        scene.remove(model);
      }

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      resizeObserver.disconnect();
    };
  }, [cameraPositions]);

  return (
    <div className="three-scene-container">
      {loading && (
        <div className="loading-message">
          <span>Loading 3d scene</span>
          <div className="ellipsis">...</div>
        </div>
      )}

      <div
        ref={containerRef}
        className="scene"
        style={{ position: "relative", width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default ThreeScene;
