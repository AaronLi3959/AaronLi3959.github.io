const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const sound = new Audio(`sounds/${this.value}.mp3`);
    sound.play();
  });
});
