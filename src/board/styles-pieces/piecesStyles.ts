const piecesStyles = [
  "tatiana",
  "tatiana_wood",
  "tatiana_calm",
  "tatiana_sweet",
  "staunty",
  "staunty_wood",
  "staunty_blue",
  "staunty_lila",
  "governor_bw",
  "governor",
  "governor_patina",
  "governor_purple",
  "alpha",
  "alpha_ink",
  "alpha_wood",
  "alpha_mint",
  "anarchy",
  "anarchy_candy",
  "anarchy_fresh",
  "anarchy_sepia",
  // "anarchy_plug",
  // "anarchy_plug_candy",
  // "anarchy_plug_fresh",
  // "anarchy_plug_sepia",
  "california",
  "california_brown",
  "california_green",
  "california_red",
  "dubrovny_bw",
  "dubrovny",
  "dubrovny_brown",
  "dubrovny_green",
  "gioco",
  "gioco_wood",
  "gioco_metal",
  "gioco_purple",
  "cburnett",
  "cburnett_brown",
  "cburnett_blue",
  "cburnett_purple",
  "adventurer",
  "alfonso_x",
  "berlin",
  "cardinal",
  "cases",
  "checkers",
  "chess7",
  "chessnut",
  "companion",
  "condal",
  "fantasy",
  "fresca",
  "harlequin",
  "horsey",
  "icpieces",
  "kingdom",
  "kosal",
  "leipzig",
  "letter",
  "libra",
  "line",
  "lucena",
  "maestro",
  "magnetic",
  "mark",
  "marroquin",
  "maya",
  "mediaeval",
  "merida",
  "millennia",
  "motif",
  "pirat",
  "pirouetti",
  "pixel",
  "regular",
  "reillycraig",
  "riohacha",
  "shapes",
  "smart",
  "spatial",
  "symmetric",
  "tfb",
  "traveller",
  "utrecht",
  "wisdom",
] as const;

export const pieceNames = [
  "bb",
  "bw",
  "kb",
  "kw",
  "nb",
  "nw",
  "pb",
  "pw",
  "qb",
  "qw",
  "rb",
  "rw",
] as const;

export type PiecesStyle = typeof piecesStyles[number];

export type PieceName = typeof pieceNames[number];

export default piecesStyles;
