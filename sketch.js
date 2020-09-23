var fixedrect, movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "blue";
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "blue";
  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
 && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
&& movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
&& fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
  ){
movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
}
else {
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue";

}

  drawSprites();
}