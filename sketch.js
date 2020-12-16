var wall,thickness, damage;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 30);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);


  

  if(is_touching(bullet,wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight *speed * speed)/(thickness*thickness*thickness);
    console.log(damage);
    if(damage <= 10 ){
      wall.shapeColor = color("green");
    }

    if(damage >10){
      wall.shapeColor = color("red");
    }
  }

  drawSprites();
}


function is_touching(object_1,object_2){
  var object_1RightEdge = object_1.x + object_1.width
  if(object_1RightEdge >= object_2.x){
    return true
  }
  else{
    return false
  }
}
