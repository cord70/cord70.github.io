var menu=
'<h4> Стихи</h4>						\
  <p><a href="omar.html">	О.Хайям об учёности</a></p>	\
  <p><a href="omar-retouch.html"> О.Хайям, любимые</a></p>	\
  <p><a href="omar-life.html">	О.Хайям о жизни</a></p>		\
  <p><a href="rubayyat.html">	Мои рубаи</a></p>		\
  <p> &nbsp;</p>						\
  <p><a href="love-me.html">	Любишь ты меня</a></p>		\
  <p><a href="sonet-0.html">	Сонет шесть строк</a></p>	';

var refpath="../";
document.head.innerHTML += '<link href="' + refpath+ 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

