var menu=
'<h4><a href="index.html"> Поиск конструкции ощущающей машины</a></h4>\
  <p><a href="sense.html"> Природа мышления</a></p>\
  <p><a href="task.html"> Искусственный мозг</a></p>\
  <p><a href="algorithm.html"> Алгоритм самообучения</a></p>';

var refpath="../";
document.head.innerHTML += '<link href="' + refpath + 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

