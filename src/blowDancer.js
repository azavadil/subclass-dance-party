var BlowDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  this._oldStep = Dancer.prototype.step; 
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion
  this.$node.css({'border': '10px solid blue'});
  this.$node.css({'border-radius': '50%'}); 
  this._toggle = true;   
}; 

BlowDancer.prototype = Object.create(Dancer.prototype); 
BlowDancer.prototype.constructor = BlowDancer;  

BlowDancer.prototype.step = function(){ 
  this._oldStep.call(this); 
  
  if( this._toggle ) { 
    this.$node.css({'border': '30px solid green'}); 
  } else { 
    this.$node.css({'border': '10px solid blue'}); 
  } 
  this._toggle = !this._toggle;     
};
