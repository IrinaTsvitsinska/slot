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
  const anim = new TWEEN.Tween({ value: startValue });

  anim.to({ value: maxValue }, countUpDuration);
  anim.onUpdate((param) => {
    const text = (param.value).toFixed(2);
    this.bigWin();
    this.countUpText.setText(text);
  });
  anim.easing(TWEEN.Easing.Cubic.Out);
  anim.start();
  return anim;
}