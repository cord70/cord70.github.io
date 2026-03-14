// cyber

const googleAnalyticsId = 'G-KVPFGW8RWM';
const disqusname = 'cyber-ek';

var alt = 'logo - Механизмы существования и сознания';
if ( pagelang=='en' ) alt = 'logo - Mechanisms of Consciousness and Existence';
var title = 'Механизмы <span class="hide-lt480px"> существования и сознания</span>';
if ( pagelang=='en' ) title = 'Mechanisms <span class="hide-lt480px"> of Consciousness and Existence</span>';
const logo = refpath+'images/home.gif';

function topmenu() {
    if (pagelang == 'ru') {
        var i1 = ' <a href="' + refpath + 'mind/index.html"> Природа сознания </a>';
        var i2 = ' <a href="' + refpath + 'world/index.html"> Происхождение вселенной </a>';
        var i3 = ' <a href="' + refpath + 'science/index.html"> Сложные задачи </a>';
        return i1 + i2 + i3;
    }
    else {
        var i1 = ' <a href="' + refpath + 'mind/consciousness-en.html"> Mechanisms of consciousness </a>';
        var i2 = ' <a href="' + refpath + 'world/space-en.html"> Origination of space </a>';
        return i1 + i2;
    }
}
