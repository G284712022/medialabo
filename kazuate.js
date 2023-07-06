// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let i = document.querySelector('input[name="seisu"]');
let p = document.createElement('p');
let kaisu1 = document.querySelector('span#kaisu');
let answer = document.querySelector('span#answer');
let result = document.querySelector('p#result');
// ボタンを押した後の処理をする関数 hantei() の定義
let b = document.querySelector('#print');
b.addEventListener('click',hantei);
function hantei() {
  let yoso = i.value;
  kaisu1.textContent = kaisu+"回目の予想:";
  answer.textContent = yoso;
  kaisu=kaisu+1;

  if(kaisu>3){
    p.textContent = "答えは"+kotae+"でした.既にゲームは終わっています";
  }
  else if(yoso === kotae){
    p.textContent = "正解です．おめでとう!";
  }else if(yoso >= kotae){
    p.textContent = "まちがい．答えはもっと小さいですよ";
  }else if(yoso <= kotae){
    p.textContent = "まちがい．答えはもっと大きいですよ";
  }
}
result.insertAdjacentElement('beforeend',p);