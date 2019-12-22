var aInp = document.getElementsByTagName('input');
// 聚焦和失焦事件
for (var i = 0; i < aInp.length; i++) {
    aInp[i].onfocus = function() {
        this.style.border = '1px solid #ff9d00';
    }
    aInp[i].onblur = function() {
        this.style.border = '1px solid transparent';
    }
}