var menu='\
<h4> PC и программы</h4>\
  <p><a href="delta-homes.html"> Лечить delta-homes</a></p>\
  <p><a href="RemoveCrLfTabDSpace.html"> RemoveCrLfTabDSpace</a></p>\
  <p><a href="ReplaceStr.html"> ReplaceStr</a></p>\
  <p><a href="axisvideo.html"> AxisVideo видеонаблюдение</a></p>\
<h4> примеры html js css</h4>\
  <p><a href="video-mp4.html"> many videos mp4</a></p>\
  <p><a href="20video.html"> many видео youtube</a></p>\
';

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


