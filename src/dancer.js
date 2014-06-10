// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // this = Object.create(Dancer.prototype);  
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps; 
  this.step(); 
  
  // call the setPosition method to 
  // set the inital position of the dancer
  this.setPosition(top, left); 
}; 

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this; 
  setTimeout(function(){ 
   context.step.call(context)}, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function(){
  var oldPos = this.$node.position(); 
  var newPos = {}; 
  newPos["top"] = oldPos.top; 
  newPos["left"] = 10; 
}; 