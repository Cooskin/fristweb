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

function province(name, idn, idx, img, enName) {
    this.name = name;
    this.idn = idn;
    this.idx = idx;
    this.img = img;
    this.enName = enName
}
var province1 = new province('直辖市', '001', '01', '<img src="./images/mdd/mdd01.jpeg" alt="" />');
var province2 = new province('福建', '001', '02', '<img src="./images/mdd/mdd02.jpeg" alt="" />', 'Fujian');
var province3 = new province('台湾', '002', '03', '<img src="./images/mdd/mdd03.jpeg" alt="" />', 'Taiwan');
var province4 = new province('澳门', '002', '04', '<img src="./images/mdd/mdd04.jpeg" alt="" />', 'Macao');
var province5 = new province('日本', '003', '05', '<img src="./images/mdd/mdd05.jpeg" alt="" />', 'Japan');
var province6 = new province('越南', '004', '06', '<img src="./images/mdd/mdd06.jpeg" alt="" />', 'Vietnam');
var province7 = new province('马来西亚', '004', '07', '<img src="./images/mdd/mdd07.jpeg" alt="" />', 'Malaysia');
var province8 = new province('马尔代夫', '005', '08', '<img src="./images/mdd/mdd08.jpeg" alt="" />', 'Maldives');
var province9 = new province('美国', '006', '09', '<img src="./images/mdd/mdd09.jpeg" alt="" />', 'United States of America');
var province10 = new province('新西兰', '007', '010', '<img src="./images/mdd/mdd010.jpeg" alt="" />', 'New Zealand');
var pArr = [province1, province2, province3, province4, province5, province6, province7, province8, province9, province10];


function cityObj(name, idx, idz, img, month, theme, enName) {
    this.name = name;
    this.idx = idx;
    this.idz = idz;
    this.img = img;
    this.month = month;
    this.theme = theme;
    this.enName = enName
};
var cityObj1 = new cityObj(
    '北京',
    '01',
    '1',
    '<img src="./images/mdd/mdd01.jpeg" alt="" />',
    '3月',
    '购物',
    'Beijing'
);
var cityObj2 = new cityObj(
    '上海',
    '01',
    '2',
    '<img src="./images/mdd/mdd02.jpeg" alt="" />',
    '2月',
    '潜水',
    'Shanghai'
);
var cityObj3 = new cityObj(
    '重庆',
    '01',
    '3',
    '<img src="./images/mdd/mdd03.jpeg" alt="" />',
    '1月',
    '美食',
    'ChongQing'
);
var cityObj4 = new cityObj(
    '天津',
    '01',
    '4',
    '<img src="./images/mdd/mdd04.jpeg" alt="" />',
    '4月',
    '登山',
    'Tianjin'
);

var cityObj5 = new cityObj(
    '厦门',
    '02',
    '5',
    '<img src="./images/mdd/mdd05.jpeg" alt="" />',
    '7月',
    '潜水',
    'Xiamen'
);
var cityObj6 = new cityObj(
    '鼓浪屿',
    '02',
    '6',
    '<img src="./images/mdd/mdd06.jpeg" alt="" />',
    '7月',
    '潜水',
    'Kulangsu'
);
var cityObj7 = new cityObj(
    '泉州',
    '02',
    '7',
    '<img src="./images/mdd/mdd07.jpeg" alt="" />',
    '7月',
    '潜水',
    'Quanzhou'
);
var cityObj8 = new cityObj(
    '武夷山',
    '02',
    '8',
    '<img src="./images/mdd/mdd08.jpeg" alt="" />',
    '7月',
    '潜水',
    'Mountain Wuyi'
);

var cityArr = [cityObj1, cityObj2, cityObj3, cityObj4, cityObj5, cityObj6, cityObj7, cityObj8];


function pic(name, enName, bigImg, smallImg, idz, text) {
    this.name = name;
    this.enName = enName;
    this.bigImg = bigImg;
    this.smallImg = smallImg;
    this.idz = idz;
    this.text = text;

}

var pic1 = new pic(
    '故宫',
    'The Palace Museum',
    '<img src="./images/mdd_dateils/1.jpeg" alt="" />',
    '<img src="./images/mdd_dateils/2.jpeg" alt="" />',
    '1',
    `·又名紫禁城，是中国乃至世界上保存最完整，规模最大的木质结构古建筑群，被誉为“世界五大宫之首”。`
)
var pic2 = new pic(
    '外滩',
    'The Bund',
    '<img src="./images/mdd_dateils/3.jpeg" alt="" />',
    '<img src="./images/mdd_dateils/4.jpeg" alt="" />',
    '2',
    `·位于上海市中心黄浦区的黄浦江畔，是最具上海城市象征意义的景点之一。`
)
var pic3 = new pic(
    '曾厝垵',
    '',
    '<img src="./images/mdd_dateils/5.jpeg" alt="" />',
    '<img src="./images/mdd_dateils/6.jpeg" alt="" />',
    '5',
    `·曾厝垵被誉为“全国最文艺村落”，这里曾是一个质朴的渔村，如今已成为炙手可热的文化创意村。`
)
var pic4 = new pic(
    '鼓浪屿',
    'Kulangsu',
    '<img src="./images/mdd_dateils/7.jpeg" alt="" />',
    '<img src="./images/mdd_dateils/8.jpeg" alt="" />',
    '6',
    `·鼓浪屿位于厦门岛西南隅，与厦门市隔海相望，这里既有独特的侨乡风情，又有美味的闽南特色小吃，各式的异国建筑更是让鼓浪屿别具一格。`
)

var picArr = [pic1, pic2, pic3, pic4];