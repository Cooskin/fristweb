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

function travels(image, title, text, country, userImage, userName, view, ding) {
    this.image = image;
    this.title = title;
    this.text = text;
    this.country = country;
    this.userImage = userImage;
    this.userName = userName;
    this.view = view;
    this.ding = ding;
}
var travels1 = new travels(
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '20/11',
    0
);
var travels2 = new travels(
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '500/11',
    1
);
var travels3 = new travels(
    '<img src="./images/content/travels.jpg" alt="">',
    '美国旧金山大桥',
    '炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！炸了炸了！心态爆炸了！',
    `美国`,
    `<img src="./images/content/travels.jpg" alt="">`,
    '心态爆炸',
    '250/11',
    3
);
var travelsArr = [travels1, travels2, travels3];

var oldTravelsArr = JSON.stringify(travelsArr);
var newTravelsArr = JSON.parse(localStorage.getItem('HX191110_travelsArr'));
localStorage.setItem('HX191110_travelsArr', oldTravelsArr);

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

function newArr(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {

    }
}
console.log(bubbleSort(travelsArr))
rintingTravels(bubbleSort(newTravelsArr), newTravelsArr);

function rintingTravels(arr, newArr) {
    var ravelsStr = '';
    if (aTravelsLi[0].className == 'activ') {

        for (let i = 0; i < arr.length; i++) {
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
        <a class="ding_btn" href="javascript:;"></a>
    </li>`
        }
        aUl.innerHTML = ravelsStr;
    } else {

        for (let i = newArr.length - 1; i >= 0; i--) {
            ravelsStr += `<li>
        <a class="travels_img" href="javascript:;">` + newArr[i].image + `</a>
        <h3>
            <a href="javascript:;">` + newArr[i].title + `</a>
        </h3>
        <p>
            <a href="javascript:;">` + newArr[i].text + `</a>
        </p>
        <a class="place" href="javascript:;">` + newArr[i].country + `</a><em>，by</em>
        <a class="user_img" href="javascript:;">` + newArr[i].userImage + `</a>
        <a class="user_name" href="javascript:;">` + newArr[i].userName + `</a>
        <a class="page_view" href="javascript:;">` + newArr[i].view + `</a>
        <a class="ding" href="javascript:;">` + newArr[i].ding + `</a>
        <a class="ding_btn" href="javascript:;"></a>
    </li>`
        }
        aUl.innerHTML = ravelsStr;
    }

}

// var hotTravelsArr =
for (let i = 0; i < aTravelsLi.length; i++) {
    aTravelsLi[i].onclick = function() {
        for (let j = 0; j < aTravelsLi.length; j++) {
            aTravelsLi[j].className = '';
        }
        this.className = 'activ';
        rintingTravels(bubbleSort(newTravelsArr), newTravelsArr);
    }
}