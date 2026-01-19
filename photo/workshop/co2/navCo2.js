var menu='\
<h4> CO2 для аквариума</h4>\
  <p><a href="experiment-co2.html"> Опыты с CO2</a></p>\
  <p><a href="index.html"> Генератор CO₂</a></p>';

var refpath="../../";
document.head.innerHTML += '<link href="' + refpath+ 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);


