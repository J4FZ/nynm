var videoSource = new Array();
var i = 0;
videoSource[0]='videos/pt.mp4';
videoSource[1]='videos/treadmill.mp4';
videoSource[2]='videos/legpress.mp4';

var videoCount = videoSource.length;

document.getElementById("myVideo").setAttribute("src",videoSource[0]);
 
function videoPlay(videoNum)
    {
document.getElementById("myVideo").setAttribute("src",videoSource[videoNum]);
document.getElementById("myVideo").load();
document.getElementById("myVideo").play();
    }
	
document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler() {
i++;
if(i == (videoCount)){ //if get to legpress
i = 0; //reset videos
videoPlay(i);
}
else{ //else not at legpress, do nothing
videoPlay(i);
}
        
}