import { Style } from "../../../types";

const style: Style = {
  name: "Lila",
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
      color: "#c0acb5",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#e5d0cb",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -120,
  },
  border: {
    type: "solid",
    data: {
      color: "#735c66",
    },
  },
  coords: {
    onLight: "#876b77",
    onDark: "#fff5f2",
    onBorder: "#e5d0cb",
  },
};

export default style;
