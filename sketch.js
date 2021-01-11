var fixedRect,movingRect,sticking;








function setup() {
createCanvas(1200,800);
fixedRect=createSprite(200,200,50,80);
fixedRect.shapeColor="green";
fixedRect.debug=true;
movingRect=createSprite(400,200,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;
}
function draw() {
background("white");
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
sticking=fixedRect.width/2+movingRect.width/2;
text(sticking,200,50);
text(movingRect.x-fixedRect.x,200,75)
//Text(fixedRect.width/2+movingRect.width/2,400,100)
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
   && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
   &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
   fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
   {
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
movingRect.shapeColor="green";
fixedRect.shapeColor="green"
}
  drawSprites();
}