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






}