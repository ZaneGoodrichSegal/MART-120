
var x = 40
var y = 500
var mousex = 0;
var mousey = 0;
var diameter = 0;
var EllipseX = 10;
var EllipseY = 10;
var EllipseCount = 1;
var Linepoint1 = 100;
var linecount = 1;







function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(0);
  fill(24, 200, 29);
  ConcentricCircle(x, y, 100, 50, 50, 120, 120, 0, 0, 0);
  characterMovement();
  endgoal(50,50,50,50,50,50);
  moveSquare();
}

  function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
{
        fill(outer_red,outer_green, outer_blue);
        circle(x,y,outer_diameter);
        fill(inner_red, inner_green, inner_blue);
        circle(x,y,inner_diameter);
}

function moveSquare ():
{
  if (mousePressed)
  {
  fill(100,100,200)
  square(mousex, mousey, diameter);
  }
  
  if(diameter <= 50)
  {
      diameter+=7;
  }
    
  else if(diameter > 50 && diameter <= 100)
  {
      diameter +=5;
  }
  else if(diameter > 100)
  {
      diameter = 10;
  }
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}

  ConcentricCircle(x, y, 100, 50, 50, 120, 120, 0, 0, 0);

  ellipse(650,200,EllipseX,EllipseY);


fill(100,200,50)

  EllipseCount++;

  for(var Linepoint2 = 0; Linepoint2 < 5; Linepoint2++)
  

  stroke(255, 204, 0);
  strokeWeight(10);
  line(Linepoint1, 400, Linepoint2, 400);

  
  linecount++;

  if(EllipseCount<10)
  {
    Linepoint1 += 50;
  }
  else if (EllipseCount>10 && EllipseCount < 20)
  {
    Linepoint1 -= 50;
    }

  if(EllipseCount <= 300)
  {
      EllipseX++;
      EllipseY += 3;
  } 
  else if(EllipseCount > 300 && EllipseCount < 600)
  {
      EllipseX--;
      EllipseY -= 3;
  } 
  else if(EllipseCount = 600)
  {
    EllipseCount = 1;
  }
  
  function endgoal(rectanglex,rectangley,textx,texty,text2x,text2y);
  {
  rect(rectanglex,rectangley,400,20);

  if(x < 10 && x > 0)
    {
        fill(100,100,200);
        stroke(5);
        textSize(26);
        text("You Win!", textx, texty);
    
  textSize(32);
  text("exit",text2x,text2y);
    }

}


function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
    
}
