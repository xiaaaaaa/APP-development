// document.getElementById('to-d').style.visibility = 'hidden';
let variable=0;
const btn10 = document.querySelector("#clue10");
const btn11 = document.querySelector("#clue11");
const btn12 = document.querySelector("#clue12");
const btn13 = document.querySelector("#clue13");
const btn_cross10 = document.querySelector("#cross10");
const btn_cross11 = document.querySelector("#cross11");
const btn_cross12 = document.querySelector("#cross12");
const btn_cross13 = document.querySelector("#cross13");
const btn_nextpage4 = document.querySelector("#how-to-play4-btn");
const btn_nextpage5 = document.querySelector("#how-to-play5-btn");
const btn_nextpage6 = document.querySelector("#how-to-play6-btn");
document.getElementById('variable').textContent = variable;
document.getElementById('explain-page5').style.visibility = 'hidden';
document.getElementById('explain-page6').style.visibility = 'hidden';
document.getElementById('explain-page7').style.visibility = 'hidden';
document.getElementById('explain-page8').style.visibility = 'hidden';
document.getElementById('explain-page9').style.visibility = 'hidden';
document.getElementById('how-to-play4').style.visibility = 'hidden';
document.getElementById('how-to-play5').style.visibility = 'hidden';
document.getElementById('how-to-play6').style.visibility = 'hidden';
document.getElementById('all-darken').style.visibility = 'hidden';

document.getElementById('to-d').style.visibility = 'hidden';

let check1 = 0;
let check2 = 0;
let check3 = 0;
let check4 = 0;
let check5 = 0;


btn5.addEventListener("click", function(){
    if(check1 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check1 = 1;
    }
    document.getElementById('explain-page5').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 5){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn6.addEventListener("click", function(){
    if(check2 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check2 = 1;
    }
    document.getElementById('explain-page6').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 5){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn7.addEventListener("click", function(){
    if(check3 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check3 = 1;
    }
    document.getElementById('explain-page7').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 5){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn8.addEventListener("click", function(){
    if(check4 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check4 = 1;
    }
    document.getElementById('explain-page8').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 5){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});

btn9.addEventListener("click", function(){
    if(check5 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check4 = 1;
    }
    document.getElementById('explain-page9').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 5){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});


btn_cross5.addEventListener("click", function(){
    document.getElementById('explain-page5').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross6.addEventListener("click", function(){
    document.getElementById('explain-page6').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross7.addEventListener("click", function(){
    document.getElementById('explain-page7').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross8.addEventListener("click", function(){
    document.getElementById('explain-page8').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross9.addEventListener("click", function(){
    document.getElementById('explain-page9').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});



btn_nextpage4.addEventListener("click", function(){
    document.getElementById('how-to-play4').style.visibility = 'hidden';
    document.getElementById('how-to-play5').style.visibility = 'visible';
});
btn_nextpage5.addEventListener("click", function(){
  document.getElementById('how-to-play5').style.visibility = 'hidden';
  document.getElementById('how-to-play6').style.visibility = 'visible';
});
btn_nextpage6.addEventListener("click", function(){
  document.getElementById('how-to-play6').style.visibility = 'hidden';
  document.getElementById('all-darken').style.visibility = 'hidden';
});



// ---------------------------
// 判斷 newbies 變數的值
function checkAndModifyNewbiesVariable() {
    const newbiesValue = document.cookie.split('; ')
      .find(row => row.startsWith('newbies='))
      .split('=')[1];
  
    if (newbiesValue === '0') {
      
      document.getElementById('how-to-play4').style.visibility = 'visible';
      document.getElementById('all-darken').style.visibility = 'visible';
      
      // 做不同的行為，例如修改 newbies 變數為 1
      document.cookie = 'newbies=1; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
      
    } else {
        document.getElementById('how-to-play4').style.visibility = 'hidden';
    }
  }
  
  // 呼叫此函數以判斷並修改 moon 變數
  setNewbiesVariableToZero();
  
//----------------------------
  