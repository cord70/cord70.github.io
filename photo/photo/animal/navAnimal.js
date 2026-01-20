var menu='\
<h4><a href="index.html"> Животные</a></h4>\
  <p><a href="salamandra.html"> Тритон</a></p>\
  <p><a href="frog-pond.html"> Лягушонок у пруда</a></p>\
  <p><a href="frog-portrait.html"> Лягушонок в пруду</a></p>\
  <p><a href="cats-eye.html"> Глаза кошки</a></p>\
  <p><a href="squirrel.html"> Белка на сосне</a></p>\
  <p><a href="snail.html"> Любопытная улитка</a></p>\
  <p><a href="snake.html"> Может кобра?</a></p>\
  <p><a href="sand-lizard.html"> Круглоголовка</a></p>\
  <p><a href="deer-face.html"> Портрет оленя</a></p>\
  <p><a href="rat.html"> Крысы едят руками</a></p>\
<h4><a href="../bird/index.html"> Птицы</a></h4>\
<h4> Новости биологии</h4>\
  <p><a href="eat-less.html"> Меньше ешь!</a></p>';

var menuen='\
<h4><a href="en.html"> Animals</a></h4>\
  <p><a href="snake-en.html"> Maybe a cobra?</a></p>\
  <p><a href="sand-lizard-en.html"> Sand lizard</a></p>\
  <p><a href="deer-face-en.html"> Deer</a></p>\
  <p><a href="rat-en.html"> Rat eats by hands</a></p>\
  <p><a href="snail-en.html"> Snail in night</a></p>\
  <p><a href="squirrel-en.html"> Squirrel</a></p>\
  <p><a href="cats-eye-en.html"> Color of cat eyes</a></p>\
<h4><a href="../bird/en.html"> Birds</a></h4>';

var refpath="../../";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

