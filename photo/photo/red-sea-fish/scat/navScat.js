var menu='\
<h4><a href="../index.html"> Рыбы Красного моря</a></h4>\
<h4><a href="index.html"> Скат Тэниура лимма</a></h4>\
  <p><a href="deep.html"> Скат в глубине</a></p>\
  <p><a href="over-coral.html"> Скат над кораллом</a></p>\
  <p><a href="blue-spot.html"> Скат без хвоста</a></p>\
  <p><a href="stingray-blue-spotted.html"> Шипы</a></p>\
  <p><a href="under-coral.html"> Под кораллом</a></p>';

var menuen='\
<h4><a href="../en.html"> Red Sea Fish</a></h4>\
<h4><a href="en.html"> Blue-spotted stingray</a></h4>\
  <p><a href="over-coral-en.html"> Stingray over coral</a></p>\
  <p><a href="stingray-blue-spotted-en.html"> Blue spots</a></p>\
  <p><a href="deep-en.html"> A ray in deep</a></p>\
  <p><a href="blue-spot-en.html"> Shorten tail</a></p>\
  <p><a href="under-coral-en.html"> Under coral</a></p>';

var refpath="../../../";

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

