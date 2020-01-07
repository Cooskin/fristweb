if (localStorage.getItem('HX191110_traget') == null) {
    location.hred = 'mdd.html';
}
var traget = JSON.parse(localStorage.getItem('HX191110_traget'));

var oCrumb = document.getElementsByClassName('crumb')[0];
var oDiv = oCrumb.getElementsByTagName('div')[0];

for (let i = 0; i < traget.length - 1; i++) {
    if (traget[i] != '直辖市') {
        var oPlace = document.createElement('a');
        oPlace.innerHTML = traget[i];
        oPlace.href = 'javascript:;'
        var oSpan = document.createElement('span');
        oSpan.innerHTML = '>';
        oDiv.appendChild(oPlace);
        oDiv.appendChild(oSpan);
    }
}
oCrumb.lastElementChild.innerHTML = traget[traget.length - 1];

var oNavLi = document.getElementsByClassName('nav_wraper')[0].getElementsByTagName('li');
var enName = document.getElementsByClassName('info')[0].lastElementChild;
var oTitle = document.getElementsByTagName('h1')[0];
if (traget.length == 3) {
    if (traget[2] != '直辖市') {
        oTitle.innerHTML = traget[2];
    }
} else {
    oTitle.innerHTML = oCrumb.lastElementChild.innerHTML;
    oNavLi[1].className = 'hidden';
    oNavLi[2].className = '';

}

var oImage = document.getElementsByClassName('img')[0].firstElementChild;

var imageWraper = document.getElementsByClassName('images_wraper')[0];
var bigImg = imageWraper.getElementsByClassName('big_image')[0];
var smallImg = imageWraper.getElementsByClassName('small_image');
var bigImgStr = '';
var smallImgStr = '';

for (let i = 0; i < cityArr.length; i++) {
    if (cityArr[i].name == oTitle.innerHTML) {
        enName.innerHTML = cityArr[i].enName;
        oImage.innerHTML = cityArr[i].img;

        for (let j = 0; j < picArr.length; j++) {
            if (cityArr[i].idz == picArr[j].idz) {

                bigImgStr += picArr[j].bigImg + `<div class="info_show">
                <h5>` + picArr[j].name + `</h5>
                <p>` + picArr[j].text + `</p>
                </div> `;
                bigImg.innerHTML = bigImgStr;

                smallImgStr += picArr[j].smallImg + `<div class="info_show">
                <h5>` + picArr[j].name + `</h5>
                <p>` + picArr[j].text + `</p>
                </div> `;

                for (let k = 0; k < smallImg.length; k++) {
                    smallImg[k].innerHTML = smallImgStr;
                }
            }
        }
    }
}

for (let i = 0; i < pArr.length; i++) {
    if (pArr[i].name == oTitle.innerHTML) {
        enName.innerHTML = pArr[i].enName;
        oImage.innerHTML = pArr[i].img;

        for (let j = 0; j < cityArr.length; j++) {
            if (pArr[i].idx == cityArr[j].idx) {
                for (let m = 0; m < picArr.length; m++) {
                    if (picArr[m].idz == cityArr[j].idz) {

                        if (num == 1) {
                            break;
                        }

                        bigImgStr += picArr[m].bigImg + `<div class="info_show">
                            <h5>` + picArr[m].name + `</h5>
                            <p>` + picArr[m].text + `</p>
                            </div> `;
                        bigImg.innerHTML = bigImgStr;

                        smallImgStr += picArr[m].smallImg + `<div class="info_show">
                            <h5>` + picArr[m].name + `</h5>
                            <p>` + picArr[m].text + `</p>
                            </div> `;

                        for (let k = 0; k < smallImg.length; k++) {
                            smallImg[k].innerHTML = smallImgStr;
                        }
                        var num = 1;
                    }
                }
            }
        }
    }
}