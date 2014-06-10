var StretchDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  this._oldStep = Dancer.prototype.step; 
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion
  this.$node.addClass("stretchyDancer");
  this._cnt = 0;   
}; 

StretchDancer.prototype = Object.create(Dancer.prototype); 
StretchDancer.prototype.constructor = BlinkyDancer;  

StretchDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this); 
  this._stretch(); 
};

StretchDancer.prototype._stretch = function(){ 
  if ( this._cnt % 4 === 0 ) { 
    this.$node.css({'transform': 'skew(0deg)'});
  } else if ( this._cnt % 3 === 0  ) { 
    this.$node.css({'transform': 'skew(330deg)'});
  } else if ( this._cnt % 2 === 0 ) { 
    this.$node.css({'transform': 'skew(0deg)'});   
  } else if ( this._cnt % 2 === 1 ) { 
    this.$node.css({'transform': 'skew(30deg)'});
  } 
  this._cnt++;
}; 