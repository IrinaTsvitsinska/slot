// const { TWEEN, Tween, Easing } = require('@tweenjs/tween.js');
import { Tween, Easing } from '@tweenjs/tween.js';
// import { Easing, TWEEN } from '@tweenjs/tween.js/dist/tween.umd';
//import { Tween } from "@tweenjs/tween.js";

export function scale(obj, startScale, toScale, duration, easing = Easing.Linear.None) {
    obj.scale.set(startScale.x, startScale.y);

    const anim = new Tween(obj.scale);//Tween(obj.scale);

    anim.to({ x: toScale.x, y: toScale.y }, duration);

    anim.easing(easing);
    console.log(easing);

    anim.start();

    return anim;

}