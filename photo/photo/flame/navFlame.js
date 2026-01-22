var menu='\
<h4><a href="index.html"> Огонь</a></h4>\
  <p><a href="candle.html"> Пламя свечи</a></p>\
  <p><a href="hot-flame.html"> Ровное горение спички</a></p>\
  <p><a href="match-sparks.html"> Спичка разгорается</a></p>\
<h4><a href="../water/index.html"> Вода</a></h4>\
<h4><a href="../view/index.html"> Пейзаж</a></h4>';

var menuen='\
<h4><a href="en.html"> Flame</a></h4>\
  <p><a href="match-sparks-en.html"> Match starts burning</a></p>\
  <p><a href="candle-en.html"> Wax candle</a></p>\
  <p><a href="hot-flame-en.html"> Calm burning</a></p>\
<h4><a href="../water/en.html"> Water</a></h4>\
<h4><a href="../view/en.html"> View</a></h4>';

var refpath="../../";
document.head.innerHTML += '\
<meta content="width=device-width, initial-scale=1" name="viewport">\n\
<link href="' + refpath + 'images/favicon.svg" rel="icon" sizes="any" type="image/svg+xml">\n\
<link href="' + refpath + 'images/main.css" rel="stylesheet">';

script0 = document.createElement('script');
script0.src = refpath + 'images/photo.js';
script0.defer = true;
document.head.appendChild(script0);

script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);


//var refurl="photo/flame/"+window.location.pathname.split("/").pop();

//alert(refurl);
