// 登录注册
var oLogOut = document.getElementsByClassName('login_out')[0];
var oRegister = document.getElementsByClassName('register')[0];
var oLogin = document.getElementById('login');
var loginBack = document.getElementsByClassName('content_top')[1].children[0];
var registerBack = document.getElementsByClassName('content_top')[0].children[0];
var toLogin = document.getElementsByClassName('content_bottom')[0].children[0];
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
function targetClick(btn, block, none) {
    btn.onclick = function() {
        block.style.display = 'block';
        none.style.display = 'none';
    }
}
targetClick(toLogin, oLogin, oRegister);
targetClick(toRegister, oRegister, oLogin);

// 正则判断
var phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
var passReg = /^(?=.*[A-Za-z])(?=.*\d)[^]{6,16}$/;

var registerInp = oRegister.getElementsByTagName('input');
var loginInp = oLogin.getElementsByTagName('input');
var oTips = oRegister.getElementsByClassName('content')[0].firstElementChild;
var userName = registerInp[0].value;
// var acc = registerInp[1].value;
// var pass = registerInp[2].value;
var detpass = registerInp[3].value;

// var pZhReg = acc.match(phoneReg);
// var pMaReg = pass.match(passReg);

// 注册判断
// for (var i = 0; i < registerInp.length; i++) {
//     registerInp[i].onfocus = function() {
//         this.style.border = '1px solid #ff9d00';
//     }
//     registerInp[i].onblur = function() {
//         this.style.border = '1px solid transparent';
//     }
// }
registerInp[1].onkeyup = function() {
    accReg();
}
registerInp[1].onfocus = function() {
    this.style.border = '1px solid #ff9d00';
    accReg();
}
registerInp[1].onblur = function() {
    this.style.border = '1px solid transparent';
    accReg();
}
registerInp[2].onkeyup = function() {
    pasReg();
}
registerInp[2].onfocus = function() {
    this.style.border = '1px solid #ff9d00';
    pasReg();
}
registerInp[2].onblur = function() {
    this.style.border = '1px solid transparent';
    pasReg();
}

function accReg() {
    if (registerInp[1].value != '') {
        if (registerInp[1].value.match(phoneReg) == null) {
            oTips.innerHTML = '手机号码格式不正确';
            oTips.className = 'tips';
            registerInp[1].style.border = '1px solid #ff0000';
        } else {
            oTips.innerHTML = '';
            oTips.className = 'none';
            registerInp[1].style.border = '1px solid #0f0';
        }
    }
}

function pasReg() {
    if (registerInp[2].value != '') {
        if (registerInp[2].value.match(passReg) == null) {
            oTips.innerHTML = '至少一个字母或数字，且不少于6个字符';
            oTips.className = 'tips';
            registerInp[2].style.border = '1px solid #ff0000';
        } else {
            oTips.innerHTML = '';
            oTips.className = 'none';
            registerInp[2].style.border = '1px solid #0f0';
        }
    }
}