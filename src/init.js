$(document).ready(function(){
  window.dancers = [];
  window.danceColors = ['white','red','green','blue','yellow', 'orange']; 
  window.danceColorCnt = 0; 
  window.initHeight; 
  window.initWidth; 
  
  // calculate the pythagrean distance between 2 nodes; 
  
  var pythagDist = function(node0, node1){ 
    
    var pos0 = node0.position(); 
    var pos1 = node1.position(); 
    var xLen = pos0.left - pos1.left; 
    var yLen = pos0.top - pos1.top; 
    return Math.sqrt( xLen*xLen + yLen*yLen); 
   }; 
   
   var closestNode = function(nodeIdx, dancers){ 
     console.log("closestNode called"); 
     var curDancer = dancers[nodeIdx]; 
     var bestIdx = -1; 
     var minDist = Number.POSITIVE_INFINITY; 
     
     
     for( var i = 0; i < dancers.length; i++ ) { 
       if( nodeIdx !== i ){ 
         var otherDancer = dancers[i]; 
         var newDist = pythagDist(curDancer.$node, otherDancer.$node); 
         if( newDist < minDist ){
           minDist = newDist; 
           bestIdx = i; 
         } 
       } 
     } 
     return bestIdx; 
   }; 
         
  

  $("#lineupBtn").on("click", function(event){
    for( var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      dancer.lineup();
    }
  });
   
  $("#danceBtn").on("click", function(evt){ 
    for( var i = 0; i < window.dancers.length; i++){ 
      var curDancer = window.dancers[i];
      if( !curDancer.getPartner() ) { 
        var curIdx = i; 
        var closestIdx = closestNode( curIdx, window.dancers);
        var otherDancer = window.dancers[closestIdx]; 
        if( !otherDancer.getPartner() ){ 
          var danceColor = window.danceColors[window.danceColorCnt % 5]; 
          window.danceColorCnt++;       
          curDancer.dance(danceColor); 
          curDancer.setPartner(true); 
          window.dancers[closestIdx].dance(danceColor); 
          window.dancers[closestIdx].setPartner(true); 
        } 
      }
    }  
   });      
  

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    window.initHeight = $("body").height(); 
    window.initWidth = $("body").width(); 
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
       
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  

  
});

