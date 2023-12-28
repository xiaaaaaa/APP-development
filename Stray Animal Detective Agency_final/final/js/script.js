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

  window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const layer0 = document.querySelector('.keyart-layer0');
    const layer1 = document.querySelectorAll('.keyart-layer1');
    const layer2 = document.querySelectorAll('.keyart-layer2');
    //const parallaxScrollingElements = [...stars, moon];
    const parallaxScrollingElements = [keyart-layer0, keyart-layer1, keyart-layer2];
  
    parallaxScrollingElements.forEach((element) => {
      const elementMoveSpeed = Number(element.dataset.speed);
      element.style.transform = `
        translateY(${scrollPositionY * elementMoveSpeed}px)
      `;
    });
  });
