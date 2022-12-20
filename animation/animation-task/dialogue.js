const character1Image = document.getElementById('character1');
const character2Image = document.getElementById('character2');
const dialogueText1 = document.getElementById('dialogue-text-1');
const dialogueText2 = document.getElementById('dialogue-text-2');

const sceneData = [
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: 'Good morning class!',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: '. . .',
    dialogue2: 'Good morning teacher!',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: 'How are you today?',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: '. . .',
    dialogue2: 'we are fine teacher!',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: 'So are you ready for the annual exam?',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/girl1.png',
    dialogue1: ' . . .',
    dialogue2: 'Teacher actually, I am a bit afraid about the upcoming annual exam. ',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/girl1.png',
    dialogue1: 'Why? What happened to you?',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/girl1.png',
    dialogue1: ' . . .',
    dialogue2: 'I am too much weak in English and I have missed so many English classes due to sickness. Now I think I will fail in this particular subject and I am so much upset about that.',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/girl1.png',
    dialogue1: 'Do not lose hope. I will help you to improve your English. I will give you some extra classes after school. How about others? ',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/boy5.png',
    dialogue1: ' . . .',
    dialogue2: 'Teacher, I have a problem in memorizing.',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/boy5.png',
    character2Image: 'images/girl2.png',
    dialogue1: ' . . .',
    dialogue2: 'Teacher, I also have same problem. I am not able to memorize the things.',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/girl2.png',
    dialogue1: 'Instead of learning, try to understand it. Try to concentrate on one major theme at a time until you grasp it well.',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/girl6.png',
    dialogue1: ' . . .',
    dialogue2: ' Teacher, a few of my friends were planning to do group study. Will it be useful?',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: 'Yes definitely. Do not worry.  Focus on your studies and spend more time with books. I wish you all the best for your annual exam.',
    dialogue2: '. . .',
    bgimage: 'images/morning.png',
    ch1transform: "10deg",
    ch2transform: "0deg"

  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: '. . .',
    dialogue2: 'Thank you teacher. We will try our best.',
    bgimage: 'images/morning.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: 'Ok. see you all tomorrow. Bye!',
    dialogue2: '. . .',
    bgimage: 'images/night.png',
    ch1transform: "10deg",
    ch2transform: "0deg"
  },
  {
    character1Image: 'images/teacher.png',
    character2Image: 'images/student_gruop.png',
    dialogue1: '. . .',
    dialogue2: 'Bye teacher! Have a nice day!',
    bgimage: 'images/night.png',
    ch1transform: "0deg",
    ch2transform: "-10deg"
  },
];

let currentSceneIndex = 0;

function updateScene() {
  const currentScene = sceneData[currentSceneIndex];
  character1Image.src = currentScene.character1Image;
  character2Image.src = currentScene.character2Image;
  dialogueText1.innerHTML = currentScene.dialogue1;
  dialogueText2.innerHTML = currentScene.dialogue2;
  character1Image.style.transform = "skewX(" + currentScene.ch1transform + ")";
  character2Image.style.transform = "skewX(" + currentScene.ch2transform + ")";
  document.getElementById("main").style.backgroundImage = "url(" + currentScene.bgimage + ")";
  currentSceneIndex = (currentSceneIndex + 1) % sceneData.length;
}

setInterval(updateScene, 5000);
