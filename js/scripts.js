

// Back end logic here
var pingPong = function(userInput){
  var numberArray = [];

  for (var index = 1; index <= userInput; index += 1) {
    if (index % 15 === 0) {
      numberArray.push("ping-pong")
      console.log("ping-pong")
    } else if (index % 5 === 0) {
      numberArray.push("pong")
      console.log("pong")
     } else if (index % 3 === 0){
      numberArray.push("ping")
      console.log("ping")
    } else {
      numberArray.push(index)
    }
  } return pingPong;
};

// Front end logic here
$(document).ready(function(){
  $("form.inputForm").submit(function(event){
    var userInput = parseInt($("input#inputNumber").val());
    console.log(userInput);

// Front end results here
var display = pingPong(userInput)
  $("#result ul").empty();
  display.forEach(function(changed){
  $("#result ul").append("<li>" + changed  + "</li>");
  });
  event.preventDefault();
});
});
