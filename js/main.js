// ハンバーガーメニューの要素を取得
const menuBtn = document.getElementById('header__menu');
// メニューパネルの要素を取得
const menu = document.querySelector('#menu');
const header = document.querySelector('#header')

// ハンバーガーメニューがクリックされたときの処理
menuBtn.addEventListener('click', () => {
  // panelactiveクラスの有無で処理を分岐
  if (menu.classList.contains('panelActive')) {
    // クラスを削除してメニューを閉じる
    menu.classList.remove('panelActive');
    header.classList.remove('panelActive');
  } else {
    // クラスを追加してメニューを開く
    menu.classList.add('panelActive');
    header.classList.add('panelActive');
  }
});