if (localStorage.getItem('HX191110_traget') == null) {
    location.hred = 'mdd.html';
}
var traget = JSON.parse(localStorage.getItem('HX191110_traget'));

var oCrumb = document.getElementsByClassName('crumb')[0];