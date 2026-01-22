var menu='\
<h4> Фото</h4>\
  <p><a href="tank/index.html"> Аквариум</a></p>\
  <p><a href="crete/index.html"> Отпуск на Крите</a></p>\
  <p><a href="red-sea/index.html"> На Красном море</a></p>\
  <p><a href="underwater/index.html"> Плаваем с маской</a></p>\
  <p><a href="insect/index.html"> Насекомые</a></p>\
  <p><a href="red-sea-fish/index.html"> Рыбы Красного моря</a></p>\
  <p><a href="astro/index.html"> Простое астрофото</a></p>\
  <p> &nbsp;</p>\
  <p><a href="flame/index.html"> Огонь</a></p>\
  <p><a href="water/index.html"> Вода</a></p>\
  <p><a href="view/index.html"> Пейзаж</a></p>\
  <p> &nbsp;</p>\
  <p><a href="animal/index.html"> Животные</a></p>\
  <p><a href="bird/index.html"> Птицы</a></p>\
  <p> &nbsp;</p>\
  <p><a href="blossom/index.html"> Цветы</a></p>\
  <p><a href="plant/index.html"> Растения</a></p>';

var menuen='\
<h4> Photo</h4>\
  <p><a href="tank/en.html"> My aquarium</a></p>\
  <p><a href="crete/en.html"> Crete</a></p>\
  <p><a href="red-sea/en.html"> Red Sea</a></p>\
  <p><a href="underwater/en.html"> Swimming with mask</a></p>\
  <p><a href="insect/en.html"> Insects</a></p>\
  <p><a href="red-sea-fish/en.html"> Red Sea fish</a></p>\
  <p><a href="astro/en.html"> Simple astrophoto</a></p>\
  <p> &nbsp;</p>\
  <p><a href="flame/en.html"> Flame</a></p>\
  <p><a href="water/en.html"> Water</a></p>\
  <p><a href="view/en.html"> View</a></p>\
  <p> &nbsp;</p>\
  <p><a href="animal/en.html"> Animals</a></p>\
  <p><a href="bird/en.html"> Birds</a></p>\
  <p> &nbsp;</p>\
  <p><a href="blossom/en.html"> Blossom</a></p>\
  <p><a href="plant/en.html"> Plants</a></p>';

var refpath="../";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script0 = document.createElement('script');
script0.src = refpath + 'images/photo.js';
script0.defer = true;
document.head.appendChild(script0);

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);
