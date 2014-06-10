var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass("blinkyDancer"); 

}; 

BlinkyDancer.prototype = Object.create(Dancer.prototype); 
BlinkyDancer.prototype.constructor = BlinkyDancer;  

BlinkyDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);   
  this.$node.toggle();
};
