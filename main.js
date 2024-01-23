function preload()


function setup()
{
    canva = createCanvas(640, 480); 
    canva =position(110, 250); 


    video =createCapture(VIDEO);
    video.hide();


    tint_color = "";
}



function draw()
{
    image(video, 0, 0, 640, 480,)


    tint(tint_color);
}


function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementbyid("colo_name").value;
}