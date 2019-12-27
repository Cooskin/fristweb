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
    for (var i = 0; i < aNavLi.length; i++) {
        aNavLi[i].className = '';
        aImgLi[i].className = '';
    }
    aImgLi[bannerNum].className = 'dis';
    aNavLi[bannerNum].className = 'activ';
}
for (var i = 0; i < aNavLi.length; i++) {
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