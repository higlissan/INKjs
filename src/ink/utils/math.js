/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as is from "./is";

/**
 * @class Math
 */

/**
 * <h4>π (半円)</h4>
 * @static
 * @property PI
 * @type {Number}
 */
export const PI = Math.PI;


/**
 * <h4>π * 2 (円)</h4>
 * @static
 * @property TWO_PI
 * @type {Number}
 */
export const TWO_PI = PI * 2;


/**
 * <h4>π * 2 (1/4円)</h4>
 * @static
 * @property HARF_PI
 * @type {Number}
 */
export const HARF_PI = PI / 2;


/**
 * <h4>ラジアンからに角度変換する積数</h4>
 * @static
 * @property RAD_TO_DEG
 * @type {Number}
 */
export const RAD_TO_DEG = 180 / PI;


/**
 * <h4>角度からラジアンに変換する積数</h4>
 * @static
 * @property DEG_TO_RAD
 * @type {Number}
 */
export const DEG_TO_RAD = PI / 180;


/**
 * <h4>√2</h4>
 * @static
 * @property sqrt2
 * @type {Number}
 */
export const sqrt2 = Math.sqrt(2);


/* Convert
-----------------------------------------------------------------*/
/**
 * <h4>ラジアンと半径から座標生成</h4>
 * @method radToCoord
 * @param  {Number} rad ラジアン
 * @param  {Number} radius 半径
 * @return {Object} x, y座標を格納したオブジェクト
 */
export function radToCoord(rad, radius){
  return {
    x: Math.cos(rad) * (radius || 1),
    y: Math.sin(rad) * (radius || 1)
  };
};


/**
 * <h4>角度と半径から座標を生成</h4>
 * @method degToCoord
 * @param  {Number} deg ラジアン
 * @param  {Number} radius 半径
 * @return {Object} x, y座標を格納したオブジェクト
 */
export function degToCoord(deg, radius){
  return radToCoord(degToRad(deg), (radius || 1));
};


/**
 * <h4>座標からRadianを取得</h4>
 * @static
 * @method coordToRad
 * @param  {Number} x x座標値
 * @param  {Number} y y座標値
 * @return {Number} Radian
 */
export function coordToRad(x, y){
  return Math.atan2(y, x);
};


/**
 * <h4>座標からDegreesを取得</h4>
 * @static
 * @method coordToDeg
 * @param  {Number} x x座標値
 * @param  {Number} y y座標値
 * @return {Number} Degrees
 */
export function coordToDeg(x, y){
  return Math.atan2(y, x) * RAD_TO_DEG;
};


/**
 * <h4>ラジアンから角度を求める</h4>
 * @static
 * @method radToDeg
 * @param {Number} rad ラジアン
 * @return {Number} degree
 */
export function radToDeg(rad){
  return rad * RAD_TO_DEG;
};


/**
 * <h4>角度をラジアンに変換して返す</h4>
 * @static
 * @method degToRad
 * @param {Number} deg 角度
 * @return {Number} radian
 */
export function degToRad (deg){
  return deg * DEG_TO_RAD;
};


/**
 * <h4>対角線の長さ</h4>
 * @static
 * @method diagonal
 * @param  {Number} x 横
 * @param  {Number} y 縦
 * @return {Number}
 */
export function diagonal(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};


/**
 * <h4>対角線の長さから正方形の辺の長さを求める（なす角45°）</h4>
 * @static
 * @method diagonalToSideLength
 * @param  {Number} diagonal 対角線の長さ
 * @return {Rect}
 */
export function diagonalToSideLength(diagonal){
  return diagonal / utils.sqrt2;
}


/* Utilitys
-----------------------------------------------------------------*/
/**
 * <h4>順序付けのために2つの引数を比較</h4>
 * <p>引数が等しい場合は0、2番目より小さい場合は負の整数、<br>
 * 最初の引数が2番目の引数より大きい場合は正の整数を返す</p>
 * @static
 * @method compare
 * @param  {Number} num1 指定数値
 * @param  {Number} num2 比較数値
 * @return {Number} -1, 0, 1のいずれかの値
 */
export function compare(num1, num2){
  if(num1 === num2){
    return 0;
  } else if(num1 < num2){
    return -1;
  } else {
    return 1;
  }
};


/**
 * <h4>値の符号化</h4>
 * <p>numが正なら+1.0、0.0なら0.0、負なら-1.0を返す</p>
 * @static
 * @method sign
 * @param  {Number} num
 * @return {Number} -1, 0, 1のいずれかの値
 */
export function sign(num){
  if(0 < num){
    return 1;
  } else if(0 > num){
    return -1;
  } else {
    return 0;
  }
};


/**
 * <h4>小数点を取り出す</h4>
 * @static
 * @method fract
 * @param  {Number} num
 * @return {Number}
 */
export function fract(num){
	return num - Math.floor(num);
};


