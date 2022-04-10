import { Style } from "../../../types";

const style: Style = {
  name: "Spring",
  category: "solid",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#6BB53E",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#C1D997",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#00ffff55",
  },
  border: {
    type: "solid",
    data: {
      color: "#40761E",
    },
  },
  coords: {
    onLight: "#40761E",
    onDark: "#DBF5AD",
    onBorder: "#DBF5AD",
  },
};

export default style;
