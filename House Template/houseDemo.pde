/*Program: House.pde
  Author:  Mr. Gohde
  Date:    <Date  of  Completion>
  Notes:    
*/
int xBox = 0;
int speed = 3;
float rX[] = new float[50];
float rY[] = new float[50];
float scale[] = new float[50];

void setup(){
  size(200,200);
  for(int i=0; i<50; i++){
     rX[i] = random(width);
     rY[i] = random(height);
     scale[i] = random(1);
   }//generate random location and scale for each of the 50 stars
}//setup

void draw(){
   background(255); 
   fill(255,0,0,100);
   rect(xBox,100,.1*width,.1*height); 
   
   if(xBox>.9*width || xBox < 0 ){
     speed *= -1;
   }//bounce the rectangle when it hits an edge
     
   xBox+=speed;
   
   fill(0,0,255);
   for(int i=0; i<50; i++){
     rect(rX[i],rY[i],5*scale[i],5*scale[i]);
   }//draw the random stars

   println("xBox: "+xBox);
}//draw()

void mouseClicked(){
  speed=speed*-1;
}//mouseClicked
