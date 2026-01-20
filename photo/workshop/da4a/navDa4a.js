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
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

