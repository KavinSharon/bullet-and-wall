var bullet,speed,weight;
var wall,thickness;

thickness = random(22,83);


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 60, 15);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255);  

 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
  var damage=0.5 * weight * speed/(thickness *thickness *thickness);


  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }else{
    wall.shapeClor = color(0,255,0);
  }
  bullet.velocityX = 5;
 }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.X + lbullet.width;
  wallLeftEdge=lwall.X;
  if(bulletRightEdge>=wallLeftEdge)
  {
     return true
  }else{
    return false
  }
}