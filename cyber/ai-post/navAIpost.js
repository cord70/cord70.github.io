var menu=
'<h4><a href="index.html"> Из переписки в форумах</a></h4>\
  <p><a href="future.html"> Будущее искусств.разума</a></p>\
  <p><a href="ai.html"> Искусственное сознание</a></p>\
  <p><a href="brain.html"> Возможности мозга</a></p>\
  <p><a href="copying.html"> Копирование сознания</a></p>\
  <p><a href="definition.html"> Что такое сознание</a></p>\
  <p><a href="motor.html"> Ассоциативный мотор</a></p>\
  <p><a href="sense.html"> Формирование смыслов</a></p>\
  <p><a href="will.html"> Механизм свободы воли</a></p>';

var refpath="../";

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
