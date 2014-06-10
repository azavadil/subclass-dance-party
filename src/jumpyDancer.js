var JumpyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  this._oldStep = Dancer.prototype.step; 
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion
  this._toggle = true; 
}; 

JumpyDancer.prototype = Object.create(Dancer.prototype); 
JumpyDancer.prototype.constructor = BlinkyDancer;  

JumpyDancer.prototype.step = function(){ 
  this._oldStep.call(this); 
  var oldPos = this.$node.position; 
  var newPos; 
  // if( this._toggle ) { 
    // newPos.top = oldPos.top + 50;  
  // } else { 
    // newPos.top = oldPos.top - 50; 
  // }
  // this._toggle = !this._toggle;      
  // this.$node.css(newPos); 
};
