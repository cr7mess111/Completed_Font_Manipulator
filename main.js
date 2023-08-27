noseX = 0;
noseY = 0;

lwx = 0;
rwx = 0;
difference = 0;



function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);

}


function draw()
{
    background('#0e3257')
}

function modelLoaded()
{
    console.log("modelLoaded")
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        lwx = results[0].pose.leftWrist.x
        rwx = results[0].pose.rightWrist.x
        difference = floor(lwx - rwx);
    }
}




function draw()
{
    background("beige");
    textSize(difference);
    fill("#23b0a7");
    text("Drish", noseX, noseY)
}


