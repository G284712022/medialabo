// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let yoso = 4;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let p3 = document.createElement('p');
hantei();
/*hantei();
hantei();
hantei();*/
let kaisu1 = document.querySelector('span#kaisu');
let answer = document.querySelector('span#answer');
let result = document.querySelector('p#result');
kaisu1.textContent = kaisu;
answer.textContent = yoso;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  //let yoso = 4;
  kaisu=kaisu+1;
  if(kaisu>3){
    p3.textContent = "答えは"+kotae+"でした.既にゲームは終わっています";
  }
  else if(yoso === kotae){
    p3.textContent = "正解です．おめでとう!";
  }else if(yoso >= kotae){
    p3.textContent = "まちがい．答えはもっと小さいですよ";
  }else if(yoso <= kotae){
    p3.textContent = "まちがい．答えはもっと大きいですよ";
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
result.insertAdjacentElement('beforeend',p3);