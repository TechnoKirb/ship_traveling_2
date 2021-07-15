var small_body_of_water,air_car,water_image,plane_image
function preload(){
  water_image= loadImage('sea.png')
  plane_image=loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
}

function setup(){
  createCanvas(400,400);
  small_body_of_water=createSprite(200,200,400,400)
  small_body_of_water.addImage(water_image)
  small_body_of_water.velocityX=-0.5
  small_body_of_water.scale=0.5
  air_car=createSprite(200,300,50,50)
  air_car.addAnimation('I like trains',plane_image)
  air_car.scale=0.3
}

function draw() {
  background("blue")
  console.log(small_body_of_water.x)
if(small_body_of_water.x<50){
  small_body_of_water.x=220
}
  drawSprites()
}
