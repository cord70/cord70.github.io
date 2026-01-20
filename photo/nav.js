  var menu='\
<h4> сайт cord70.github.io/photo</h4>\
  <p><a href="photo/index.html"> Фото о природе</a></p>\
  <p><a href="workshop/index.html"> Самоделки</a></p>\
  <p><a href="photo/red-sea/index.html"> На Красном море</a></p>\
  <p><a href="photo/red-sea-fish/index.html"> Рыбы Красного моря</a></p>\
  <p><a href="photo/underwater/index.html"> Плаваем с маской</a></p>\
  <p><a href="photo/tank/index.html"> Аквариум</a></p>\
  <p><a href="photo/crete/index.html"> Отпуск на Крите</a></p>\
  <p><a href="txt/poem.html"> Стихи</a></p>\
<p> &nbsp;</p>\
  <p><a href="search.html"> Поиск по сайту</a></p>\
  <p><a href="en.html"> English page</a></p>';

  var menuen='\
<h4> the site cord70.github.io/photo</h4>\
  <p><a href="photo/en.html"> Interesting nature</a></p>\
  <p><a href="workshop/en.html"> Homemade</a></p>\
  <p><a href="photo/red-sea/en.html"> Red Sea</a></p>\
  <p><a href="photo/red-sea-fish/en.html"> Red Sea fish</a></p>\
  <p><a href="photo/underwater/en.html"> Swimming with mask</a></p>\
  <p><a href="photo/tank/en.html"> My aquarium</a></p>\
  <p><a href="photo/crete/en.html"> Crete</a></p>\
<p> &nbsp;</p>\
  <p><a href="search-en.html"> Search at this site</a></p>\
  <p><a href="index.html"> Русская страница</a></p>';

var refpath = "";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

