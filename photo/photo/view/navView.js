var menu=
'<h4><a href="index.html"> Пейзаж</a></h4>\
  <p><a href="forest.html"> Край леса</a></p>\
<h4> Натюрморт</h4>\
  <p><a href="steel-spring.html"> Пружина</a></p>\
<h4><a href="../water/index.html"> Вода</a></h4>\
<h4><a href="../flame/index.html"> Огонь</a></h4>';

var menuen=
'<h4><a href="en.html"> View</a></h4>\
  <p><a href="forest-en.html"> Forest</a></p>\
<h4> Still</h4>\
  <p><a href="steel-spring-en.html"> Spring</a></p>\
<h4><a href="../water/en.html"> Water</a></h4>\
<h4><a href="../flame/en.html"> Flame</a></h4>';

var refpath="../../";
document.head.innerHTML += '<link href="' + refpath+ 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

