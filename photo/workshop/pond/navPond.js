var menu='\
<h4> Дача</h4>\
  <p><a href="../da4a/da4a.html"> Умная дача</a></p>\
  <p><a href="../da4a/adc.html"> Считывание счётчика</a></p>\
  <p><a href="../da4a/firewood-shed.html"> Дровница</a></p>\
<h4> Пруд</h4>\
  <p><a href="index.html"> Декоративный пруд</a></p>\
  <p><a href="bush.html"> • Удаление куста</a></p>\
  <p><a href="water-for-pond.html"> • Вода для пруда</a></p>';

var refpath="../../";
document.head.innerHTML += '<link href="' + refpath+ 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

