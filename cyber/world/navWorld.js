var menu='\
<h4> Происхождение вселенной</h4>\
  <p><a href="space.html"> Происхождение пространства</a></p>\
  <p><a href="self-support.html"> Самодостаточные объекты существуют?</a></p>\
  <p><a href="existence.html"> Почему вообще что-то существует</a></p>\
<h4><a href="davies/index.html"> P.Davies "Суперсила"</a></h4>';

var menuen='\
<h4> Mechanisms of consciousness</h4>\
  <p><a href="../mind/danger-en.html"> Dangerously intelligent</a></p>\
  <p><a href="../mind/prove-en.html"> Consciousness and Logic</a></p>\
  <p> &nbsp;</p>\
<h4> Origination of space</h4>\
  <p><a href="existence-en.html"> Why is existence possible</a></p>';

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
script0.src = refpath + 'images/cyber.js';
script0.defer = true;
document.head.appendChild(script0);

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);
