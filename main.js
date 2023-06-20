x = 0;
y = 0;

drawApple = "";
screenWidth = 0;
screenHeight = 0;
apple = "";
speakData = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  console.log(event); 

  content = event.results[0][0].transcript;
 
     document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content;  

  to_number = Number(content);
  if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "A maçã começou a ser desenhada";
    drawApple = "set";
  } else {
    document.getElementById("status").innerHTML = "O número não foi reconhecido.";
  
  }

 
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width-265, screen_height-150);
 canvas.position(135, 135)
 
}

function draw() {
  if(drawApple == "set")
  {
    for(var i = 1; i <= toNumber; i ++) {
      x = Math.floor(Math.random()*700)
      y = Math.floor(Math.random()*400)
      image(apple, x, y, 200, 200)
    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    speakData = toNumber + "maçãs desenhadas";
    speak
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}

function preload() {
  apple = loadImage("apple.png");
}