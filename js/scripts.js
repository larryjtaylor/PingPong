// Back end logic here



// Front end logic here
$(document).ready(function(){
  $("#inputNumber").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#userInput").val());
    $("#result ul").append("<li>" +  + "</li>");
  });
});
