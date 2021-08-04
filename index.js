var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  document.addEventListener("keydown", keyPressed);

  function handleClick() {
    var expression = this.innerHTML;
    makeSound(expression);
    btnAnimation(expression);
  }

  function keyPressed() {

    var expression = event.key;
    makeSound(expression);
    btnAnimation(expression);
  }
}

function makeSound(expression){

    switch (expression) {

      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.defaultPlaybackRate = 1;
        audio.play();
        break;
      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
      case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
      case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
      case "l":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

      default:
        console.log(this);
    }

}

function btnAnimation(expression){
  document.querySelector("." + expression).classList.add("pressed");

setTimeout(function(){
  document.querySelector("." + expression).classList.remove("pressed");

  },100);



}
