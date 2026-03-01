var menu='\
<h4><a href="index.html"> 		Крит			</a></h4>\
  <p><a href="greek-door.html"> 	Старинная дверь		</a></p>\
  <p><a href="sunset1.html"> 		Солнце скрывается	</a></p>\
  <p><a href="octopus-swims.html"> 	Осьминог плывёт		</a></p>\
  <p><a href="octopus-young.html"> 	Осьминожек на дне	</a></p>\
  <p><a href="tourist-ship.html"> 	Кораблик для туристов	</a></p>\
  <p><a href="plaice-in-sand.html"> 	Камбала прячется	</a></p>\
  <p><a href="sunset.html"> 		Ещё закат над морем	</a></p>\
  <p><a href="geese-at-lake.html"> 	Гуси в озере		</a></p>\
  <p><a href="sea-view.html"> 		Вид с набережной	</a></p>\
  <p><a href="retsina.html"> 		Критская Рецина		</a></p>';

var menuen='\
<h4><a href="en.html"> 			Crete			</a></h4>\
  <p><a href="greek-door-en.html"> 	Old door		</a></p>\
  <p><a href="geese-at-lake-en.html"> 	Geese at a lake		</a></p>\
  <p><a href="octopus-swims-en.html"> 	Octopus swims		</a></p>\
  <p><a href="retsina-en.html"> 	Retsina			</a></p>\
  <p><a href="tourist-ship-en.html"> 	Tourist ship		</a></p>\
  <p><a href="sea-view-en.html"> 	View of sea		</a></p>\
  <p><a href="plaice-in-sand-en.html"> 	Plaice			</a></p>\
  <p><a href="sunset-en.html"> 		Sunset			</a></p>\
  <p><a href="octopus-young-en.html"> 	Little octopus		</a></p>\
  <p><a href="sunset1-en.html"> 	Sunset ends		</a></p>';

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

