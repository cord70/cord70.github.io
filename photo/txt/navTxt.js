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

var metaViewport = document.createElement('meta');
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.head.appendChild(metaViewport);

var linkFavicon = document.createElement('link');
linkFavicon.rel = "icon";
linkFavicon.sizes = "any";
linkFavicon.type = "image/svg+xml";
linkFavicon.href = refpath + "images/favicon.svg";
document.head.appendChild(linkFavicon);

var linkStyles = document.createElement('link');
linkStyles.rel = "stylesheet";
linkStyles.href = refpath + "images/main.css";
document.head.appendChild(linkStyles);


script0 = document.createElement('script');
script0.src = refpath + 'images/photo.js';
script0.defer = true;
document.head.appendChild(script0);

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

