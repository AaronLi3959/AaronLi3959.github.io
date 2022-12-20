const diameter = 50;  // diameter entered by the user
const radius = diameter / 2;

const sizeInput1 = '50';
const size = parseInt(sizeInput, 10);  // size will be 50

const button = document.getElementById('button');

button.addEventListener('click', () => {
  if (button.value === 'Speak') {
    button.value = 'Stop';
  } else {
    button.value = 'Speak';
  }
});

const instructions = document.getElementById('instructions');

instructions.innerHTML = `
  <p>Say "color _____" to change the color of the circle. For example "color blue" to make the circle blue.</p>
  <p>Say "size _____" to change the size of the circle. For example "size 50" to make the circle with a diameter of 50.</p>
  <p>If someone says something larger than 300 (or whatever looks too big on the screen) speak back "Size size limit 300".</p>
  <p>If someone says something smaller than 1, say "Size too small, the minimize size is 1".</p>
  <p>Say "Help" to tell them "Say color, followed by a color, to set the circle color. Say size, followed of a number from 1 to 300, to set the diameter of the circle."</p>
`;

let color = 'black';
let sizeR = 50;

const setCircleProperties = () => {
  ctx.fillStyle = color;
  ctx.arc(300, 300, size / 2, 0, Math.PI * 2, false);
};

setCircleProperties();
ctx.fill();



const sizeInput = 'abc';
if (isNaN(sizeInput)) {
  console.log('Not a number');
} else {
  console.log('Number');
}

/*const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const diagnostic = document.querySelector('.output');
const bg = document.querySelector('html');

document.body.onclick = () => {
  recognition.start();
  console.log('Ready to receive a color command.');
}

abortBtn.onclick = () => {
  recognition.abort();
  console.log('Speech recognition aborted.');
}

recognition.onspeechend = () => {
  recognition.stop();
  console.log('Speech recognition has stopped.');
}*/