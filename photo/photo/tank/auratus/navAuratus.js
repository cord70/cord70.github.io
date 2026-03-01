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

