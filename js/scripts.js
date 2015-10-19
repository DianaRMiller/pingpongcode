$(document).ready(function() {

  var inputNumber = prompt("What number would you like me to ping-pong", " ");
  $(".inputNumber").text(inputNumber);

  var exampleNumbers = [22, 44, 66, 77];

  exampleNumbers.forEach(function(exampleNumber) {
    $('.inputNumber').append("<li>" + exampleNumber + "</li>");
  });


  event.preventDefault();
});
