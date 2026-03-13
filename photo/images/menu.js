// photo

const googlecounter = 'G-EZW0R402XT';
const disqusname = 'photo-ek';

var alt = 'logo - Фотографии и хобби Е Корниенко';
if ( pagelang=='en' ) alt = 'logo - photo and hobby E Kornienko';
var title = '<span class="hide-lt480px">Домашняя</span> страничка Е.Корниенко';
if ( pagelang=='en' ) title = 'E.Kornienko <span class="hide-lt480px">home</span> page';
const logo = refpath+'images/photohome.png';

function topmenu() { 
    if (pagelang == 'ru') {
        var i1 = ' <a href="' + refpath + 'photo/index.html"> Фото </a>';
        var i2 = ' <a href="' + refpath + 'photo/red-sea/index.html"> На Красном море </a>';
        var i3 = ' <a href="' + refpath + 'photo/underwater/index.html"> Плаваем с маской </a>';
        var i4 = ' <a href="' + refpath + 'workshop/index.html"> Самоделки </a>';
        var i5 = ' <a href="' + refpath + 'txt/poem.html"> Стихи </a>';
        return i1 + i2 + i3 + i4 + i5;
    }
    else {
        var i1 = ' <a href="' + refpath + 'photo/en.html"> Photo </a>';
        var i2 = ' <a href="' + refpath + 'photo/red-sea/en.html"> At Red Sea </a>';
        var i3 = ' <a href="' + refpath + 'photo/underwater/en.html"> Swimming with mask </a>';
        var i4 = ' <a href="' + refpath + 'workshop/en.html"> Homemade </a>';
        return i1 + i2 + i3 + i4;
    }
}

// alt alt_en title title_en logo pagelang refpath topmenu - are used in ansimeta