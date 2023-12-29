document.getElementById('all-darken').style.visibility = 'hidden';
document.getElementById('to-d').style.visibility = 'hidden';
let variable=0;
const btn14 = document.querySelector("#clue14");
const btn15 = document.querySelector("#clue15");
const btn16 = document.querySelector("#clue16");
const btn17 = document.querySelector("#clue17");
const btn_cross14 = document.querySelector("#cross14");
const btn_cross15 = document.querySelector("#cross15");
const btn_cross16 = document.querySelector("#cross16");
const btn_cross17 = document.querySelector("#cross17");
const btn_nextpage4 = document.querySelector("#how-to-play10-btn");
const btn_nextpage5 = document.querySelector("#how-to-play11-btn");
const btn_nextpage6 = document.querySelector("#how-to-play12-btn");
document.getElementById('variable').textContent = variable;
document.getElementById('explain-page14').style.visibility = 'hidden';
document.getElementById('explain-page15').style.visibility = 'hidden';
document.getElementById('explain-page16').style.visibility = 'hidden';
document.getElementById('explain-page17').style.visibility = 'hidden';
document.getElementById('how-to-play10').style.visibility = 'hidden';
document.getElementById('how-to-play11').style.visibility = 'hidden';
document.getElementById('how-to-play12').style.visibility = 'hidden';
document.getElementById('all-darken').style.visibility = 'hidden';

document.getElementById('to-d').style.visibility = 'hidden';

let check1 = 0;
let check2 = 0;
let check3 = 0;
let check4 = 0;
let check5 = 0;


btn14.addEventListener("click", function(){
    if(check1 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check1 = 1;
    }
    document.getElementById('explain-page14').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn15.addEventListener("click", function(){
    if(check2 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check2 = 1;
    }
    document.getElementById('explain-page15').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn16.addEventListener("click", function(){
    if(check3 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check3 = 1;
    }
    document.getElementById('explain-page16').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});
btn17.addEventListener("click", function(){
    if(check4 === 0){
        variable++;
        document.getElementById('variable').textContent = variable;
        check4 = 1;
    }
    document.getElementById('explain-page17').style.visibility = 'visible';
    document.getElementById('all-darken').style.visibility = 'visible';
    if(variable === 4){
        document.getElementById('to-d').style.visibility = 'visible';
        document.getElementById('all-darken').style.visibility = 'visible';
    }
});



btn_cross14.addEventListener("click", function(){
    document.getElementById('explain-page14').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross15.addEventListener("click", function(){
    document.getElementById('explain-page15').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross16.addEventListener("click", function(){
    document.getElementById('explain-page16').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});
btn_cross17.addEventListener("click", function(){
    document.getElementById('explain-page17').style.visibility = 'hidden';
    document.getElementById('all-darken').style.visibility = 'hidden';
});



// btn_nextpage4.addEventListener("click", function(){
//     document.getElementById('how-to-play4').style.visibility = 'hidden';
//     document.getElementById('how-to-play5').style.visibility = 'visible';
// });
// btn_nextpage5.addEventListener("click", function(){
//   document.getElementById('how-to-play5').style.visibility = 'hidden';
//   document.getElementById('how-to-play6').style.visibility = 'visible';
// });
// btn_nextpage6.addEventListener("click", function(){
//   document.getElementById('how-to-play6').style.visibility = 'hidden';
//   document.getElementById('all-darken').style.visibility = 'hidden';
// });



// // ---------------------------
// // 判斷 newbies 變數的值
// function checkAndModifyNewbiesVariable() {
//     const newbiesValue = document.cookie.split('; ')
//       .find(row => row.startsWith('newbies='))
//       .split('=')[1];
  
//     if (newbiesValue === '0') {
      
//       document.getElementById('how-to-play4').style.visibility = 'visible';
//       document.getElementById('all-darken').style.visibility = 'visible';
      
//       // 做不同的行為，例如修改 newbies 變數為 1
//       document.cookie = 'newbies=1; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
      
//     } else {
//         document.getElementById('how-to-play4').style.visibility = 'hidden';
//     }
//   }
  
//   // 呼叫此函數以判斷並修改 moon 變數
//   setNewbiesVariableToZero();
  
// //----------------------------
  