/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function(global, AMP){

  // 'use strict';


  /*----------------------------------------------------------------------
    @constructor
  ----------------------------------------------------------------------*/
  /**
   * <h4>振り子 v4実装予定</h4>
   *
   * @class AMP.Pendulum
   * @extends AMP.BaseClass
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  function Pendulum(origin, radius, options){
    // super class call
    AMP.BaseClass.call(this);

    this.origin = this.position.clone();

    this.radius = radius;
    this.angleVelocity = 0;
    this.angleAcceleration = 0;

    var self = this,
    props = AMP.mixin(true, {}, Pendulum.OPTIONS, options);

    // option値をエクスポート
    AMP.each(props, function(val, key){
      self[key] = val;
    });

    // set position
    this.position = new AMP.Vector2();
    this._updatePosition();
  }

  // 基底クラスを継承
  AMP.inherits(Pendulum, AMP.BaseClass);

  // prototype
  var p = Pendulum.prototype;



  /*--------------------------------------------------------------------------
    @property
  --------------------------------------------------------------------------*/
  /**
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  Pendulum.VERSION = '1.0.0';


  /**
   * [OPTIONS description]
   * @type {Object}
   */
  Pendulum.OPTIONS = {
    angle  : AMP.HARF_PI,
    damping: 0.9 // 減衰量
    gravity: 0.9
  };



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>Forceインスタンスの生成</h4>
   *
   * @static
   * @method get
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @return {Force}
   */
  Pendulum.get = function(x, y){
    return new Force(x, y);
  };


  /**
   * [update description]
   * @return {[type]} [description]
   */
  p.update = function(){
    this.angleAcceleration = (-1 * this.gravity / this.radius) * Math.sin(this.angle);
    this.angleVelocity += this.angleAcceleration;
    this.angle += this.angleVelociy;
    this.angleVelocity *= this.damping;

    this._updatePosition();

    return this;
  };


  /**
   * <h4>ポジションの更新</h4>
   *
   * @privete
   * @method _updatePosition
   * @return {Void}
   */
  p._updatePosition = function(){
    this.position.set({
      x: this.radius * Math.sin(this.angle),
      y: this.radius * Math.cos(this.angle)
    })
    .add(this.position);
  };


  // ???
  p.getVector = function(){
    return new AMP.Vector2({
      x: Math.sin(this.angle.x) * this.amplitude.x,
      y: Math.sin(this.angle.y) * this.amplitude.y
    });
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Pendulum = Pendulum;



}(window, AMP));
