var menu='\
<h4><a href="index.html"> Рыбы Красного моря</a></h4>\
  <p><a href="hawkfish.html"> Крапчатый кудрепер</a></p>\
  <p><a href="angelfish.html"> Аравийский ангел</a></p>\
  <p><a href="amphiprion.html"> Амфиприон</a></p>\
  <p><a href="black-spotted-grunt.html"> Крапчатый ворчун</a></p>\
  <p><a href="lion-fish.html"> Крылатка-зебра</a></p>\
  <p><a href="lion-fish-side.html"> Крылатка-зебра</a></p>\
  <p><a href="orangespine-unicornfish.html"> Хирург-носорог</a></p>\
  <p><a href="parrot-fish.html"> Рыба попугай</a></p>\
  <p><a href="anthias.html"> Псевдантиас</a></p>\
  <p><a href="burrfish-face.html"> Большие глаза</a></p>\
  <p><a href="burrfish.html"> Рыба ёж</a></p>\
  <p><a href="needlefish.html"> Рыба-игла</a></p>\
  <p><a href="diodon.html"> Рыба ёж Diodon</a></p>\
  <p><a href="surgeon-fish-pair.html"> Два хирурга</a></p>\
  <p><a href="surgeon-fish.html"> Рыба хирург</a></p>\
<h4><a href="scat/index.html"> Скат Тэниура лимма</a></h4>\
<h4><a href="puffer/index.html"> Масковый пуффер</a></h4>\
<h4><a href="butterfly/index.html"> Рыбы-бабочки</a></h4>\
<h4><a href="triggerfish/index.html"> Спинороги</a></h4>';

var menuen='\
<h4><a href="en.html"> Red Sea Fish</a></h4>\
  <p><a href="hawkfish-en.html"> Hawkfish</a></p>\
  <p><a href="angelfish-en.html"> Arabian angel fish</a></p>\
  <p><a href="amphiprion-en.html"> Amphiprion</a></p>\
  <p><a href="black-spotted-grunt-en.html"> Black-spotted grunt</a></p>\
  <p><a href="lion-fish-en.html"> Lion fish</a></p>\
  <p><a href="lion-fish-side-en.html"> Lion fish</a></p>\
  <p><a href="orangespine-unicornfish-en.html"> Unicornfish</a></p>\
  <p><a href="parrot-fish-en.html"> Parrot fish</a></p>\
  <p><a href="anthias-en.html"> Anthias</a></p>\
  <p><a href="burrfish-face-en.html"> Big eyes</a></p>\
  <p><a href="burrfish-en.html"> Burrfish</a></p>\
  <p><a href="needlefish-en.html"> Needle-fish</a></p>\
  <p><a href="diodon-en.html"> Diodon</a></p>\
  <p><a href="surgeon-fish-pair-en.html"> Two Surgeons</a></p>\
  <p><a href="surgeon-fish-en.html"> Surgeon fish</a></p>\
<h4><a href="scat/en.html"> Taeniura limma</a></h4>\
<h4><a href="puffer/en.html"> Masked puffer</a></h4>\
<h4><a href="butterfly/en.html"> Butterfly fish</a></h4>\
<h4><a href="triggerfish/en.html"> Triggerfish</a></h4>';

var refpath="../../";
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

