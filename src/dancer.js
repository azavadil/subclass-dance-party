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
  this._hasPartner = false; 
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
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
  this.$node.css(newPos);
};

Dancer.prototype.dance = function(color){
  this.$node.css({'border': '1px solid ' + color}); 
}; 

Dancer.prototype.setPartner = function( value ) { 
  this._hasPartner = value; 
}; 

Dancer.prototype.getPartner = function(){ 
  return this._hasPartner; 
}; 
