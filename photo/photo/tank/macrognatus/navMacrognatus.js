var menu='\
<h4><a href="../index.html"> Аквариум</a></h4>\
<h4><a href="index.html"> Макрогнатус</a></h4>\
  <p><a href="hole.html"> В норке</a></p>\
  <p><a href="out.html"> Наблюдает</a></p>\
  <p><a href="tail.html"> Спрятал голову в песке</a></p>\
  <p><a href="two-tails.html"> Два хвоста</a></p>\
  <p><a href="head.html"> Выглядывает из грунта</a></p>';

var menuen='\
<h4><a href="../en.html"> Aquarium</a></h4>\
<h4><a href="en.html"> Macrognatus</a></h4>\
  <p><a href="hole-en.html"> In a hole</a></p>\
  <p><a href="out-en.html"> Watches around</a></p>\
  <p><a href="tail-en.html"> Tail with eyes</a></p>\
  <p><a href="two-tails-en.html"> Two friends</a></p>\
  <p><a href="head-en.html"> Head</a></p>';

var refpath="../../../";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

