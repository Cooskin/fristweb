var oBanner = document.getElementById('banner');
var oBannerImg = oBanner.getElementsByClassName('banner_img')[0];
var oBannerNav = oBanner.getElementsByClassName('banner_nav')[0];
var aImgLi = oBannerImg.children;
var aNavLi = oBannerNav.children;

var bannerNum = 0;
setInterval(function() {
    bannerNum++;
    if (bannerNum >= aImgLi.length) {
        bannerNum = 0;
    }
    banner();
}, 3000)

function banner() {
    for (var i = 0; i < aNavLi.length; i++) {
        aNavLi[i].className = '';
        aImgLi[i].className = '';
    }
    aNavLi[bannerNum].className = 'activ';
    aImgLi[bannerNum].className = 'dis';
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
}