'use strict'

{
  //-------------------
  //隠しメニューの挙動
  //-------------------

  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('link-btn');
  const mask = document.getElementById('mask');
  const menuLinks = document.getElementById('menu-list').querySelectorAll('a');

  hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
  })

  mask.addEventListener('click', () => {
    header.classList.remove('open');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
    });
  })


  // ---------------------------------
  // ヘッダーのスクロールイベント
  //----------------------------------
  const screen = document.getElementById('top-screen-container');
  
  //top画面の高さを取得
  let height = screen.clientHeight - 40;

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(height < window.scrollY) {
      header.classList.add('black'); 
    } else {
      header.classList.remove('black');
    }
  } )




}