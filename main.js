Hps="";
Sts="";
song1_status="";
song2_status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
    Hps=loadSound("HP theme.mp3");
    Sts=loadSound("Star Wars.mp3");
}
function setup()
{
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses( results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        
    }
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}
function draw() 
{
    image(video,0,0,400,300);
    song1_status=Hps.isPlaying();
    song2_status=Sts.isPlaying();
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}