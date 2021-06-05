var img1=null;
var grayImage=null;
var redImage=null;
var rainbowImage=null;
var canvas=null;

function loadimage(){
  var fileinput=document.getElementById("finput");
  canvas=document.getElementById("can");
  img1=new SimpleImage(fileinput);
  grayImage=new SimpleImage(fileinput);
  redImage=new SimpleImage(fileinput);
  rainbowImage=new SimpleImage(fileinput);
  img1.drawTo(canvas);
}

function imageIsLoaded(image){
  if(image==null || !image.complete()){
      alert("Image not loaded");
      return false;
    }
  else{
    return true;
  }
}

function doGray(){
  if(imageIsLoaded(grayImage)){
    grayscale();
  grayImage.drawTo(canvas);
}
}

function grayscale(){
     for(var pixel of grayImage.values()){
  var x=pixel.getRed();
  var y=pixel.getBlue();
  var z=pixel.getGreen();
  var avg=(x+y+z)/3;
  pixel.setRed(avg);
  pixel.setGreen(avg);
  pixel.setBlue(avg);
}
  return grayImage;
  }
  
function doRed(){
  if(imageIsLoaded(redImage)){
     red();
     }
     redImage.drawTo(canvas);
}
function red(){
  for(var pixel of redImage.values()){
   var red=pixel.getRed();
   var blue=pixel.getBlue();
   var green=pixel.getGreen();
   var avg=(red+blue+green)/3
   if(avg<128){
       pixel.setRed(2*avg);
       pixel.setGreen(0);
       pixel.setBlue(0);
   }
   else{
        pixel.setRed(255);
        pixel.setGreen((2*avg)-255);
        pixel.setBlue((2*avg)-255);
   }
}
  return redImage;
}

function doRainbow(){
  if(imageIsLoaded(rainbowImage)){
    rainbow();
  }
  rainbowImage.drawTo(canvas);
}

function rainbow(){
var height=rainbowImage.getHeight();
var width=rainbowImage.getWidth();
for(var pixel of rainbowImage.values()){
  var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(pixel.getY()<=height/7)
        {
        if(avg<128){                          //violet
            pixel.setRed(1.6*avg);
            pixel.setGreen(0);
            pixel.setBlue(1.6*avg);
        }
        else{
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(.4*avg+153);
        }
    }
    else if(pixel.getY()<=(height*2)/7 && pixel.getY()>height/7)
    {
        if(avg<128){                           //indigo
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
      else{
         pixel.setRed(1.2*avg-51);
         pixel.setGreen(2*avg-255);
         pixel.setBlue(255);
      }
    }
     else if(pixel.getY()<=(height*3)/7 && pixel.getY()>(height*2)/7)
    {
        if(avg<128){                            //blue
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    else if(pixel.getY()<=(height*4)/7 && pixel.getY()>(height*3)/7)
    {
        if(avg<128){                            //green
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    else if(pixel.getY()<=(height*5)/7 && pixel.getY()>(height*4)/7)
    {
        if(avg<128){                            //yellow
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
     else if(pixel.getY()<=(height*6)/7 && pixel.getY()>(height*5)/7)
    {
       if(avg<128){                            //orange
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        }
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
    else
    {
        if(avg<128){                            //red
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
}
return rainbowImage;
  }

function doReel(){
  if(imageIsLoaded(reelImage)){
    filmReel();
  reelImage.drawTo(canvas);
  }
}

function filmReel(){
  var width=reelImage.getWidth();
var height=reelImage.getHeight();
for(var pixel of reelImage.values()){
    if(pixel.getX()<7 || (pixel.getX()>=width-7) || (pixel.getY()<=12) || (pixel.getY()>=height-12) || (pixel.getY()<37 && pixel.getY()>=30)){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    if((pixel.getX()>width/20 && pixel.getX()<2*width/20 && pixel.getY()<30) || (pixel.getX()>3*width/20 && pixel.getX()<4*width/20 && pixel.getY()<30) || (pixel.getX()>5*width/20 && pixel.getX()<6*width/20 && pixel.getY()<30) || (pixel.getX()>7*width/20 && pixel.getX()<8*width/20 && pixel.getY()<30) || (pixel.getX()>9*width/20 && pixel.getX()<10*width/20 && pixel.getY()<30) || (pixel.getX()>11*width/20 && pixel.getX()<12*width/20 && pixel.getY()<30) || (pixel.getX()>13*width/20 && pixel.getX()<14*width/20 && pixel.getY()<30) || (pixel.getX()>15*width/20 && pixel.getX()<16*width/20 && pixel.getY()<30) || (pixel.getX()>17*width/20 && pixel.getX()<18*width/20 && pixel.getY()<30) || (pixel.getX()>19*width/20 && pixel.getX()<width && pixel.getY()<30)){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
  return reelImage;
  
}
function reset(){
    loadimage();
}

