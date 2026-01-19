var menu='\
<h4><a href="../index.html"> Рыбы Красного моря</a></h4>\
<h4><a href="index.html"> Спинороги</a></h4>\
  <p><a href="filefish.html"> Рыба-напильник</a></p>\
  <p><a href="picasso-yellow.html"> Ринекант Пикассо</a></p>\
  <p><a href="picasso-grey.html"> Рог спрятан</a></p>\
  <p><a href="picasso-fin.html"> Рог виден</a></p>\
  <p><a href="titan-coral.html"> Синепёрый балистод</a></p>\
  <p><a href="titan.html"> Крепкие зубы</a></p>';

var menuen='\
<h4><a href="../en.html"> Red Sea Fish</a></h4>\
<h4><a href="en.html"> Triggerfish</a></h4>\
  <p><a href="filefish-en.html"> File-fish</a></p>\
  <p><a href="picasso-yellow-en.html"> Rhinecanthus assasi</a></p>\
  <p><a href="picasso-grey-en.html"> Picasso, trigger closed</a></p>\
  <p><a href="picasso-fin-en.html"> Picasso, trigger open</a></p>\
  <p><a href="titan-coral-en.html"> Titan triggerfish</a></p>\
  <p><a href="titan-en.html"> Titan shows its teeth</a></p>';

var refpath="../../../";
document.head.innerHTML += '<link href="' + refpath+ 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

