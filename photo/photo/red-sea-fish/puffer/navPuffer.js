var menu='\
<h4><a href="../index.html"> Рыбы Красного моря</a></h4>\
<h4><a href="index.html"> Масковый пуффер</a></h4>\
  <p><a href="angry.html"> Приготовился укусить</a></p>\
  <p><a href="back.html"> Виляет хвостом</a></p>\
  <p><a href="fire-coral.html"> У огненного коралла</a></p>\
  <p><a href="four-teeth.html"> У рогатого коралла</a></p>';

var menuen='\
<h4><a href="../en.html"> Red Sea Fish</a></h4>\
<h4><a href="en.html"> Masked puffer</a></h4>\
  <p><a href="angry-en.html"> Angry</a></p>\
  <p><a href="back-en.html"> Waving tail</a></p>\
  <p><a href="fire-coral-en.html"> Near fire coral</a></p>\
  <p><a href="four-teeth-en.html"> Near horny coral</a></p>';

var refpath="../../../";
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

