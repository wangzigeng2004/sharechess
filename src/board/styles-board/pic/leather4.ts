import { Style } from "../../../types";

const style: Style = {
  category: "pic",
  background: {
    type: "image",
    data: {
      src: "/textures/leather04.jpg",
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
    color: "#00ff0022",
  },
  border: {
    type: "image",
    data: {
      src: "/textures/leather04_bg.jpg",
    },
  },
  coords: {
    onLight: "#5b4a3e",
    onDark: "#dcbea7",
    onBorder: "#211b17ee",
  },
};

export default style;
