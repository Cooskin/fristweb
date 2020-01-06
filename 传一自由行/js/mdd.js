var mddNav = document.getElementsByClassName('mdd_nav');
var plecList = mddNav[0].getElementsByTagName('a');
var hot_mdd_content = document.getElementsByClassName('hot_mdd_content')[0];
var city_wrap = hot_mdd_content.getElementsByClassName('city_wrap');
var str = '';
for (let i = 0; i < navArr.length; i++) {
    plecList[i].innerHTML = navArr[i].name;
    plecList[i].idn = navArr[i].idn;
    plecList[i].onmouseover = function() {

        for (let j = 0; j < navArr.length; j++) {
            plecList[j].className = '';
        }

        this.className = 'mdd_activ';
        city_wrap[0].innerHTML = '';
        city_wrap[1].innerHTML = '';

        prinPlace(this.idn);
    }
}

prinPlace(navArr[0].idn)

function prinPlace(idn) {
    var num = 0;

    for (let j = 0; j < pArr.length; j++) {

        if (idn == pArr[j].idn) {

            var aDl = document.createElement('dl');
            var aDt = document.createElement('dt');

            aDt.innerHTML = pArr[j].name;
            aDl.idx = pArr[j].idx;
            aDl.appendChild(aDt);

            for (let k = 0; k < cityArr.length; k++) {
                if (cityArr[k].idx == pArr[j].idx) {
                    var aDd = document.createElement('dd');
                    aDd.style.cursor = 'pointer';
                    aDd.innerHTML = cityArr[k].name;
                    aDl.appendChild(aDd);
                }

            }

            if (num == 2) {
                num = 0;
            }

            city_wrap[num].appendChild(aDl);

            num++
        }
    }
}

var month = mddNav[1].getElementsByTagName('a');
var theme = mddNav[2].getElementsByTagName('a');
var content_main = document.getElementsByClassName('content_main');

prin(month, 'month');
prin(theme, 'theme');

function prin(obj, type) {
    for (let i = 0; i < obj.length; i++) {

        obj[i].index = obj[i].innerHTML;
        obj[i].onmouseover = function() {

            for (let j = 0; j < obj.length; j++) {
                obj[j].className = '';
            }
            this.className = 'mdd_activ';

            if (type == 'month') {
                prinMonth(this.index, 'month');
            } else {
                prinMonth(this.index, 'theme');
            }

        }
    }
}
prinMonth(month[0].index);
prinMonth(theme[0].index);

function prinMonth(index) {

    let str = '';
    var monthNum = 0;
    var themeNum = 0;

    for (let i = 0; i < cityArr.length; i++) {

        if (index == cityArr[i].month) {
            str += `<a class="main1" href="javascript:;">` + cityArr[i].img + `
                <div>` + cityArr[i].name + `</div>
                </a>`;

            monthNum++;


            content_main[0].innerHTML = str;
            if (monthNum == 3) {
                return;
            }
        }

        if (index == cityArr[i].theme) {

            str += `<a class="main2" href="javascript:;">` + cityArr[i].img + `
                <div>` + cityArr[i].name + `</div>
                </a>`;

            themeNum++;
            content_main[1].innerHTML = str;

            if (themeNum == 4) {
                return;
            }
        }


    }

}