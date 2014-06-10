var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  console.log("this.step before apply" + this.step); 
  this._oldStep = Dancer.prototype.step; 
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion

}; 

BlinkyDancer.prototype = Object.create(Dancer.prototype); 
BlinkyDancer.prototype.constructor = BlinkyDancer;  

BlinkyDancer.prototype.step = function(){ 
  this._oldStep.call(this);   
  this.$node.toggle();
};
>>>>>>> temp
