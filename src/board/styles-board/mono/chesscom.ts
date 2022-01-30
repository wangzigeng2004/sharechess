import { Style } from "../../../types";

const style: Style = {
  name: "Chessc*m",
  category: "mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#769656",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#eeeed2",
    },
  },
  moveIndicator: {
    type: "color",
    data: "#ffff007f",
  },
  border: {
    type: "solid",
    data: {
      color: "#40522f",
    },
  },
  coords: {
    onLight: "#40522f",
    onDark: "#fcfce1",
    onBorder: "#eeeed2",
  },
};

export default style;
