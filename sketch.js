
var myImage1;
var mySong1;
var myImage2;
var mySong2;
var analyser;
var analyser2;

function preload() {
  myImage1 = loadImage('./images/rain.jpg');
  mySong1=loadSound('./sounds/Comptine_d’un_autre_été.mp3');
  
  myImage2 = loadImage('./images/diapositive.jpg');
  mySong2=loadSound('./sounds/Il_Favoloso_mondo_di_Amelie_OST.mp3');
  
  myWorld = loadImage('./images/Mappamondo.png');
  myDwarf = loadImage('./images/dwarf.png');
  sfondo = loadImage('./images/sfondo.jpg');
}

function setup() {
  createCanvas(500,500);
 
 image(sfondo, 0,0,500,500);
 
 
 
  analyser = new p5.Amplitude();
  analyser.setInput(mySong1);
  
  analyser2 = new p5.Amplitude();
  analyser2.setInput(mySong2);


}
function draw() {
 
  fill(255,250,205);
  rect(0,420,300,60);
   textFont('Cookie');
  noStroke();
  fill(0);
  textSize(17);
    text('Click to start and change the music:',10,440);
    textSize(11);
    text('1.Yann Tiersen-Comptine d’un autre été-L’apres midi',10,455);
    text('2.Yann Tiersen-J’y suis jamais allé',10,465);
  
  
  var volume = analyser.getLevel();
  var myRadius = map(volume,0,1,0,200);
  
  var myX = random(0,width);
  var myY = random(0,height);
  
  var myPixel = get(myX,myY);
  fill(myPixel);
  noStroke();
  ellipse(myX,myY,myRadius);
  
  
  
    if ( mySong2.isPlaying() ) { 
      
      push();
      frameRate(5);
      var volume2 = analyser2.getLevel();
      var dim = map(volume2,0.01,0.9,0,200);
      
 
    image(myDwarf,random(300,450),random(300,450),dim,dim);
    pop();
      
    }else{
      image(myDwarf,0,0,1,1);
    }
	
}


function mousePressed(){
  
  
     if ( mySong1.isPlaying() ) { 
    mySong1.stop();
    mySong2.play();
    image(myImage2, 0,0,500,500);
    image(myWorld, 300,300,200,230);
    
   
  } else {
    mySong1.play();
    mySong2.stop();
  image(myImage1, 0,0,500,500);
 
 }
}
