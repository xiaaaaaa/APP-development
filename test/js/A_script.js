$(window).mousemove(function (e) {
    $(".circle").css({ top: e.pageY, left: e.pageX }); 
  }); 

function password(pwd){
  if(pwd==="9925"){
    location.href="https://xiaaaaaa.github.io/F2E_Front-End_Engineer_Design/Stray%20Animal%20Detective%20Agency/D.html";//要改成黑吉自己的github連接喔!
    alert("你已破案");
  }
  else{
    alert("ACCESS DENIED!");
  }
}
