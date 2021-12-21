noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(590,75);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is initialized.');
}

function gotPoses()
{
  if(results.length > 0)
  {
      console.log(results);
  }
}