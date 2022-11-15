
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


  if(keyIsDown(68))
  {
      x+=10;
  }
  if(keyIsDown(65))
  {
      x-=10;
  }

  if(keyIsDown(83))
  {
      y+=10;
  }
  if(keyIsDown(87))
  {
      y-=10;
  }

  circle(x,y,50);

  ellipse(650,200,EllipseX,EllipseY);



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
  
  rect(200,20,400,20);

  if(x < 10 && x > 0)
    {
        fill(100,100,200);
        stroke(5);
        textSize(26);
        text("You Win!", 200, 200);
    }

  textSize(32);
  text("exit",375,30);

}


function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
    
}
