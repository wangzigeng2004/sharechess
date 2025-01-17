import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/grass03.jpg",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  moveIndicator: {
    color: "#00ff9922",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/grass03_bg.jpg",
    },
  },
  coords: {
    onLight: "#0c0f0288",
    onDark: "#e6ff9999",
    onBorder: "#e6ff99bb",
  },
};

export default style;
