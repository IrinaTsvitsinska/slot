import TWEEN from '@tweenjs/tween.js';

export function scale(
  obj,
  startScale,
  toScale,
  duration,
  easing = TWEEN.Easing.Linear.None
) {
  obj.scale.set(startScale.x, startScale.y);

  const anim = new TWEEN.Tween(obj.scale);

  anim.to({ x: toScale.x, y: toScale.y }, duration);
  anim.easing(easing);
  anim.start();

  return anim;
}

export function opacity(obj, startOpacity, finishOpacity, duration) {
  obj.alpha = startOpacity;

  const anim = new TWEEN.Tween(obj);
  anim.to({ alpha: finishOpacity }, duration);
  anim.start();

  return anim;
}


export function countUpAnimHolder(maxValue, startValue, countUpDuration) {
  const countUpAnimHolder = new TWEEN.Tween({ value: startValue });

  countUpAnimHolder.to({ value: maxValue }, countUpDuration);
  countUpAnimHolder.onUpdate((param) => {
    const text = (param.value).toFixed(2);
    this.bigWin();
    // if (+text > this.megaWinValueMin) {
    //     this.megaWin();

    //     if (+text > this.superMegaWinValueMin) {
    //         this.superMegaWin();

    //     }
    // }
    this.countUpText.setText(text);
  });
  countUpAnimHolder.easing(TWEEN.Easing.Cubic.Out);
  countUpAnimHolder.start();
}