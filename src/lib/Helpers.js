const disposeModel = (model) => {
  model.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry) {
        child.geometry.dispose();
      }
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        if (child.material.normalMap) child.material.normalMap.dispose();
        if (child.material.roughnessMap) child.material.roughnessMap.dispose();
        if (child.material.metalnessMap) child.material.metalnessMap.dispose();
        if (child.material.dispose) child.material.dispose();
      }
    }
  });
};

export { disposeModel };
