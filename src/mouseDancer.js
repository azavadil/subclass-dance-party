var MouseDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this func   tion
  this.$node.addClass("mouseDancer"); 
  var context = this; 
  this.$node.on("mouseover", function(){ 
    context._scaleup(); 
  });
  this.$node.on("mouseout", function(){ 
    context._scaledown(); 
  });  
}; 

MouseDancer.prototype = Object.create(Dancer.prototype); 
MouseDancer.prototype.constructor = MouseDancer;  

MouseDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);   
};

MouseDancer.prototype._scaleup = function(){ 
  this.$node.css({transform : "scale(1.5)"}); 
}; 
  
MouseDancer.prototype._scaledown = function(){ 
  this.$node.css({transform : "scale(1)"}); 
}; 