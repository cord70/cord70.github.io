var menu='\
<h4> Дача</h4>\
  <p><a href="da4a.html"> Умная дача</a></p>\
  <p><a href="adc.html"> Считывание счётчика</a></p>\
  <p><a href="firewood-shed.html"> Дровница</a></p>\
<h4> Пруд</h4>\
  <p><a href="../pond/index.html"> Декоративный пруд</a></p>\
  <p><a href="../pond/bush.html"> • Удаление куста</a></p>\
  <p><a href="../pond/water-for-pond.html"> • Вода для пруда</a></p>';

var refpath="../../";

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
script0.src = refpath + 'images/photo.js';
script0.defer = true;
document.head.appendChild(script0);

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

