$(function() {
  $("#form").submit(function(event) {
  var endCount = parseInt($("#endCount").val());
  var incrementor = parseInt($("#incrementor").val());


  for(i = 0; i <= endCount; i += incrementor) {
    if (endCount > 0) {
      $("#appendList").append(i + ", ");
    }
    else {
      alert("Please choose a number greater than 0");
    }
  }

  event.preventDefault();

 });
});