/**
 * <h4>数値の有効範囲を適用して返す</h4>
 * @static
 * @method clamp
 * @param {Number} num 数値
 * @param {Number} min 最小値
 * @param {Number} max 最大値
 * @return {Number} 有効範囲を適用した数値
 */
export function clamp(num, min, max){
  return Math.max(Math.min(num, max), min);
};


/**
 * <h4>階乗の計算</h4>
 * @static
 * @method factorial
 * @param {Number} num 階乗数
 * @return {Number}
 */
export function factorial(num){
  var total = 1;
  while(num){
    total = total * num;
    num -= 1;
  }
  return total;
};


/**
 * <h4>範囲内に値があるか</h4>
 * @static
 * @method inRange
 * @param  {Number} val 数値
 * @param  {Number} min 最小値
 * @param  {Number} max 最大値
 * @return {Boolean}
 */
export function inRange(val, min, max){
  return val >= Math.min(min, max) && val <= Math.max(min, max);
};


/**
 * <h4>範囲が交差するか</h4>
 * @static
 * @method isIntersect
 * @param  {Number} rangeMin1 範囲1の最小値
 * @param  {Number} rangeMax1 範囲1の最大値
 * @param  {Number} rangeMin2 範囲2の最小値
 * @param  {Number} rangeMax2 範囲2の最大値
 * @return {Boolean}
 */
export function isIntersect(rangeMin1, rangeMax1, rangeMin2, rangeMax2){
  return Math.max(rangeMin1, rangeMax1) >= Math.min(rangeMin2, rangeMax2) &&
         Math.min(rangeMin1, rangeMax1) <= Math.max(rangeMin2, rangeMax2);
};


/**
 * <h4>指定の値を線形補間した値を返します</h4>
 * @static
 * @method lerp
 * @param  {Number} val 線形補間する指定の値
 * @param  {Number} min   最小値
 * @param  {Number} max   最大値
 * @return {Number}       線形補間した値
 */
export function lerp(val, min, max){
  return (max - min) * val + min;
};


/**
 * <h4>エルミート補完</h4>
 * <p>valを、minからmaxの範囲で正規化する</p>
 * @static
 * @method smoothstep
 * @param  {Number} val 線形補間する指定の値
 * @param  {Number} min   最小値
 * @param  {Number} max   最大値
 * @return {Number}       線形補間した値
 */
export function smoothstep(val, min, max){
	// return clamp((val - min) / (max - min), 0, 1);
	let t = clamp((val - min) / (max - min), 0, 1);
	return t * t * (3 - 2 * t);
};


/**
 * <h4>値を正規化します</h4>
 * @static
 * @method normalize
 * @param  {Number} val 正規化する値
 * @param  {Number} min   最小値
 * @param  {Number} max   最大値
 * @return {Number}       正規化した値
 */
export function normalize(val, min, max){
  return (val - min) / (max - min);
};


/**
 * <h4>値を最適化します</h4>
 * <p>valueを範囲scorpeA1 - scorpeA2から範囲scorpeB1 - scorpeB2へ変換</p>
 * @static
 * @method map
 * @param  {Number} val   最適化する値
 * @param  {Number} fromMin 現在基準の最小値
 * @param  {Number} fromMax 現在基準の最大値
 * @param  {Number} toMin 最適化基準の最小値
 * @param  {Number} toMax 最適化基準の最大値
 * @return {Number}         最適化した値
 */
export function map(val, fromMin, fromMax, toMin, toMax) {
  return lerp(normalize(val, fromMin, fromMax), toMin, toMax);
};


/**
 * <h4>乱数の生成</h4>
 * @static
 * @param {Number} min 最小値 ※省略可
 * @param {Number} max 最大値 ※省略可
 * @param {Boolean} isInt 整数値を返すか ※省略可
 * @return {Number} 乱数を返します
 */
export function random(min, max, isInt){
  let random = Math.random(),
  value;

  if(arguments.length === 0 || is.isBoolean(min)){
    isInt = min;
    value = random;

  } else if(arguments.length === 1 || is.isBoolean(max)){
    isInt = max;
    value = random * min;

  } else {
    if (min > max) {
      let num = min;
      min = max;
      max = num;
    }
    value = random * (max - min) + min;
  }

  if(isInt){
    return Math.round(value);
  } else{
    return value;
  }
};


/**
 * <h4>int型の乱数の生成</h4>
 * @static
 * @param {Number} min 最小値 ※省略可
 * @param {Number} max 最大値 ※省略可
 * @return {Number} 乱数を返します
 */
export function randomInt(min, max){
  return random(min, max, true);
}


/**
 * <h4>数を固定小数点に変換します</h4>
 * @static
 * @method roundToDigit
 * @param  {Number} value 値
 * @param  {Number} digit 固定小数点数
 * @return {Number}       固定小数点の数値
 */
export function roundToDigit(val, digit) {
  let mult = Math.pow(10, digit);
  return Math.round(val * mult) / mult;
};
