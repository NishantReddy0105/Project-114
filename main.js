noseX=0;
noseY=0;


function preload() {
    clown_nose = loadImage("https://i.postimg.cc/T2r0DMn9/st-small-507x507-pad-600x600-f8f8f8-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initiallized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX - 75, noseY - 95, 140, 150)
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results [0].pose.nose.x;
        noseY = results [0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
