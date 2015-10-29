$(document).ready(function() {

  var inputNumber = prompt("What number would you like me to ping-pong");
    inputNumber = parseInt(inputNumber);

  for (var index = 1; index <= inputNumber; index += 1) {

      if ((index % 3 === 0) && (index % 5 === 0)) {
        $(".inputNumber").append("<li>" + "ping-pong" + "</li>");
      } else if (index % 3 === 0) {
        $(".inputNumber").append("<li>" + "ping" + "</li>");
      } else if (index % 5 === 0) {
        $(".inputNumber").append("<li>" + "pong" + "</li>");
      } else {

      $(".inputNumber").append("<li>" + index + "</li>");
    }
}

  event.preventDefault();

});
