var x = 250;
var y = 125;
var headcount = 0

var movement;

var eyecolor = 3
var eyecount = 0

headsize = 60

var size = 22;
var count = 0;
var sizeDirection = 2;

var namex;
var namey;

var namecounty = 0;

function setup() {
  createCanvas(400,400);
  movement = floor(random(.05) * .06) + 2;

  if (namecounty < 4);
    {
     namex = 20
     namey = 0
    }

  if (namecounty > 4 || namecounty < 8);
    {
      namex = 0
      namey = 20
    }
    if (namecounty > 8 || namecounty < 12);
    {
      namex = -20
      namey = 0
    }
    if (namecounty > 12 || namecounty < 16);
    {
      namex = 0
      namey = -20
    }
    if (namecounty = 17);
    {
      namecounty = 0
    }
    
}

function draw() {
  background(42, 201, 122);
  
  stroke(6)
  fill(102,51,0)
  circle(200,10,60)
  circle(240,20,60)
  circle(260,30,60)
  circle(280,50,60)
  circle(300,70,60)
  circle(305,90,60)
  circle(190,10,60)
  circle(175,20,60)
  circle(150,30,60)
  circle(140,50,60)
  circle(125,70,60)
  circle(1110,90,60)
  
  
  fill(218,112,214)
  ellipse(200,400,600,300)
  fill(95,158,160)
  stroke(0)
  strokeWeight(5)
  triangle(50,300,400,400,300,300)

  fill (225, 201, 122)
  strokeWeight(3)
  ellipse(100,150,headsize,50)
  ellipse(300,150,30,50)
  strokeWeight(4)
  ellipse(200,175,200,325)

  headsize++;
  headcount++;
  if(headcount > 20)
  {
      headsize *=-1;
      headcount = 0;
      eyecolor *=2
  }

  
  strokeWeight(2)
  stroke(0)
  fill(eyecolor,0,0)
  circle(145,y,75)
  fill(100,100,100)
  ellipse(145,y,75,45)
  fill(255,255,255)
  circle(145,y,45)
  fill(220,20,60)
  circle(145,y,20)

x+=movement

  strokeWeight(2)
  stroke (0)
  fill(127,0,0)
  circle(x,125,75)
  fill(100,100,100)
  ellipse(x,125,75,45)
  fill(255,255,255)

  x+=movement

  circle(x,125,45)
  fill(220,20,60)

  x+=movement
  y+=movement

  circle(x,y,20)
  if(x >= 100 || x <= 400)
    {
       movement *= -1;
    }
  

  
  strokeWeight(10)
  stroke(45,140)
  point(265,250)
  point(255,235)
  point(275,265)
  
  stroke(0)
  strokeWeight(5)
  line(150,250,250,250)
  strokeWeight(3)
  fill(153,76,0)
  rect(160,200,75,30)
  
  fill(255,255,255)
  size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

    namex++;
    namey++;

  strokeWeight(4)
  textFont('Courier New italic',size)
  text('Zane "bigdog" Segal', 200-namex, 200-namey)


     x += movement;
  
  
}