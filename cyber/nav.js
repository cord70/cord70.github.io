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

var metaViewport = document.createElement('meta');
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.head.appendChild(metaViewport);

var linkFavicon = document.createElement('link');
linkFavicon.rel = "icon";
linkFavicon.sizes = "any";
linkFavicon.type = "image/svg+xml";
linkFavicon.href = refpath + "images/favicon.svg";
document.head.appendChild(linkFavicon);

var linkStyles = document.createElement('link');
linkStyles.rel = "stylesheet";
linkStyles.href = refpath + "images/main.css";
document.head.appendChild(linkStyles);


script0 = document.createElement('script');
script0.src = refpath + 'images/cyber.js';
script0.defer = true;
document.head.appendChild(script0);

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);
