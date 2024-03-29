document.addEventListener('DOMContentLoaded', function() {
  var cube = document.getElementById('cube');
  var outcome = document.getElementById('outcome');
  var outcomeText = document.getElementById('text');
  var messageDelay; //timer
  var fadeout; //timer

  var showFace = function(face) {
    if (cube.className !== 'show-' + face) {
      cube.className = 'show-' + face;
      messageDelay = setTimeout(function() {
        outcomeText.innerHTML = messages[face - 1];
        outcome.className = 'show';
        fadeout = setTimeout(function() {
          outcome.className = '';
        }, 2000);
      }, 1000);
    }
  };

  window.addEventListener('message', function(event) {
    var item = event.data;
    if (item.type === "roll") {
      clearTimeout(messageDelay);
      clearTimeout(fadeout);
      showFace(item.number);
    }
  });
});