var oBanner = document.getElementById('banner');
var oBannerImg = oBanner.getElementsByClassName('banner_img')[0];
var oBannerNav = oBanner.getElementsByClassName('banner_nav')[0];
var aImgLi = oBannerImg.children;
var aNavLi = oBannerNav.children;

// 轮播图
var bannerNum = 0;
var timer;

bannerOn();

function bannerOn() {
    timer = setInterval(function() {
        bannerNum++;
        if (bannerNum >= aImgLi.length) {
            bannerNum = 0;
        }
        banner();
    }, 3000)
}

function banner() {
    for (let i = 0; i < aNavLi.length; i++) {
        aNavLi[i].className = '';
        aImgLi[i].className = '';
    }
    aImgLi[bannerNum].className = 'dis';
    aNavLi[bannerNum].className = 'activ';
}
for (let i = 0; i < aNavLi.length; i++) {
    aNavLi[i].index = i;
    aNavLi[i].onclick = function() {
        for (var j = 0; j < aNavLi.length; j++) {
            aNavLi[j].className = '';
            aImgLi[j].className = '';
        }
        this.className = 'activ';
        aImgLi[this.index].className = 'dis';
        bannerNum = this.index
    }

    oBanner.onmouseover = function() {
        clearInterval(timer);
    }

    oBanner.onmouseout = function() {
        clearInterval(timer);
        bannerOn();
    }

}

// 游记
var travelsBtn = document.getElementById('travels_head');
var aTravelsLi = travelsBtn.getElementsByTagName('li');
var oDingBtn;

function travels(ravelsId, image, title, text, country, userImage, userName, view, ding, arr) {
    this.ravelsId = ravelsId;
    this.image = image;
    this.title = title;
    this.text = text;
    this.country = country;
    this.userImage = userImage;
    this.userName = userName;
    this.view = view;
    this.ding = ding;
    this.oArr = arr;
}
var travels1 = new travels(
    `1`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '20/11',
    0, []
);
var travels2 = new travels(
    `2`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '500/11',
    1, []
);
var travels3 = new travels(
    `3`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    3, []
);
var travels4 = new travels(
    `4`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    10, []
);
var travels5 = new travels(
    `5`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    0, []
);
var travels6 = new travels(
    `6`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    3, []
);
var travels7 = new travels(
    `7`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    1, []
);
var travels8 = new travels(
    `8`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    12, []
);
var travels9 = new travels(
    `9`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    20, []
);
var travels10 = new travels(
    `10`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    1, []
);
var travels11 = new travels(
    `11`,
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    6, []
);

var travelsArr = [travels1, travels2, travels3, travels4, travels5, travels6, travels7, travels8, travels9, travels10, travels11];

if (localStorage.getItem('HX191110_travelsArr') == null) {
    var oldTravelsArr = JSON.stringify(travelsArr);
    localStorage.setItem('HX191110_travelsArr', oldTravelsArr);
}


var oInfo = document.getElementsByClassName('travels')[0];
var aUl = oInfo.getElementsByTagName('ul')[0];
var aLi = aUl.getElementsByTagName('li');

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j].ding < arr[j + 1].ding) { //相邻元素两两对比
                var temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function newTravels(arr) {
    var newArr = [];
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
}

var rintingTravelsArr = JSON.parse(localStorage.getItem('HX191110_travelsArr'));
var newAry = newTravels(rintingTravelsArr);

var sort = bubbleSort(rintingTravelsArr);
rintingTravels(1, sort);

function rintingTravels(page, arr) {
    var ravelsStr = '';
    var min = (page - 1) * 3;
    var max = page * 3;
    if (max > arr.length) {
        max = arr.length;
    }

    for (let i = min; i < max; i++) {
        ravelsStr += `<li>
        <a class="travels_img" href="javascript:;">` + arr[i].image + `</a>
        <h3>
            <a href="javascript:;">` + arr[i].title + `</a>
        </h3>
        <p>
            <a href="javascript:;">` + arr[i].text + `</a>
        </p>
        <a class="place" href="javascript:;">` + arr[i].country + `</a><em>，by</em>
        <a class="user_img" href="javascript:;">` + arr[i].userImage + `</a>
        <a class="user_name" href="javascript:;">` + arr[i].userName + `</a>
        <a class="page_view" href="javascript:;">` + arr[i].view + `</a>
        <a class="ding" href="javascript:;">` + arr[i].ding + `</a>
        <a class="ding_btn" index = ` + arr[i].ravelsId + ` href="javascript:;"></a>
        </li>`
    }
    aUl.innerHTML = ravelsStr;
    oDingBtn = oInfo.getElementsByClassName('ding_btn');

    // 
    for (let i = 0; i < oDingBtn.length; i++) {

        oDingBtn[i].onclick = function() {
            if (localStorage.getItem('HX191110_log') == null) {
                alert('您还没有登录，不能点赞');
                return;
            }
            for (let j = 0; j < arr.length; j++) {
                if (this.getAttribute('index') == arr[j].ravelsId) {
                    if (arr[j].oArr.length == 0) {
                        arr[j].oArr.push(localStorage.getItem('HX191110_log'))
                        arr[j].ding += 1;
                        localStorage.setItem('HX191110_travelsArr', JSON.stringify(rintingTravelsArr))
                        this.previousElementSibling.innerHTML = arr[j].ding;
                    } else {
                        for (let k = 0; k < arr[k].oArr.length; k++) {

                            if (arr[j].oArr[k] == localStorage.getItem('HX191110_log')) {
                                alert('您以点过了哟')
                                return;
                            }
                        }
                        arr[i].oArr.push(localStorage.getItem('HX191110_log'));
                        arr[i].ding += 1;
                        localStorage.setItem('HX191110_travelsArr', JSON.stringify(rintingTravelsArr))
                        this.previousElementSibling.innerHTML = arr[i].ding;


                    }
                }
            }
        }
    }
}

function abc(arr) {

}
for (let i = 0; i < aTravelsLi.length; i++) {
    aTravelsLi[i].onclick = function() {
        for (let j = 0; j < aTravelsLi.length; j++) {
            aTravelsLi[j].className = '';
        }
        this.className = 'activ';
        if (aTravelsLi[0].className == 'activ') {
            rintingTravels(1, sort);
        } else {
            rintingTravels(1, newAry);
        }
    }
}
paging(rintingTravelsArr);

function paging(arr) {
    var oPage = document.getElementsByClassName('page')[0].getElementsByTagName('ul')[0];
    // 判断并计算最大的页数
    var num = 0;
    if (arr.length % 3 == 0) {
        num = arr.length / 3;
    } else {
        num = Math.ceil(arr.length / 3);
    }
    // 先清空原有的页数
    oPage.innerHTML = '';
    for (var i = 0; i < num; i++) {
        // 创造节点，形成每一个分页
        var oLi = document.createElement('li');
        // 给每一个分页标序号
        oLi.innerHTML = i + 1;

        oLi.onclick = function() {
            // console.log(oDingBtn[i])
            // oDingBtn = oInfo.getElementsByClassName('ding_btn');
            if (aTravelsLi[0].className == 'activ') {
                rintingTravels(this.innerHTML, sort);
                // abc(sort);
            } else {
                rintingTravels(this.innerHTML, newAry);
                console.log(newAry)
            }
        }

        // 将每一个分页节点追加到ul当中
        oPage.appendChild(oLi);

    }
}