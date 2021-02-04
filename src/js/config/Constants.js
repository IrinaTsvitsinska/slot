const STRIPS = [
  [1, 2, 2, 2, 3, 7, 3, 1, 6, 1],
  [1, 2, 2, 3, 1, 6, 2, 6, 2, 2],
  [1, 2, 2, 2, 3, 7, 3, 1, 6, 2],
  [1, 2, 2, 2, 6, 3, 1, 3, 2, 1, 7],
  [1, 7, 1, 1, 2, 3, 6, 3],
];

// const STRIPS = [
//   [1, 2, 4, 2, 3, 4, 3, 1, 1],
//   [1, 2, 2, 3, 2, 3, 2, 2, 1],
//   [1, 2, 2, 2, 3, 3, 3, 1, 1],
//   [1, 2, 2, 2, 3, 3, 3, 1, 1],
//   [1, 2, 1, 1, 2, 3],
// ];

const WIN_LINES = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0],
  [2, 1, 0, 1, 2],
  [0, 0, 1, 0, 0],
  [2, 2, 1, 2, 2],
  [1, 2, 2, 2, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1]
];

const ASSETS = {
  1: 'images/symbol/sym1.png',
  2: 'images/symbol/sym2.png',
  3: 'images/symbol/sym3.png',
  4: 'images/symbol/sym4.png',
  wildSymbol: 'images/symbol/images_wild.png',
  6: 'images/symbol/bar.png',
  7: 'images/symbol/sym7.png'
};

const texturesValueSelector = {
  buttonHover: 'images/valueSelectorButton/continue_button_hover.png',
  buttonNormal: 'images/valueSelectorButton/continue_button_normal.png',
  buttonPressed: 'images/valueSelectorButton/continue_button_pressed.png',
  buttonDisabled: 'images/valueSelectorButton/continue_button_disabled.png',
};

const BigWinBtnTextures = {
  buttonHover: 'images/bigWinBtnTextures/continue_button_hover.png',
  buttonNormal: 'images/bigWinBtnTextures/continue_button_normal.png',
  buttonPressed: 'images/bigWinBtnTextures/continue_button_pressed.png',
  buttonDisabled: 'images/bigWinBtnTextures/continue_button_disabled.png',
};

const COUNTUP_DURATION = 5000;

export { STRIPS, ASSETS, texturesValueSelector, COUNTUP_DURATION, BigWinBtnTextures };
