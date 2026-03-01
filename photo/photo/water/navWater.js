var menu='\
<h4><a href="index.html"> Вода</a></h4>\
  <p><a href="fir-water.html"> Капля в хвое</a></p>\
  <p><a href="rainy.html"> Дождь в лесу</a></p>\
  <p><a href="shower.html"> Душ</a></p>\
  <p><a href="water-form.html"> Форма воды</a></p>\
  <p><a href="rainy-bog.html"> Дождь в лесу</a></p>\
  <p><a href="sea.html"> Виды моря</a></p>\
  <p><a href="falling-drop.html"> Падающая капля</a></p>\
<h4><a href="../flame/index.html"> Огонь</a></h4>\
<h4><a href="../view/index.html"> Пейзаж</a></h4>';

var menuen='\
<h4><a href="en.html"> Water</a></h4>\
  <p><a href="falling-drop-en.html"> Falling drop</a></p>\
  <p><a href="water-form-en.html"> Form of water</a></p>\
  <p><a href="shower-en.html"> Macro of shower</a></p>\
  <p><a href="rainy-bog-en.html"> Rain on a forest bog</a></p>\
  <p><a href="sea-en.html"> Sea views</a></p>\
  <p><a href="fir-water-en.html"> Water in fir</a></p>\
  <p><a href="rainy-en.html"> Rain in forest</a></p>\
<h4><a href="../flame/en.html"> Flame</a></h4>\
<h4><a href="../view/en.html"> View</a></h4>';

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

