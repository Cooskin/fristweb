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
            if (aDt.innerHTML == '直辖市') {
                aDt.style.cursor = 'default';
            }
            city(aDt);

            aDl.appendChild(aDt);

            for (let k = 0; k < cityArr.length; k++) {
                if (cityArr[k].idx == pArr[j].idx) {
                    var aDd = document.createElement('dd');
                    aDd.innerHTML = cityArr[k].name;
                    city(aDd);
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

// 鼠标移入打印
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


// 页面默认展示
prinMonth(month[0].index);
prinMonth(theme[0].index);

function prinMonth(type) {

    let str = '';
    var monthNum = 0;
    var themeNum = 0;

    for (let i = 0; i < cityArr.length; i++) {

        if (type == cityArr[i].month) {
            str += `<a class="main1" index = ` + cityArr[i].idz + `  href="javascript:;">` + cityArr[i].img + `<div>` + cityArr[i].name + `</div></a>`;

            content_main[0].innerHTML = str;

            var main1 = document.getElementsByClassName('main1');
            target(main1, i)

            monthNum++;
            if (monthNum == 3) {
                return;
            }
        }

        if (type == cityArr[i].theme) {

            str += `<a class="main2" index = ` + cityArr[i].idz + ` href="javascript:;">` + cityArr[i].img + `<div>` + cityArr[i].name + `</div></a>`;

            content_main[1].innerHTML = str;

            var main2 = document.getElementsByClassName('main2');
            target(main2, i)

            themeNum++;

            if (themeNum == 4) {
                return;
            }

        }
    }
}
// kai()

function city(obj) {

    obj.onclick = function() {
        var target = [];
        for (let m = 0; m < plecList.length; m++) {
            if (plecList[m].className == 'mdd_activ') {
                target.push((plecList[m].innerHTML));
            }
        }

        if (this != this.parentNode.firstElementChild) {
            if (this.parentNode.firstElementChild.innerHTML == '直辖市') {
                target.push(this.innerHTML);
            } else {
                target.push(this.parentNode.firstElementChild.innerHTML);
                target.push(this.innerHTML);
            }
        } else {
            if (this.innerHTML == '直辖市') {
                return
            }
            target.push(this.innerHTML);
        }

        localStorage.setItem('HX191110_traget', JSON.stringify(target));
        location.href = 'mdd_dateils.html';

    }
}

function target(obj, i) {
    for (let j = 0; j < obj.length; j++) {
        obj[j].onclick = function() {
            var target = [];
            for (let k = 0; k < pArr.length; k++) {
                if (pArr[k].idx == cityArr[i].idx) {
                    for (let l = 0; l < navArr.length; l++) {
                        if (pArr[k].idn == navArr[l].idn) {
                            target.push(navArr[l].name);
                        }
                    }
                    target.push(pArr[k].name);
                }

            }
            target.push(this.lastChild.innerHTML);

            localStorage.setItem('HX191110_traget', JSON.stringify(target))

            location.href = 'mdd_dateils.html';
        }
    }
}