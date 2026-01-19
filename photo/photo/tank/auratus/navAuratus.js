var menu='\
<h4><a href="../index.html"> Аквариум</a></h4>\
<h4><a href="index.html"> Ауратус</a></h4>\
  <p><a href="male.html"> Ауратус самец</a></p>\
  <p><a href="female.html"> Молодой Ауратус</a></p>\
  <p><a href="female-mature.html"> Ауратус, самка</a></p>\
  <p><a href="auratus.html"> Умный ауратус</a></p>';

var menuen='\
<h4><a href="../en.html"> Aquarium</a></h4>\
<h4><a href="en.html"> Auratus</a></h4>\
  <p><a href="auratus-en.html"> Little</a></p>\
  <p><a href="female-en.html"> Young</a></p>\
  <p><a href="female-mature-en.html"> Female</a></p>\
  <p><a href="male-en.html"> Male</a></p>';

var refpath="../../../";
document.head.innerHTML += '<link href="' + refpath+ 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

