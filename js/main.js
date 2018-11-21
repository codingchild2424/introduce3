var con = document.getElementById("contents");
var pic = document.getElementById("pic");

// 1번버튼
var gcontrol = document.getElementById('gbutton');
gcontrol.addEventListener('click', function(){
    con.innerHTML = "Greeting!<br><br>I'm Codingchild.<br><br>I'm very happy to meet you all of you guys.<br><br>This is my first website.<br><br>I know, my coding skills are not good enough to make fancy website.<br><br>But I'll try to make it better, as possible as I can.</p><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you!";
    pic.src="picture/cat.jpeg";
})
gcontrol.addEventListener('mouseover', function(){
    gcontrol.style.backgroundColor = " rgb(70, 65, 65)";
})
gcontrol.addEventListener('mouseout', function(){
    gcontrol.style.backgroundColor = "rgb(155, 154, 154)";
})

//2번버튼
var ccontrol = document.getElementById('cbutton');
ccontrol.addEventListener('click', function(){
    con.innerHTML = "Elementary school teacher<br><br>First Lieutenant in R.O.K.A.<br><br>Seoul National University, Master degree<br><br>MIEE<br><br>Maker:ed";
    pic.src="picture/java1.jpg";
})
ccontrol.addEventListener('mouseover', function(){
    ccontrol.style.backgroundColor = "rgb(70, 65, 65)";
})
ccontrol.addEventListener('mouseout', function(){
    ccontrol.style.backgroundColor = "rgb(155, 154, 154)";
})

//3번버튼
var acontrol = document.getElementById('abutton');
acontrol.addEventListener('click', function(){
    con.innerHTML = "Educatinal Technology<br><br>C, C++ a little bit(read one book)<br><br>University Calculus(studying)<br><br>Linear algebra<br><br>Data Structure<br><br>Descrete mathematics<br><br>HTML, CSS, JS(studying)<br><br>python";
    pic.src="picture/iron.jpg";
})
acontrol.addEventListener('mouseover', function(){
    acontrol.style.backgroundColor = "rgb(70, 65, 65)";
})
acontrol.addEventListener('mouseout', function(){
    acontrol.style.backgroundColor = "rgb(155, 154, 154)";
})

//4번버튼
var hcontrol = document.getElementById('hbutton');
hcontrol.addEventListener('click', function(){
    con.innerHTML = "Learn something new<br><br>swing dance<br>mathematics<br>programming<br>vocal music<br>trevari<br>English<br>wakeboard<br>surfing<br>skateboarding<br>and so on...<br><br>except girl friend";
    pic.src="picture/frog.png";
})
hcontrol.addEventListener('mouseover', function(){
    hcontrol.style.backgroundColor = "rgb(70, 65, 65)";
})
hcontrol.addEventListener('mouseout', function(){
    hcontrol.style.backgroundColor = "rgb(155, 154, 154)";
})


