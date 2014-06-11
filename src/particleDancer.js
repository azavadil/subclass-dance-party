var ParticleDancer = function(top, left){
  // this = Object.create(BlinkyDancer.prototype);
  
  Dancer.call(this, top, left, 50);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this._xVelocity = 10; 
  this._yVelocity = 10; 
  

}; 

ParticleDancer.prototype = Object.create(Dancer.prototype); 
ParticleDancer.prototype.constructor = ParticleDancer;  

ParticleDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);  
  this._move(); 
};

ParticleDancer.prototype._move = function(){ 
  var oldPos = this.$node.position(); 
  
  // console.log("pos x : " + oldPos.left + "pos y: " + oldPos.top);   
  
  var newTop = oldPos.top + this._xVelocity; 
  var newLeft = oldPos.left + this._yVelocity; 
  
  if( newTop < 0 || newTop > window.initHeight ) { 
    this._yVelocity = -this._yVelocity;
    newTop = newTop < 50 ? 50 : window.initHeight - 50;
  }
  
  if( newLeft < 0 || newLeft > window.initWidth ) { 
    this._xVelocity = -this._xVelocity;
    newLeft = newLeft < 50 ? 50 : window.initWidth - 50;  
     
  }
  this.setPosition(newTop, newLeft);
   
};   