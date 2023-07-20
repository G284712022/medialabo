let b = document.querySelector("#search");
b.addEventListener('click',search);
function search(){
  let u = document.querySelectorAll("ul");
  for(let i =0;i<u.length;i++){
    let u1 = document.querySelector('ul');
    u1.remove();
  }
  let rs = document.querySelectorAll('input[name="gen"]');
  for(let r of rs){
    if (r.checked){
      let g;
      g = r.id;
      let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+g+'.json';
      axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
    }
  }
}
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);
  let div = document.querySelector('div#result');
  for(let i=0;i<data.results.shop.length;i=i+1){
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');
    let li6 = document.createElement('li');
    ul.textContent = "検索結果"+(i+1)+"件目";
    li1.textContent = data.results.shop[i].access;
    li2.textContent = data.results.shop[i].address;
    li3.textContent = data.results.shop[i].budget.name;
    li4.textContent = data.results.shop[i].catch;
    li5.textContent = data.results.shop[i].genre.name;
    li6.textContent = data.results.shop[i].open;
    ul.insertAdjacentElement('beforeend',li1);
    ul.insertAdjacentElement('beforeend',li2);
    ul.insertAdjacentElement('beforeend',li3);
    ul.insertAdjacentElement('beforeend',li4);
    ul.insertAdjacentElement('beforeend',li5);
    ul.insertAdjacentElement('beforeend',li6);
    div.insertAdjacentElement('beforeend',ul);
  }
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
