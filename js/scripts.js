// Back end logic here
var pingPong = function(userInput){
  var numberArray = [];

  for (var index = 1; index <= userInput; index += 1) {
    numberArray.push(index);
  }
  numberArray.forEach(function(number){
    if (index % 15 == 0) {
      numberArray[number] = "ping-pong";
    }
    else if (index % 5 === 0) {
      numberArray[number] = "pong";
    }
    else if (index % 3 === 0){
      numberArray[number] = "ping";
    }
  });
};

var display = function(output) {
  $("#result ul").empty();
  output.forEach(function(changed){
  $("#result ul").append("<li>" +  + "</li>");
});
  return;
}

// Front end logic here
$(document).ready(function(){
  $("form#inputNumber").submit(function(event){
    var inputNumbers = $("input#inputNumber").val();

    displayResults(pingPong(inputNumbers))
    event.preventDefault();
  });
});
