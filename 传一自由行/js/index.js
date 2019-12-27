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

// 登录注册
var oLogOut = document.getElementsByClassName('login_out')[0];
var oRegister = document.getElementsByClassName('register')[0];
var loginBack = document.getElementsByClassName('content_top')[1].children[0];
var registerBack = document.getElementsByClassName('content_top')[0].children[0];
var toLogin = document.getElementsByClassName('content_bottom')[0].children[0];
var oLogin = document.getElementById('login');
var registerBtn = oLogOut.lastElementChild;
var loginBtn = oLogOut.children[3];
var toRegister = document.getElementsByClassName('content_target')[0].children[0];

// 登录注册点显示隐藏
function disClick(objBtn, obj, dis) {
    objBtn.onclick = function() {
        obj.style.display = dis;
    }
}

disClick(registerBtn, oRegister, 'block');
disClick(registerBack, oRegister, 'none');
disClick(loginBtn, oLogin, 'block');
disClick(loginBack, oLogin, 'none');

// 登录注册页面切换
targetClick(toLogin, oLogin, oRegister);
targetClick(toRegister, oRegister, oLogin);

function targetClick(btn, block, none) {
    btn.onclick = function() {
        block.style.display = 'block';
        none.style.display = 'none';
    }
}
// registerBtn.onclick = function() {
//     oRegister.style.display = 'block';
// }
// loginBtn.onclick = function() {
//     oLogin.style.display = 'block';
// }
// loginBack.onclick = function() {
//         oLogin.style.display = 'none';
// }
// registerBack.onclick = function() {
//     oRegister.style.display = 'none';
// }
// toLogin.onclick = function() {
//     oRegister.style.display = 'none';
//     oLogin.style.display = 'block';
// }
// toRegister.onclick = function() {
//     oRegister.style.display = 'block';
//     oLogin.style.display = 'none';
// }