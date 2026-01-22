var menu='\
<h4><a href="index.html"> Птицы</a></h4>\
  <p><a href="flamingo.html"> Розовые фламинго</a></p>\
  <p><a href="sparrow-family.html"> Воробьиная семья</a></p>\
  <p><a href="sparrow-build-nest.html"> Воробьи строят гнездо</a></p>\
  <p><a href="eagle-eye.html"> Орёл философ</a></p>\
  <p><a href="eagle-flight.html"> Орёл взлетает</a></p>\
  <p><a href="ostrich.html"> Страус</a></p>\
  <p><a href="eagle-face.html"> Хищник вроде совы</a></p>\
  <p><a href="pigeon.html"> Голубь на балконе</a></p>\
  <p><a href="sparrow-side.html"> Три воробья</a></p>\
<h4><a href="../animal/index.html"> Другие животные</a></h4>';

var menuen='\
<h4><a href="en.html"> Birds</a></h4>\
  <p><a href="flamingo-en.html"> Rose flamingo</a></p>\
  <p><a href="sparrow-family-en.html"> Sparrow family</a></p>\
  <p><a href="sparrow-build-nest-en.html"> Sparrows build nest</a></p>\
  <p><a href="pigeon-en.html"> Pigeon</a></p>\
  <p><a href="eagle-eye-en.html"> An eagle watches us</a></p>\
  <p><a href="eagle-face-en.html"> A bird</a></p>\
  <p><a href="eagle-flight-en.html"> Eagle at flight</a></p>\
  <p><a href="ostrich-en.html"> Ostrich</a></p>\
  <p><a href="sparrow-side-en.html"> Three sparrows</a></p>\
<h4><a href="../animal/en.html"> Other animals</a></h4>';

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

