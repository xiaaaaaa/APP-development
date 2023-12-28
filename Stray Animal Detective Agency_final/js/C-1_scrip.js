let variable=0;
const btn1 = document.querySelector("#clue1");
const btn2 = document.querySelector("#clue2");
const btn3 = document.querySelector("#clue3");
const btn4 = document.querySelector("#clue4");
const btn_cross1 = document.querySelector("#cross1");
const btn_cross2 = document.querySelector("#cross2");
const btn_cross3 = document.querySelector("#cross3");
const btn_cross4 = document.querySelector("#cross4");
const btn_cross5 = document.querySelector("#cross5");
const btn_nextpage1 = document.querySelector("#how-to-play1-btn");
const btn_nextpage2 = document.querySelector("#how-to-play2-btn");
const btn_nextpage3 = document.querySelector("#how-to-play3-btn");
document.getElementById('variable').textContent = variable;
document.getElementById('explain-page1').style.visibility = 'hidden';
document.getElementById('explain-page2').style.visibility = 'hidden';
document.getElementById('explain-page3').style.visibility = 'hidden';
document.getElementById('explain-page4').style.visibility = 'hidden';
document.getElementById('how-to-play1').style.visibility = 'visible';
document.getElementById('how-to-play2').style.visibility = 'hidden';
document.getElementById('how-to-play3').style.visibility = 'hidden';
document.getElementById('all-darken').style.visibility = 'hidden';

document.getElementById('to-d').style.visibility = 'hidden';

let check1 = 0;
let check2 = 0;
let check3 = 0;
let check4 = 0;



btn1.addEventListener("click", function(){
    if(check1 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check1 = 1;
    }
    document.getElementById('explain-page1').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn2.addEventListener("click", function(){
    if(check2 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check2 = 1;
    }
    document.getElementById('explain-page2').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn3.addEventListener("click", function(){
    if(check3 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check3 = 1;
    }
    document.getElementById('explain-page3').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn4.addEventListener("click", function(){
    if(check4 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check4 = 1;
    }
    document.getElementById('explain-page4').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});


btn_cross1.addEventListener("click", function(){
    document.getElementById('explain-page1').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross2.addEventListener("click", function(){
    document.getElementById('explain-page2').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross3.addEventListener("click", function(){
    document.getElementById('explain-page3').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross4.addEventListener("click", function(){
    document.getElementById('explain-page4').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});


btn_nextpage1.addEventListener("click", function(){
    document.getElementById('how-to-play1').style.visibility = 'hidden';
    document.getElementById('how-to-play2').style.visibility = 'visible';
});
btn_nextpage2.addEventListener("click", function(){
  document.getElementById('how-to-play2').style.visibility = 'hidden';
  document.getElementById('how-to-play3').style.visibility = 'visible';
});
btn_nextpage3.addEventListener("click", function(){
  document.getElementById('how-to-play3').style.visibility = 'hidden';
  document.getElementById('all-darken').style.visibility = 'hidden';
});



// ---------------------------
// 判斷 newbies 變數的值
function checkAndModifyNewbiesVariable() {
    const newbiesValue = document.cookie.split('; ')
      .find(row => row.startsWith('newbies='))
      .split('=')[1];
  
    if (newbiesValue === '0') {
      
      document.getElementById('how-to-play1').style.visibility = 'visible';
      document.getElementById('all-darken').style.visibility = 'visible';
      
      // 做不同的行為，例如修改 newbies 變數為 1
      document.cookie = 'newbies=1; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
      
    } else {
        document.getElementById('how-to-play1').style.visibility = 'hidden';
    }
  }
  
  // 呼叫此函數以判斷並修改 moon 變數
  setNewbiesVariableToZero();
  
//----------------------------


