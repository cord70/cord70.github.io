// переход на ../index.html
  
const Link = document.querySelector('link[rel="canonical"]');
const home= '/index.html';
var url = Link ? Link.href : null;
  
if(url!=null && url.endsWith(home))
  {
    var dir= url.slice(0, -home.length);
    dir= dir.slice(Math.max(dir.lastIndexOf('.'), dir.lastIndexOf('/'))+1);
    url= window.location.href;     
    if(url.endsWith('/'))	url= url.slice(0, -1);
    if(url.endsWith(dir))	window.location.href= url+home; 
  }

