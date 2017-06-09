// Front end function
$(document).ready(function(){
  $(".inputForm").submit(function(event){
    event.preventDefault();
// toolbox
      var input = parseInt($("input#number").val());
      var userString = input.toString();
      var stringOutput = "";

      if (userString % 3 == 0) {
        stringOutput = stringOutput + "ping";
      } else   if (userString % 5 == 0) {
        stringOutput = stringOutput + "pong";
      } else   if (userString % 15 == 0) {
        stringOutput = stringOutput + "ping-pong";
      } else {
        stringOutput = stringOutput
      }

// front end result here
    $("#result").text(stringOutput);
  });
});
