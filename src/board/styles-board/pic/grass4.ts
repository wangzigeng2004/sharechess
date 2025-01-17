import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/grass04.jpg",
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
    color: "#00ff5522",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/grass04_bg.jpg",
    },
  },
  coords: {
    onLight: "#0e0f0288",
    onDark: "#fcff9999",
    onBorder: "#fcff99bb",
  },
};

export default style;
