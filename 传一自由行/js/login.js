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
var detpass = registerInp[3].value;

// 注册判断
for (let i = 0; i <= 3; i++) {
    registerInp[i].onfocus = function(i) {
        this.style.border = '1px solid #ff9d00';
        accReg(i);
    }
    registerInp[i].onblur = function() {
        this.style.border = '1px solid transparent';
        accReg(i);
    }
    registerInp[i].onkeyup = function() {
        accReg(i);
    }
}

function accReg(num) {
    if (num == 0) {
        if (registerInp[num].value != '') {
            if (registerInp[num].value.length > 11) {
                oTips.innerHTML = '名字太长了，请小于12个字符';
                oTips.className = 'tips';
                registerInp[num].style.border = '1px solid #f00';

            } else {
                oTips.innerHTML = '';
                oTips.className = '';
                registerInp[num].style.border = '1px solid #0f0';
            }
        } else {
            oTips.innerHTML = '';
            oTips.className = '';
        }
    } else if (num == 1) {
        if (registerInp[num].value != '') {
            if (registerInp[num].value.match(phoneReg) == null) {
                oTips.innerHTML = '手机号码格式不正确';
                oTips.className = 'tips';
                registerInp[num].style.border = '1px solid #ff0000';
            } else {
                oTips.innerHTML = '';
                oTips.className = '';
                registerInp[num].style.border = '1px solid #0f0';
            }
        } else {
            oTips.innerHTML = '';
            oTips.className = '';
        }
    } else if (num == 2) {
        if (registerInp[num].value != '') {
            if (registerInp[num].value.match(passReg) == null) {
                oTips.innerHTML = '至少一个字母和数字，且不少于6个字符';
                oTips.className = 'tips';
                registerInp[num].style.border = '1px solid #ff0000';
            } else {
                oTips.innerHTML = '';
                oTips.className = '';
                registerInp[num].style.border = '1px solid #0f0';
            }
        } else {
            oTips.innerHTML = '';
            oTips.className = '';
        }
    } else if (num == 3) {
        if (registerInp[num].value != '' && registerInp[2].value.match(passReg) != null) {
            if (registerInp[num].value == registerInp[2].value) {
                oTips.innerHTML = '';
                oTips.className = '';
                registerInp[num].style.border = '1px solid #0f0';
            } else {
                oTips.className = 'tips';
                oTips.innerHTML = '密码不一致';
                registerInp[num].style.border = '1px solid #f00';
            }
        } else {
            oTips.innerHTML = '';
            oTips.className = '';
        }
    }
}





// 注册
var oRegisterBtn = document.getElementsByClassName('register_on')[0];
oRegisterBtn.onclick = function() {
        if (localStorage.getItem('HX191110_userArr') == null) {
            var oUserArr = [];
        } else {
            var oUserArr = JSON.parse(localStorage.getItem('HX191110_userArr'));
        }
        var oUserInfo = {
            name: registerInp[0].value,
            account: registerInp[1].value,
            password: registerInp[2].value,
            gold: 0
        }
        if (registerInp[0].value != '' && registerInp[1].value.match(phoneReg) != null && registerInp[2].value.match(passReg) != null && registerInp[3].value == registerInp[2].value) {
            if (oUserArr.length == 0) {
                oUserArr.push(oUserInfo);
                var userArr = JSON.stringify(oUserArr);
                localStorage.setItem('HX191110_userArr', userArr);
                alert('注册成功')
            } else {
                for (var i = 0; i < oUserArr.length; i++) {
                    // 判断 用户输入的账号是否与本地的出现重复
                    if (oUserArr[i].account != oUserInfo.account) {
                        oUserArr.push(oUserInfo);
                        var userArr = JSON.stringify(oUserArr);
                        localStorage.setItem('HX191110_userArr', userArr);
                        alert('注册成功')
                        oLogin.style.display = 'block';
                        oRegister.style.display = 'none';
                        return;
                    }
                }
                // 给提示
                alert('该账号已存在');
            }
        } else {
            alert('填写信息有误')
        }
    }
    // 登录
    // if(registerInp[1].value.match(phoneReg) != null && registerInp[2].value.match(passReg) != null){}