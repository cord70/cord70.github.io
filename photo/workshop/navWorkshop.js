var menu='\
<h4> Самоделки</h4>\
  <p><a href="rubik.html"> Сборка кубика Рубика</a></p>\
  <p><a href="HP-C200.html"> Макро мыльницей</a></p>\
  <p><a href="ring-light.html"> Кольцевая лампа</a></p>\
  <p><a href="noiseless.html"> Шумоглушение компьютера</a></p>\
  <p><a href="site.html"> Мой сайт</a></p>\
<h4><a href="da4a/da4a.html"> Дача и пруд</a></h4>\
<h4> Аквариум</h4>\
  <p><a href="fish-home.html"> Грот в аквариуме</a></p>\
  <p><a href="co2/index.html"> Генератор CO2</a></p>\
<h4> Аккумулятор</h4>\
  <p><a href="accu-capacity.html"> Измерение ёмкости</a></p>\
  <p><a href="accu-meter-circuitry.html"> Пример платы</a></p>\
  <p><a href="accu-meter2.html"> Схема для АА</a></p>\
  <p><a href="internal-resistance.html"> Внутреннее сопротивление</a></p>\
<h4><a href="pro/index.html"> PC и программы</a></h4>\
<h4> Новости техники</h4>\
  <p><a href="blink-stereo.html"> Блинк-стерео фото</a></p>\
  <p><a href="costa-concordia.html"> Коста Конкордия</a></p>\
  <p><a href="hyperloop.html"> Hyperloop</a></p>';

var menuen='\
<h4> Homemade</h4>\
  <p><a href="fish-home-en.html"> A cave for fish</a></p>\
  <p><a href="accu-capacity-en.html"> Accumulator capacity meter</a></p>\
  <p><a href="accu-meter-circuitry-en.html"> • Wire-arrangement</a></p>\
  <p><a href="accu-meter2-en.html"> • Example for AA</a></p>\
  <p><a href="noiseless-en.html"> Noiseless computer</a></p>\
  <p><a href="HP-C200-en.html"> Macro with a p/s camera</a></p>';

var refpath="../";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

