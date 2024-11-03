const keyboard_cats = [
  //cats
  {
    posX: -0.24,
    posY: 2.23,
    posZ: 0.16,
    rotateX: -0.03,
    rotateY: -0.03,
    rotateZ: -0.0,
  },
  // back left
  {
    posX: -0.89,
    posY: 0.55,
    posZ: 3.79,
    rotateX: 0.13,
    rotateY: -0.19,
    rotateZ: 0.02,
  },
  // faces
  {
    posX: 6.54,
    posY: 1.94,
    posZ: 1.8,
    rotateX: -0.79,
    rotateY: -1.53,
    rotateZ: -0.79,
  },
  // corner
  {
    posX: -1.54,
    posY: 1.86,
    posZ: 3.09,
    rotateX: -0.8,
    rotateY: -1.39,
    rotateZ: -0.8,
  },
  // main
  {
    posX: 4.83,
    posY: 1.53,
    posZ: 3.79,
    rotateX: -0.0,
    rotateY: 0.02,
    rotateZ: 0.0,
  },
];

const faces = [
  {
    posX: 8.68,
    posY: 0.95,
    posZ: 0.09,
    rotateX: -0.09,
    rotateY: 0.16,
    rotateZ: -0.04,
  },
  {
    posX: 8.17,
    posY: 2.72,
    posZ: -0.48,
    rotateX: -0.16,
    rotateY: 0.06,
    rotateZ: 0.01,
  },
  {
    posX: 9.27,
    posY: 2.62,
    posZ: 1.48,
    rotateX: -0.16,
    rotateY: -1.56,
    rotateZ: -0.16,
  },
  {
    posX: 6.27,
    posY: 1.58,
    posZ: 1.48,
    rotateX: -0.16,
    rotateY: -1.56,
    rotateZ: -0.16,
  },
  {
    posX: 8.63,
    posY: 1.78,
    posZ: 2.52,
    rotateX: -0.09,
    rotateY: 0.06,
    rotateZ: 0.01,
  },
];

const mountain = [
  {
    posX: -0.35,
    posY: 1.96,
    posZ: 2.92,
    rotateX: -3.11,
    rotateY: 0.08,
    rotateZ: 3.14,
  },
  {
    posX: 1.92,
    posY: 1.09,
    posZ: 2.65,
    rotateX: -3.08,
    rotateY: 0.03,
    rotateZ: 3.14,
  },
  {
    posX: 3.66,
    posY: 1.86,
    posZ: 2.62,
    rotateX: -3.08,
    rotateY: 0.03,
    rotateZ: 3.14,
  },
  {
    posX: 1.85,
    posY: 1.76,
    posZ: 0.92,
    rotateX: -3.11,
    rotateY: -0.06,
    rotateZ: 3.14,
  },
];

const raptor = [
  {
    posX: 8.56,
    posY: 2.26,
    posZ: 3.28,
    rotateX: 3.14,
    rotateY: -0.09,
    rotateZ: 3.14,
  },
  {
    posX: 6.19,
    posY: 0.85,
    posZ: 2.49,
    rotateX: 3.14,
    rotateY: -0.09,
    rotateZ: 3.14,
  },
  {
    posX: 4.55,
    posY: 1.84,
    posZ: 2.35,
    rotateX: 3.07,
    rotateY: -0.38,
    rotateZ: 3.12,
  },
  {
    posX: 7.55,
    posY: 1.34,
    posZ: 0.65,
    rotateX: 3.11,
    rotateY: -0.0,
    rotateZ: 3.14,
  },
  {
    posX: 7.55,
    posY: 2.43,
    posZ: 2.53,
    rotateX: 3.11,
    rotateY: -0.0,
    rotateZ: 3.14,
  },
];

const all = [
  {
    posX: 6.19,
    posY: 0.85,
    posZ: 2.49,
    rotateX: 3.14,
    rotateY: -0.09,
    rotateZ: 3.14,
  },
  // raptor
  {
    posX: 7.55,
    posY: 1.34,
    posZ: 0.65,
    rotateX: 3.11,
    rotateY: -0.0,
    rotateZ: 3.14,
  },
  // faces
  {
    posX: 6.27,
    posY: 1.58,
    posZ: 1.48,
    rotateX: -0.16,
    rotateY: -1.56,
    rotateZ: -0.16,
  },
  // name wall
  {
    posX: 8.63,
    posY: 1.78,
    posZ: 2.52,
    rotateX: -0.09,
    rotateY: 0.06,
    rotateZ: 0.01,
  },
  // name
  {
    posX: 8.17,
    posY: 2.72,
    posZ: -0.48,
    rotateX: -0.16,
    rotateY: 0.06,
    rotateZ: 0.01,
  },
  // zoomed faces
  {
    posX: 9.27,
    posY: 2.62,
    posZ: 1.48,
    rotateX: -0.16,
    rotateY: -1.56,
    rotateZ: -0.16,
  },
  // back left
  {
    posX: -0.89,
    posY: 0.55,
    posZ: 3.79,
    rotateX: 0.13,
    rotateY: -0.19,
    rotateZ: 0.02,
  },
  // main
  {
    posX: 4.83,
    posY: 1.53,
    posZ: 3.79,
    rotateX: -0.0,
    rotateY: 0.02,
    rotateZ: 0.0,
  },
  // red hood
  {
    posX: -0.35,
    posY: 1.96,
    posZ: 2.92,
    rotateX: -3.11,
    rotateY: 0.08,
    rotateZ: 3.14,
  },
  // cat sphere
  {
    posX: 1.85,
    posY: 1.76,
    posZ: 0.92,
    rotateX: -3.11,
    rotateY: -0.06,
    rotateZ: 3.14,
  },
  // mtv
  {
    posX: 3.66,
    posY: 1.86,
    posZ: 2.62,
    rotateX: -3.08,
    rotateY: 0.03,
    rotateZ: 3.14,
  },
  // corner
  {
    posX: -1.54,
    posY: 1.86,
    posZ: 3.09,
    rotateX: -0.8,
    rotateY: -1.39,
    rotateZ: -0.8,
  },
];

export { keyboard_cats, mountain, raptor, faces, all };
