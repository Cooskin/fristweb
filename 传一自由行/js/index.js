var oBanner = document.getElementById('banner');
var oBannerImg = oBanner.getElementsByClassName('banner_img')[0];
var oBannerNav = oBanner.getElementsByClassName('banner_nav')[0];
var aImgLi = oBannerImg.children;
var aNavLi = oBannerNav.children;

for (var i = 0; i < aNavLi.length; i++) {
    aNavLi[i].index = i;
    aNavLi[i].onclick = function() {
        for (var j = 0; j < aNavLi.length; j++) {
            aNavLi[j].className = '';
            aImgLi[j].className = '';
        }
        this.className = 'activ';
        aImgLi[this.index].className = 'activ';
    }
}