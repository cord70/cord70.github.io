var menu=
'<h4><a href="index.html"> Что читать о природе сознания</a></h4>\
  <p><a href="seeing.html"> Видеть при помощи слуха</a></p>\
  <p><a href="deprivation.html"> Депривация</a></p>\
  <p><a href="ps-seeing.html"> Зрительная система</a></p>\
  <p><a href="ps-prior-awareness.html"> Психофизиология бессознательного</a></p>\
  <p><a href="teaching.html"> Поощрение в дрессировке</a></p>\
  <p><a href="krushinsky.html"> Экстраполяционный рефлекс</a></p>\
  <p><a href="habituation.html"> Обучение каракатицы</a></p>\
  <p><a href="memory.html"> Биология памяти</a></p>';

var refpath="../";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);
