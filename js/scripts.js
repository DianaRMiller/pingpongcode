$(document).ready(function() {

  var inputNumber = prompt("What number would you like me to ping-pong", " ");
  $(".inputNumber").text(inputNumber);

  var index = 0
  for (index; index <= inputNumber; index += 1) {
    // Now instead of printing index on each line
    // I want see if index is divisible by 3
    // if index is divisible by 3
    // print the word ping
    // var remainder = % (add a few things here)
    // in the li's print index, and also print remainder

    $(".inputNumber").append("<li> The number:" + index + "what is the remainder when you divide by 3?" + remainder +"</li>");
    // The number: 0 what is the remainder when you divide by 3? 0
    // The number: 1 what is the remainder when you divide by 3? 1
  }

  // var exampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  //
  // exampleNumbers.forEach(function(exampleNumber) {
  //   $('.inputNumber').append("<li>" + exampleNumber + "</li>");
  // });


  event.preventDefault();
});
