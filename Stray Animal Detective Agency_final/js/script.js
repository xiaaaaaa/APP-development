$(window).mousemove(function (e) {
    $(".circle").css({ top: e.pageY, left: e.pageX }); 
  }); 

function password(pwd){
  if(pwd==="9925"){
    location.href="https://www.youtube.com/";
    //location.href="./index1.html";
    //location.href="https://slionkyiu1129.github.io/midterm/D.html";//要改成黑吉自己的github連接喔!
    alert("你已破案");
  }
  else{
    alert("ACCESS DENIED!");
  }
  }

