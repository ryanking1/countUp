$(function() {
  $("#form").submit(function(event) {
    var endCount = parseInt($("#endCount").val());
    var incrementor = parseInt($("#incrementor").val());
    var countUpBy = function(endCount, incrementor) {
      var outputArray = [];
      if(endCount < incrementor) {
        outputArray = false;
      } else if(isNaN(endCount) || isNaN(incrementor)) {
        outputArray = false;
      } else if ((endCount || incrementor) === 0) {
        outputArray = false;
      } else {
        for(var i = incrementor; i <= endCount; i += incrementor) {
          outputArray.push(i);
        }
      }
      return outputArray;
    }
    var outputArray = countUpBy(endCount, incrementor);
    if (outputArray === false) {
      alert("Please enter a different number");
    }
    else {
      $("#appendList").text(outputArray.toString());
    }
    event.preventDefault();
  });
});
