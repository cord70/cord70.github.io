var menu='\
<h4> сайт cord70.github.io/cyber</h4>\
  <p><a href="site.html"> Об этом сайте</a></p>\
  <p><a href="index.html"> Письмо автору</a></p>\
  <p><a href="email-en.html"> English page</a></p>';

var menuen='\
<h4> the site cord70.github.io/cyber</h4>\
  <p><a href="email-en.html"> Author</a></p>\
  <p><a href="index.html"> Русская страница</a></p>';

var refpath="../";
document.head.innerHTML += '<link href="' + refpath + 'images/main.css" rel="stylesheet">';
script1 = document.createElement('script');
script1.src = refpath + 'images/ansimeta.js';
script1.defer = true;
document.head.appendChild(script1);

