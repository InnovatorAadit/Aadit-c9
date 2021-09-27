
function setup() {
  createCanvas(400,400);
  var box = createSprite (200,200,120,120)
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
  box.x= box.x + 4;
}
if (keyIsDown(LEFT_ARROW)){
  box.x= box.x - 4;
}
drawSprites();
}




