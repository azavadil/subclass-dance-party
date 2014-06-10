var StretchDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  this._oldStep = Dancer.prototype.step; 
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion

}; 

StretchDancer.prototype = Object.create(Dancer.prototype); 
StretchDancer.prototype.constructor = BlinkyDancer;  

StretchDancer.prototype.step = function(){ 
  this._oldStep.call(this); 
  if( this._toggle ) { 
    newPos["top"] = oldPos.left + 10;  
  } else { 
    newPos["top"] = oldPos.left - 10; 
  }
  this._toggle = !this._toggle;      
  this.$node.transform(newPos); 
};
