var menu='\
<h4> сайт cord70.github.io/cyber</h4>\
  <p><a href="mind/consciousness.html"> Механизмы сознания</a></p>\
  <p><a href="mind/articles.html"> Статьи о природе сознания</a></p>\
  <p><a href="ai/index.html"> О конструкции ощущающей машины</a></p>\
  <p><a href="world/space.html"> Происхождение пространства</a></p>\
  <p><a href="science/index.html"> Сложные задачи</a></p>\
  <p><a href="science/FTL-causality.html"> Пример нарушения причинности</a></p>\
  <p> &nbsp;</p>\
  <p><a href="search.html"> Поиск по сайту</a></p>\
  <p><a href="en.html"> English page</a></p>';

var menuen='\
<h4> the site cord70.github.io/cyber</h4>\
  <p><a href="mind/danger-en.html"> Dangerously intelligent</a></p>\
  <p><a href="mind/prove-en.html"> Consciousness and Logic</a></p>\
  <p> &nbsp;</p>\
  <p><a href="world/existence-en.html"> Why is existence possible</a></p>\
  <p> &nbsp;</p>\
  <p><a href="search-en.html"> Search on site</a></p>\
  <p><a href="index.html"> Русская страница</a></p>';

var refpath="";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);
