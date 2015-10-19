$(document).ready(function() {

  var inputNumber = prompt("What number would you like me to ping-pong", " ");
  $(".inputNumber").text(inputNumber);

  var index = 0
  for (index; index <= inputNumber; index += 1) {
    $(".inputNumber").append("<li>" + index + "</li>");
  }

  // var exampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  //
  // exampleNumbers.forEach(function(exampleNumber) {
  //   $('.inputNumber').append("<li>" + exampleNumber + "</li>");
  // });


  event.preventDefault();
});
