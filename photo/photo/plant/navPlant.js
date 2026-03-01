var menu='\
<h4><a href="index.html"> Растения</a></h4>\
  <p><a href="spring-2003.html"> Веточка ивы</a></p>\
  <p><a href="young-leaf.html"> Молодой листок</a></p>\
  <p><a href="cranberries.html"> Клюква развесистая</a></p>\
  <p><a href="pine-tree.html"> Широкая сосна</a></p>\
  <p><a href="maple-leaflet.html"> Кленовый лист</a></p>\
  <p><a href="fungus.html"> Грибы на дереве</a></p>\
  <p><a href="frosty-fir.html"> Иней на иголках</a></p>\
<h4><a href="../blossom/index.html"> Цветы</a></h4>';

var menuen='\
<h4><a href="en.html"> Plant</a></h4>\
  <p><a href="fungus-en.html"> Bad fungus</a></p>\
  <p><a href="maple-leaflet-en.html"> Maple leaf</a></p>\
  <p><a href="frosty-fir-en.html"> Frosty fir</a></p>\
  <p><a href="pine-tree-en.html"> Wide pine</a></p>\
  <p><a href="spring-2003-en.html"> Birch branchlet</a></p>\
  <p><a href="young-leaf-en.html"> Five leaflets</a></p>\
  <p><a href="cranberries-en.html"> Cranberries</a></p>\
<h4><a href="../blossom/en.html"> Flower</a></h4>';

var refpath="../../";

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

