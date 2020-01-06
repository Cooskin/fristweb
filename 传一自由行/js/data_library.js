var navArr = [{
    name: '国内',
    idn: '001'
}, {
    name: '港澳台',
    idn: '002'
}, {
    name: '日本',
    idn: '003'
}, {
    name: '东南亚',
    idn: '004'
}, {
    name: '南亚 西亚',
    idn: '005'
}, {
    name: '欧洲 美洲',
    idn: '006'
}, {
    name: '澳洲 非洲',
    idn: '007'
}];

function province(name, idn, idx, img) {
    this.name = name;
    this.idn = idn;
    this.idx = idx;
    this.img = img;
}
var province1 = new province('直辖市', '001', '01', '<img src="./images/mdd/mdd01.jpeg" alt="" />');
var province2 = new province('福建', '001', '02', '<img src="./images/mdd/mdd02.jpeg" alt="" />');
var province3 = new province('台湾', '002', '03', '<img src="./images/mdd/mdd03.jpeg" alt="" />');
var province4 = new province('香港 澳门', '002', '04', '<img src="./images/mdd/mdd04.jpeg" alt="" />');
var province5 = new province('日本', '003', '05', '<img src="./images/mdd/mdd05.jpeg" alt="" />');
var province6 = new province('越南', '004', '06', '<img src="./images/mdd/mdd06.jpeg" alt="" />');
var province7 = new province('马来西亚', '004', '07', '<img src="./images/mdd/mdd07.jpeg" alt="" />');
var province8 = new province('马尔代夫', '005', '08', '<img src="./images/mdd/mdd08.jpeg" alt="" />');
var province9 = new province('美国', '006', '09', '<img src="./images/mdd/mdd09.jpeg" alt="" />');
var province10 = new province('新西兰', '007', '010', '<img src="./images/mdd/mdd010.jpeg" alt="" />');
var pArr = [province1, province2, province3, province4, province5, province6, province7, province8, province9];


function cityObj(name, idx, idz, img, month, theme) {
    this.name = name;
    this.idx = idx;
    this.idz = idz;
    this.img = img;
    this.month = month;
    this.theme = theme;
};
var cityObj1 = new cityObj(
    '北京',
    '01',
    '1',
    '<img src="./images/mdd/mdd01.jpeg" alt="" />',
    '3月',
    '购物'
);
var cityObj2 = new cityObj(
    '上海',
    '01',
    '2',
    '<img src="./images/mdd/mdd02.jpeg" alt="" />',
    '2月',
    '潜水'
);
var cityObj3 = new cityObj(
    '重庆',
    '01',
    '3',
    '<img src="./images/mdd/mdd03.jpeg" alt="" />',
    '1月',
    '美食'
);
var cityObj4 = new cityObj(
    '天津',
    '01',
    '4',
    '<img src="./images/mdd/mdd04.jpeg" alt="" />',
    '4月',
    '登山'
);

var cityObj5 = new cityObj(
    '厦门',
    '02',
    '5',
    '<img src="./images/mdd/mdd05.jpeg" alt="" />',
    '7月',
    '潜水'
);
var cityObj6 = new cityObj(
    '鼓浪屿',
    '02',
    '6',
    '<img src="./images/mdd/mdd06.jpeg" alt="" />',
    '7月',
    '潜水'
);
var cityObj7 = new cityObj(
    '泉州',
    '02',
    '7',
    '<img src="./images/mdd/mdd07.jpeg" alt="" />',
    '7月',
    '潜水'
);
var cityObj8 = new cityObj(
    '武夷山',
    '02',
    '8',
    '<img src="./images/mdd/mdd08.jpeg" alt="" />',
    '7月',
    '潜水'
);

var cityArr = [cityObj1, cityObj2, cityObj3, cityObj4, cityObj5, cityObj6, cityObj7, cityObj8];