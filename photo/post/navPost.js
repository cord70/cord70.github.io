var menu='\
<h4> сайт cord70.github.io/photo</h4>\
  <p><a href="../workshop/site.html"> Об этом сайте</a></p>\
  <p><a href="../search.html"> Поиск по сайту</a></p>\
  <p><a href="email-en.html"> English page</a></p>';

var menuen='\
<h4> the site cord70.github.io/photo</h4>\
  <p><a href="../search-en.html"> Search at this site</a></p>\
  <p><a href="index.html"> Русская страница</a></p>';

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

