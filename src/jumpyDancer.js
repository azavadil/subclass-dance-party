var JumpyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion
  this._toggle = true; 
  this.$node.addClass("jumpyDancer"); 
}; 

JumpyDancer.prototype = Object.create(Dancer.prototype); 
JumpyDancer.prototype.constructor = BlinkyDancer;  

JumpyDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this); 
  this._jump(); 
};

JumpyDancer.prototype._jump = function(){ 
  var oldPos = this.$node.position(); 
  var newPos = {}
  if( this._toggle ) { 
    newPos["top"] = oldPos.top + 10;  
  } else { 
    newPos["top"] = oldPos.top - 10; 
  }
  this._toggle = !this._toggle;      
  this.$node.css(newPos); 
};   