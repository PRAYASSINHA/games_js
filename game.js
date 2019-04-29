<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>
.paddle{
	position: relative;
	top: 367px;
	width: 100px;
	background-color:#6633FF;
	left : 443px;
}
.rightbut{
	background-color:#66FFFF;
	width:40px;
	top:454px;
	position:absolute;
	left:562px;
	height: 46px;
}
.leftbut{
	position:absolute;
	top:449px;
	left:395px;
	width:40px;
	background-color:#FF0000;
	height: 45px; 
}
.ball{
	top:12px;
	left:108px;
	height:20px;
	width:20px;
	position:relative;
	background-color:#FF0000;
}
.uiscore{
	background-color:#FFF000;
	top:23px;
	left:1012px;
	position:absolute;
	width: 92px;
}
</style>
<title>Unicode games</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body>
<div class="uiscore" id="scorekeep">  score: </div>
<div class="paddle" id="player">player</div>
<div class = "rightbut" onMouseDown ="Right()">Rig</div> 
<div class = "leftbut" onMouseDown ="Left()">Lef</div>
<div class = "ball" id="ball">b </div> 
<script language="javascript">
setInterval(Ballupd,3000);
var scoretext = document.getElementById("scorekeep");
var score = 0;
var paddle = document.getElementById("player");
var ball = document.getElementById("ball");
var bxs = 0.01;
var bys = 0.01;
var bx = 10;
var by = 12;
let pos = 443;
function Right(){
	if(pos <= 0)
	{
		pos = 0;
	}
	pos += 20;
	paddle.style.left = pos + "px";
}
function Left(){
	pos -= 20;
	paddle.style.left = pos + "px";
	if(pos >= 1000)
	{
		pos = 999;
	}
}
function Ballupd(){
	scoretext.innerHTML = "Score : " + score;
	bx += bxs;
	by += bys;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	if(bx >= pos - 100 && bx <= pos + 100){
		
		if(by >= 367 && by <= 368){
			by -= 23;
			score += 1;
			bys = bys * -1;
		}
	}
	if(bx <= 0 || bx >= 900){
		bxs = bxs * -1;
	}
	if(by <= 0){
		bys = bys * -1;
	}
	if(by >= 500){
		document.body.innerHTML = "Your Score :" + score;
		setInterval(loadlost,10);
	}
	setInterval(Ballupd,1);
}
function loadlost(){
	document.location.href ="youlostp.htm";
}
</script>
</body>
</html>
