
var countUpBy = function(endCount, incrementor) {
  var outputArray = [];

  if(isNaN(endCount) || isNaN(incrementor)) {
    outputArray = false;
  }else if ((endCount || incrementor) === 0) {
    outputArray = false;
  }else {
    for(var i = incrementor; i <= endCount; i += incrementor) {
      outputArray.push(i);
    }
  }
  return outputArray;
}




/*$(function() {
  $("#form").submit(function(event) {
  var endCount = parseInt($("#endCount").val());
  var incrementor = parseInt($("#incrementor").val());

  event.preventDefault();
 });
});*/
