var RubberDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  this._oldStep = Dancer.prototype.step; 
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion
  this.$node.css({'border': '10px solid yellow'});
  this._toggle = true;   
}; 

RubberDancer.prototype = Object.create(Dancer.prototype); 
RubberDancer.prototype.constructor = BlinkyDancer;  

RubberDancer.prototype.step = function(){ 
  this._oldStep.call(this); 
  
  if( this._toggle ) { 
    this.$node.css({'width': '30px'}); 
  } else { 
    this.$node.css({'width': '10px'}); 
  } 
  this._toggle = !this._toggle;     
};
