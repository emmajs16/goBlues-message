$(document).ready(function(){
  var button = $('#logo');
  var speechBubble = $('#speech-bubble');
  button.on("click", displayNewText);
  var allOptions = ["Let's Go Blues!", "Play Gloria!","Game On!", "Bleed Blue!","Goal!"]
  function displayNewText() {
    var num = Math.floor(Math.random() * 4);
    speechBubble.text(allOptions[num]);
  }
});
