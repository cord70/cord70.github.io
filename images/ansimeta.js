// photo cyber tarmo fabrika

// lazy counters
let scrollDone = false;
function onLazyScroll() {
    if (!scrollDone) {
        scrollDone = true; if (!navigator.onLine) return;

        // google analytics
        setTimeout(function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', googlecounter);
            var s = document.createElement("script");
            s.src = 'https://www.googletagmanager.com/gtag/js?id=' + googlecounter;
            s.async = true;
            document.body.appendChild(s);
        }, 200); // 200ms после scroll
    }
}
addScrollEvent(onLazyScroll);


const pathName = window.location.pathname; // путь внутри домена например /txt/love-me.html
const fileName = pathName.split("/").pop(); // имя файла например love-me.html
let indexPage = 'index.html';
let comments = 'Комментарии';
let emailPage = 'post/index.html';
let emailTitle = 'автор';
let pagelang = document.getElementsByTagName('html')[0].lang; // maybe undefined
if (pagelang == 'en') {
    alt = alt_en; // from menu.js
    title = title_en; // from menu.js
    indexPage = 'en.html';
    comments = 'Comments';
    emailPage = 'post/email-en.html';
    emailTitle = 'author';
} else pagelang = 'ru';

const authors = document.getElementsByName('author');
let author = '';
if (authors.length > 0) author = authors[0].content;


// определение относительного адреса и пути
 const pathlevel =  refpath.split("/").filter(Boolean).length; // число слешей
 let refurl = window.location.pathname; // /photo/underwater/coral/index.html адрес относительно домена
 if (refurl[refurl.length - 1] == '/') refurl = refurl + indexPage; // endsWith() for IE
 while(refurl.split("/").filter(Boolean).length>pathlevel+1) refurl=refurl.substring(1); // /photo/flame/candle.html
 refurl=refurl.substring(1); // photo/flame/candle.html

header();
navstring();
footer();
includeMenu();


//-------------------------------------------
// функции
function header() {
    var headers = document.body.getElementsByTagName('header');
    if (headers.length > 0) {
        var h0 = headers[0];
        var html = h0.innerHTML.replace(/\s*/g, ''); // удаление пробелов

        if (html.length == 0) // если header пустой
            h0.outerHTML =
                '<header>' +
                '<p id="navstring"> </p> '+

                //'<span class="hide-lt480px"><a href="' + refpath + indexPage + '">' +
                //'<img src="' + logo + '" alt="' + alt + '" width="76" height="27"></a></span> ' +
                //'<span class="big"><a href="' + refpath + indexPage + '">' + title + '</a></span>' +

                '<nav><p class="hide-lt480px">' + removeSelfRef(topmenu()) + '</p></nav>' +
                '</header>';
    }
}


function footer() {
    var footers = document.body.getElementsByTagName('footer');
    if (footers.length > 0) {
        var prevnext = '<nav class="foot1 sel"><p id="prev"></p><p id="next"></p></nav>';

        var lastnav = '';
        if (author != '')
            lastnav = '<nav class="foot1" ><a rel="author" title="' +
                emailTitle + '" href="' + refpath + emailPage + '">' + author + '</a></nav>';

        footers[0].outerHTML = '<footer> ' + prevnext + lastnav + ' </footer>';
    }
}

function navstring() {//вывод навигации в виде строки
    var menu = document.getElementById('navstring');
    if (!menu) return;

    var html = '';
    var pageadr = refurl;
    var pagetitle;
    var p1 = 0;
    do {
        if (pagetitle != 'images' && pagetitle != '600' && pagetitle != '200')
            if (html == '')
                html = document.title;
            else
                html = ' <a href="' + refpath + pageadr + '/' + indexPage + '">' + pagetitle + '►</a>' + html;
        p1 = pageadr.lastIndexOf('/');
        pageadr = pageadr.substring(0, p1);
        var p2 = pageadr.lastIndexOf('/');
        pagetitle = pageadr.substring(p2 + 1); // имя директории
    } while (p1 >= 0);

    html = '<a href="' + refpath + indexPage + '">' +
        '<img src="' + logo + '" alt="ref to home page" title="home page"></a> ' + html;

    menu.outerHTML = '<nav><p class="hide-lt480px">' + html + '</p></nav>';
}


// disqus
const chat = document.getElementById('disqus_thread');
let disqusLoaded = false;
if (chat) {
    insertBeforeend(chat, '<div class="center"><button class="big" onclick="loadDisqus();">' +
        comments + '...</button></div>'); // на случай если не работает scroll	
    function onDisqusScroll(e) {
        // scrollingElement.scrollTop не работает в ie8
        var currentScroll = document.documentElement.scrollTop;
        if (!disqusLoaded && (currentScroll > chat.getBoundingClientRect().top - 100)) loadDisqus();
    }
    addScrollEvent(onDisqusScroll);

}
function loadDisqus() {
    disqusLoaded = true;
    window.disqus_config = function () {
        this.page.url = chat.getAttribute('data-url');
        this.page.identifier = chat.getAttribute('data-id');
    };
    var s = document.createElement('script');
    s.setAttribute('data-timestamp', +new Date());
    s.async = true; // чтобы страница не повисла на время загрузки
    s.src = 'https://' + disqusname + '.disqus.com/embed.js';
    (document.head || document.body).appendChild(s);
    insertBeforebegin(chat, '<h2 class="foot1">' + comments + '</h2>');
}


function addScrollEvent(func) {
    if (window.addEventListener) window.addEventListener('scroll', func, false);
    else if (window.attachEvent) window.attachEvent('onscroll', func);
    else window['scroll'] = func;
}


function insertBeforeend(elem, htmlText) { elem.insertAdjacentHTML('beforeend', htmlText); }
function insertBeforebegin(elem, htmlText) { elem.insertAdjacentHTML('beforebegin', htmlText); }


function show() { // отладочная функция, показываем строки в конце страницы
    var str = '<p>debug_output: ' + show.caller.name + '<br>';
    for (var i = 0; i < arguments.length; i++)
        str += '<span class="big"> ' + arguments[i] + '</span><br>';
    var body = document.getElementsByTagName('body')[0];
    if (body) insertBeforeend(body, str);
}


function includeMenu() {
    var m = document.getElementById('menu'); if (!m) return;

    if (pagelang == 'en') menu = menuen;

    var links = menu.match(new RegExp(/<a.*?a>/g)); // '<a href="omar.html"> Омар Хайям</a>'

    // ищем предыдущую и следующую ссылку
    for (var i = 0; i < links.length; i++)
        if (links[i].indexOf('"' + fileName + '"') > 0) {
            if (i > 0) {
                var prev = document.getElementById('prev');
                if (prev) prev.outerHTML = '<p class="left"> ◄ ' + links[i - 1] + '</p>';
            }
            if (i < links.length - 1) {
                var next = document.getElementById('next');
                if (next) next.outerHTML = '<p class="right">' + links[i + 1] + ' ► </p>';
            }
            break;
        }

    var nav = document.createElement('nav'); nav.className = 'leftnav';
    nav.innerHTML = removeSelfRef(menu);
    m.appendChild(nav);
}


function removeSelfRef(menu) {
    if (pathName == '/' + fileName) // для страницы index.html
        return menu;

    // находим строку со ссылкой на себя
    var linkPage = new RegExp('<a href="' + fileName + '">(.*?)</a>'); 
    var link = menu.match(linkPage); // найденный текст
    if (link == null) // для topmenu требуется алгоритм
        return menu;

    // убираем ссылку на себя, оставляем текст
    return menu.replace(linkPage, '<span class="white">' + '$1' + '</span>');
}