// const STRIPS = [
//     [1, 2, 2, 2, 3, wildSymbol, 3, 1, bonusSymbol, 1],
//     [1, 2, 2, 3, 1, wildSymbol, 2, bonusSymbol, 2, 2],
//     [1, 2, 2, 2, 3, wildSymbol, 3, 1, bonusSymbol, 2],
//     [1, 2, 2, 2, bonusSymbol, 3, 1, 3, 2, 1, wildSymbol],
//     [1, wildSymbol, 1, 1, 2, 3, bonusSymbol, 3],
// ];

const STRIPS = [
  [1, 2, 4, 2, 3, 4, 3, 1, 1],
  [1, 2, 2, 3, 2, 3, 2, 2, 1],
  [1, 2, 2, 2, 3, 3, 3, 1, 1],
  [1, 2, 2, 2, 3, 3, 3, 1, 1],
  [1, 2, 1, 1, 2, 3],
];

const ASSETS = {
  1: 'images/symbol/sym1.png',
  2: 'images/symbol/sym2.png',
  3: 'images/symbol/sym3.png',
  4: 'images/symbol/sym4.png',
  wildSymbol: 'images/symbol/images_wild.png',
  bonusSymbol: 'images/symbol/bonus.png',
};

const texturesValueSelector = {
  buttonHover: 'images/valueSelectorButton/continue_button_hover.png',
  buttonNormal: 'images/valueSelectorButton/continue_button_normal.png',
  buttonPressed: 'images/valueSelectorButton/continue_button_pressed.png',
  buttonDisabled: 'images/valueSelectorButton/continue_button_disabled.png',
};

export { STRIPS, ASSETS, texturesValueSelector };
