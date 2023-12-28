document.getElementById('livingroom').addEventListener('click', function() {
  // 設置Cookie
  document.cookie = 'livingroomClicked=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
});

document.getElementById('kichen').addEventListener('click', function() {
  // 設置Cookie
  document.cookie = 'kichenClicked=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
});


// 設定 Cookie 中的 newbies 變數為 0
function setNewbiesVariableToZero() {
  document.cookie = 'newbies=0; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
}

// 呼叫此函數以設定 newbies 變數
setNewbiesVariableToZero();


