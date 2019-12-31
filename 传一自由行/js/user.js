// 个人中心导航栏
var oUserNav = document.getElementsByClassName('user_nav')[0];
var aNavList = oUserNav.getElementsByTagName('a');
for (let i = 0; i < aNavList.length; i++) {
    aNavList[i].onclick = function() {
        for (let j = 0; j < aNavList.length; j++) {
            aNavList[j].parentNode.className = '';
            console.log(aNavList[j].parentNode)
        }
        this.parentNode.className = 'activ';
    }
}
// 个人信息
var userInfo = JSON.parse(localStorage.getItem('HX191110_userArr'));
var oInfo = document.getElementsByClassName('info')[0];
var aSpan = oInfo.getElementsByTagName('span');

for (let i = 0; i < userInfo.length; i++) {
    if (userInfo[i].name == JSON.parse(localStorage.getItem('HX191110_log'))) {
        aSpan[0].innerHTML = userInfo[i].name;
        aSpan[1].innerHTML = userInfo[i].account;
        aSpan[2].innerHTML = userInfo[i].gold;
    }
}

var oGoldBtn = oInfo.getElementsByClassName('gold')[0].lastElementChild;
var oCharge = oInfo.getElementsByClassName('charge')[0];
var backBtn = oCharge.getElementsByClassName('btn')[0].lastElementChild;
var chargeBtn = oCharge.getElementsByClassName('btn')[0].firstElementChild;

oGoldBtn.onclick = function() {
    oCharge.style.display = 'block';
}
backBtn.onclick = function() {
    oCharge.style.display = 'none';
}
var aCheck = document.getElementsByName('gold');

// function doSubmit1(actionName) {
//     var obj = document.getElementsByName("cycle_unit");
//     var flags = false;
var oGoldNumber = document.getElementById('gold_number');
chargeBtn.onclick = function() {
    console.log(parseInt(oGoldNumber.value));
    var userArr = JSON.parse(localStorage.getItem('HX191110_userArr'));
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].name == JSON.parse(localStorage.getItem('HX191110_log'))) {
            if (parseInt(oGoldNumber.value) != 0) {
                userArr[i].gold += parseInt(oGoldNumber.value);

            }
        }
    }


    for (let i = 0; i < aCheck.length; i++) {
        if (aCheck[i].checked == true) {
            // flags = true;
            console.log(aCheck[i].value)
        }
    }
}

// for (var i = 0; i < aCheck.length; i++) {
//     if (aCheck[i].checked == true) {
//         // flags = true;
//         console.log(aCheck[i].value)
//     }
// }
//     if (flags == false) {
//         alert("对不起，请选择")
//         return false;
//     }
// }