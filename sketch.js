var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect=  createSprite(400, 200, 50, 50);
 movingRect.shapeColor = "red";
 movingRect.debug = true;
 
 fixedRect = createSprite(200,200,80,70);
 fixedRect.shapeColor = "blue";
 fixedRect.debug = true;
}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if ( movingRect.x - fixedRect.x < fixedRect.width/2+ movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2 &&
  movingRect. y - fixedRect.y < fixedRect.height/2+ movingRect.height/2 &&
  fixedRect. y - movingRect.y < fixedRect.height/2+ movingRect.height/2
  )
{
movingRect.shapeColor = "Orange";
fixedRect.shapeColor = "Orange";
}
else 
{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}



  drawSprites();
}