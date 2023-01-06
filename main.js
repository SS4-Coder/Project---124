function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,500);
    canvas.position(560,100);
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on("pose",got_poses);
    }
    function draw(){
    background("skyblue");
    
    }
    function model_loaded(){
    console.log("poseNet is initialized");
    
    }
    function got_poses(results){
    if(results.length>0){
    console.log(results);
    }
    }