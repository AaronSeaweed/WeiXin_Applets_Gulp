"use strict";var vm,list=[],app=getApp();Page({data:{multiIndex:[0,0],multiArray:[["北京市","安徽省","福建省","甘肃省","广东省","广西省","贵州省","海南省","河北省","河南省","黑龙江省","湖北省","湖南省","吉林省","江苏省","江西省","辽宁省","内蒙古自治区","宁夏回族自治区","青海省","山东省","山西省","陕西省","上海市","四川省","天津省","西藏自治区","新疆维吾尔自治区","云南省","浙江省","重庆市","香港","澳门","台湾"],["北京市"]],objectMultiArray:[{regid:"2",parid:"1",regname:"北京市",regtype:"1",ageid:"0"},{regid:"3",parid:"1",regname:"安徽省",regtype:"1",ageid:"0"},{regid:"4",parid:"1",regname:"福建省",regtype:"1",ageid:"0"},{regid:"5",parid:"1",regname:"甘肃省",regtype:"1",ageid:"0"},{regid:"6",parid:"1",regname:"广东省",regtype:"1",ageid:"0"},{regid:"7",parid:"1",regname:"广西省",regtype:"1",ageid:"0"},{regid:"8",parid:"1",regname:"贵州省",regtype:"1",ageid:"0"},{regid:"9",parid:"1",regname:"海南省",regtype:"1",ageid:"0"},{regid:"10",parid:"1",regname:"河北省",regtype:"1",ageid:"0"},{regid:"11",parid:"1",regname:"河南省",regtype:"1",ageid:"0"},{regid:"12",parid:"1",regname:"黑龙江自治区",regtype:"1",ageid:"0"},{regid:"13",parid:"1",regname:"湖北省",regtype:"1",ageid:"0"},{regid:"14",parid:"1",regname:"湖南省",regtype:"1",ageid:"0"},{regid:"15",parid:"1",regname:"吉林省",regtype:"1",ageid:"0"},{regid:"16",parid:"1",regname:"江苏省",regtype:"1",ageid:"0"},{regid:"17",parid:"1",regname:"江西省",regtype:"1",ageid:"0"},{regid:"18",parid:"1",regname:"辽宁省",regtype:"1",ageid:"0"},{regid:"19",parid:"1",regname:"内蒙古自治区",regtype:"1",ageid:"0"},{regid:"20",parid:"1",regname:"宁夏回族自治区",regtype:"1",ageid:"0"},{regid:"21",parid:"1",regname:"青海省",regtype:"1",ageid:"0"},{regid:"22",parid:"1",regname:"山东省",regtype:"1",ageid:"0"},{regid:"23",parid:"1",regname:"山西省",regtype:"1",ageid:"0"},{regid:"24",parid:"1",regname:"陕西省",regtype:"1",ageid:"0"},{regid:"25",parid:"1",regname:"上海市",regtype:"1",ageid:"0"},{regid:"26",parid:"1",regname:"四川省",regtype:"1",ageid:"0"},{regid:"27",parid:"1",regname:"天津省",regtype:"1",ageid:"0"},{regid:"28",parid:"1",regname:"西藏自治区",regtype:"1",ageid:"0"},{regid:"29",parid:"1",regname:"新疆维吾尔自治区",regtype:"1",ageid:"0"},{regid:"30",parid:"1",regname:"云南省",regtype:"1",ageid:"0"},{regid:"31",parid:"1",regname:"浙江省",regtype:"1",ageid:"0"},{regid:"32",parid:"1",regname:"重庆省",regtype:"1",ageid:"0"},{regid:"33",parid:"1",regname:"香港",regtype:"1",ageid:"0"},{regid:"34",parid:"1",regname:"澳门",regtype:"1",ageid:"0"},{regid:"35",parid:"1",regname:"台湾",regtype:"1",ageid:"0"},{regid:"36",parid:"3",regname:"安庆市",regtype:"2",ageid:"0"},{regid:"37",parid:"3",regname:"蚌埠市",regtype:"2",ageid:"0"},{regid:"38",parid:"3",regname:"巢湖市",regtype:"2",ageid:"0"},{regid:"39",parid:"3",regname:"池州市",regtype:"2",ageid:"0"},{regid:"40",parid:"3",regname:"滁州市",regtype:"2",ageid:"0"},{regid:"41",parid:"3",regname:"阜阳市",regtype:"2",ageid:"0"},{regid:"42",parid:"3",regname:"淮北市",regtype:"2",ageid:"0"},{regid:"43",parid:"3",regname:"淮南市",regtype:"2",ageid:"0"},{regid:"44",parid:"3",regname:"黄山市",regtype:"2",ageid:"0"},{regid:"45",parid:"3",regname:"六安市",regtype:"2",ageid:"0"},{regid:"46",parid:"3",regname:"马鞍山市",regtype:"2",ageid:"0"},{regid:"47",parid:"3",regname:"宿州市",regtype:"2",ageid:"0"},{regid:"48",parid:"3",regname:"铜陵市",regtype:"2",ageid:"0"},{regid:"49",parid:"3",regname:"芜湖市",regtype:"2",ageid:"0"},{regid:"50",parid:"3",regname:"宣城市",regtype:"2",ageid:"0"},{regid:"51",parid:"3",regname:"亳州市",regtype:"2",ageid:"0"},{regid:"52",parid:"2",regname:"北京市",regtype:"2",ageid:"0"},{regid:"53",parid:"4",regname:"福州市",regtype:"2",ageid:"0"},{regid:"54",parid:"4",regname:"龙岩市",regtype:"2",ageid:"0"},{regid:"55",parid:"4",regname:"南平市",regtype:"2",ageid:"0"},{regid:"56",parid:"4",regname:"宁德市",regtype:"2",ageid:"0"},{regid:"57",parid:"4",regname:"莆田市",regtype:"2",ageid:"0"},{regid:"58",parid:"4",regname:"泉州市",regtype:"2",ageid:"0"},{regid:"59",parid:"4",regname:"三明市",regtype:"2",ageid:"0"},{regid:"60",parid:"4",regname:"厦门市",regtype:"2",ageid:"0"},{regid:"61",parid:"4",regname:"漳州市",regtype:"2",ageid:"0"},{regid:"62",parid:"5",regname:"兰州市",regtype:"2",ageid:"0"},{regid:"63",parid:"5",regname:"白银市",regtype:"2",ageid:"0"},{regid:"64",parid:"5",regname:"定西市",regtype:"2",ageid:"0"},{regid:"65",parid:"5",regname:"甘南市",regtype:"2",ageid:"0"},{regid:"66",parid:"5",regname:"嘉峪关市",regtype:"2",ageid:"0"},{regid:"67",parid:"5",regname:"金昌市",regtype:"2",ageid:"0"},{regid:"68",parid:"5",regname:"酒泉市",regtype:"2",ageid:"0"},{regid:"69",parid:"5",regname:"临夏市",regtype:"2",ageid:"0"},{regid:"70",parid:"5",regname:"陇南市",regtype:"2",ageid:"0"},{regid:"71",parid:"5",regname:"平凉市",regtype:"2",ageid:"0"},{regid:"72",parid:"5",regname:"庆阳市",regtype:"2",ageid:"0"},{regid:"73",parid:"5",regname:"天水市",regtype:"2",ageid:"0"},{regid:"74",parid:"5",regname:"武威市",regtype:"2",ageid:"0"},{regid:"75",parid:"5",regname:"张掖市",regtype:"2",ageid:"0"},{regid:"76",parid:"6",regname:"广州市",regtype:"2",ageid:"0"},{regid:"77",parid:"6",regname:"深圳市",regtype:"2",ageid:"0"},{regid:"78",parid:"6",regname:"潮州市",regtype:"2",ageid:"0"},{regid:"79",parid:"6",regname:"东莞市",regtype:"2",ageid:"0"},{regid:"80",parid:"6",regname:"佛山市",regtype:"2",ageid:"0"},{regid:"81",parid:"6",regname:"河源市",regtype:"2",ageid:"0"},{regid:"82",parid:"6",regname:"惠州市",regtype:"2",ageid:"0"},{regid:"83",parid:"6",regname:"江门市",regtype:"2",ageid:"0"},{regid:"84",parid:"6",regname:"揭阳市",regtype:"2",ageid:"0"},{regid:"85",parid:"6",regname:"茂名市",regtype:"2",ageid:"0"},{regid:"86",parid:"6",regname:"梅州市",regtype:"2",ageid:"0"},{regid:"87",parid:"6",regname:"清远市",regtype:"2",ageid:"0"},{regid:"88",parid:"6",regname:"汕头市",regtype:"2",ageid:"0"},{regid:"89",parid:"6",regname:"汕尾市",regtype:"2",ageid:"0"},{regid:"90",parid:"6",regname:"韶关市",regtype:"2",ageid:"0"},{regid:"91",parid:"6",regname:"阳江市",regtype:"2",ageid:"0"},{regid:"92",parid:"6",regname:"云浮市",regtype:"2",ageid:"0"},{regid:"93",parid:"6",regname:"湛江市",regtype:"2",ageid:"0"},{regid:"94",parid:"6",regname:"肇庆市",regtype:"2",ageid:"0"},{regid:"95",parid:"6",regname:"中山市",regtype:"2",ageid:"0"},{regid:"96",parid:"6",regname:"珠海市",regtype:"2",ageid:"0"},{regid:"97",parid:"7",regname:"南宁市",regtype:"2",ageid:"0"},{regid:"98",parid:"7",regname:"桂林市",regtype:"2",ageid:"0"},{regid:"99",parid:"7",regname:"百色市",regtype:"2",ageid:"0"},{regid:"100",parid:"7",regname:"北海市",regtype:"2",ageid:"0"},{regid:"101",parid:"7",regname:"崇左市",regtype:"2",ageid:"0"},{regid:"102",parid:"7",regname:"防城港市",regtype:"2",ageid:"0"},{regid:"103",parid:"7",regname:"贵港市",regtype:"2",ageid:"0"},{regid:"104",parid:"7",regname:"河池市",regtype:"2",ageid:"0"},{regid:"105",parid:"7",regname:"贺州市",regtype:"2",ageid:"0"},{regid:"106",parid:"7",regname:"来宾市",regtype:"2",ageid:"0"},{regid:"107",parid:"7",regname:"柳州市",regtype:"2",ageid:"0"},{regid:"108",parid:"7",regname:"钦州市",regtype:"2",ageid:"0"},{regid:"109",parid:"7",regname:"梧州市",regtype:"2",ageid:"0"},{regid:"110",parid:"7",regname:"玉林市",regtype:"2",ageid:"0"},{regid:"111",parid:"8",regname:"贵阳市",regtype:"2",ageid:"0"},{regid:"112",parid:"8",regname:"安顺市",regtype:"2",ageid:"0"},{regid:"113",parid:"8",regname:"毕节市",regtype:"2",ageid:"0"},{regid:"114",parid:"8",regname:"六盘水市",regtype:"2",ageid:"0"},{regid:"115",parid:"8",regname:"黔东南市",regtype:"2",ageid:"0"},{regid:"116",parid:"8",regname:"黔南市",regtype:"2",ageid:"0"},{regid:"117",parid:"8",regname:"黔西南市",regtype:"2",ageid:"0"},{regid:"118",parid:"8",regname:"铜仁市",regtype:"2",ageid:"0"},{regid:"119",parid:"8",regname:"遵义市",regtype:"2",ageid:"0"},{regid:"120",parid:"9",regname:"海口市",regtype:"2",ageid:"0"},{regid:"121",parid:"9",regname:"三亚市",regtype:"2",ageid:"0"},{regid:"122",parid:"9",regname:"白沙市",regtype:"2",ageid:"0"},{regid:"123",parid:"9",regname:"保亭市",regtype:"2",ageid:"0"},{regid:"124",parid:"9",regname:"昌江市",regtype:"2",ageid:"0"},{regid:"125",parid:"9",regname:"澄迈县市",regtype:"2",ageid:"0"},{regid:"126",parid:"9",regname:"定安县市",regtype:"2",ageid:"0"},{regid:"127",parid:"9",regname:"东方市",regtype:"2",ageid:"0"},{regid:"128",parid:"9",regname:"乐东市",regtype:"2",ageid:"0"},{regid:"129",parid:"9",regname:"临高县市",regtype:"2",ageid:"0"},{regid:"130",parid:"9",regname:"陵水市",regtype:"2",ageid:"0"},{regid:"131",parid:"9",regname:"琼海市",regtype:"2",ageid:"0"},{regid:"132",parid:"9",regname:"琼中市",regtype:"2",ageid:"0"},{regid:"133",parid:"9",regname:"屯昌县",regtype:"2",ageid:"0"},{regid:"134",parid:"9",regname:"万宁市",regtype:"2",ageid:"0"},{regid:"135",parid:"9",regname:"文昌市",regtype:"2",ageid:"0"},{regid:"136",parid:"9",regname:"五指山市",regtype:"2",ageid:"0"},{regid:"137",parid:"9",regname:"儋州市",regtype:"2",ageid:"0"},{regid:"138",parid:"10",regname:"石家庄市",regtype:"2",ageid:"0"},{regid:"139",parid:"10",regname:"保定市",regtype:"2",ageid:"0"},{regid:"140",parid:"10",regname:"沧州市",regtype:"2",ageid:"0"},{regid:"141",parid:"10",regname:"承德市",regtype:"2",ageid:"0"},{regid:"142",parid:"10",regname:"邯郸市",regtype:"2",ageid:"0"},{regid:"143",parid:"10",regname:"衡水市",regtype:"2",ageid:"0"},{regid:"144",parid:"10",regname:"廊坊市",regtype:"2",ageid:"0"},{regid:"145",parid:"10",regname:"秦皇岛市",regtype:"2",ageid:"0"},{regid:"146",parid:"10",regname:"唐山市",regtype:"2",ageid:"0"},{regid:"147",parid:"10",regname:"邢台市",regtype:"2",ageid:"0"},{regid:"148",parid:"10",regname:"张家口市",regtype:"2",ageid:"0"},{regid:"149",parid:"11",regname:"郑州市",regtype:"2",ageid:"0"},{regid:"150",parid:"11",regname:"洛阳市",regtype:"2",ageid:"0"},{regid:"151",parid:"11",regname:"开封市",regtype:"2",ageid:"0"},{regid:"152",parid:"11",regname:"安阳市",regtype:"2",ageid:"0"},{regid:"153",parid:"11",regname:"鹤壁市",regtype:"2",ageid:"0"},{regid:"154",parid:"11",regname:"济源市",regtype:"2",ageid:"0"},{regid:"155",parid:"11",regname:"焦作市",regtype:"2",ageid:"0"},{regid:"156",parid:"11",regname:"南阳市",regtype:"2",ageid:"0"},{regid:"157",parid:"11",regname:"平顶山市",regtype:"2",ageid:"0"},{regid:"158",parid:"11",regname:"三门峡市",regtype:"2",ageid:"0"},{regid:"159",parid:"11",regname:"商丘市",regtype:"2",ageid:"0"},{regid:"160",parid:"11",regname:"新乡市",regtype:"2",ageid:"0"},{regid:"161",parid:"11",regname:"信阳市",regtype:"2",ageid:"0"},{regid:"162",parid:"11",regname:"许昌市",regtype:"2",ageid:"0"},{regid:"163",parid:"11",regname:"周口市",regtype:"2",ageid:"0"},{regid:"164",parid:"11",regname:"驻马店市",regtype:"2",ageid:"0"},{regid:"165",parid:"11",regname:"漯河市",regtype:"2",ageid:"0"},{regid:"166",parid:"11",regname:"濮阳市",regtype:"2",ageid:"0"},{regid:"167",parid:"12",regname:"哈尔滨市",regtype:"2",ageid:"0"},{regid:"168",parid:"12",regname:"大庆市",regtype:"2",ageid:"0"},{regid:"169",parid:"12",regname:"大兴安岭市",regtype:"2",ageid:"0"},{regid:"170",parid:"12",regname:"鹤岗市",regtype:"2",ageid:"0"},{regid:"171",parid:"12",regname:"黑河市",regtype:"2",ageid:"0"},{regid:"172",parid:"12",regname:"鸡西市",regtype:"2",ageid:"0"},{regid:"173",parid:"12",regname:"佳木斯市",regtype:"2",ageid:"0"},{regid:"174",parid:"12",regname:"牡丹江市",regtype:"2",ageid:"0"},{regid:"175",parid:"12",regname:"七台河市",regtype:"2",ageid:"0"},{regid:"176",parid:"12",regname:"齐齐哈尔市",regtype:"2",ageid:"0"},{regid:"177",parid:"12",regname:"双鸭山市",regtype:"2",ageid:"0"},{regid:"178",parid:"12",regname:"绥化市",regtype:"2",ageid:"0"},{regid:"179",parid:"12",regname:"伊春市",regtype:"2",ageid:"0"},{regid:"180",parid:"13",regname:"武汉市",regtype:"2",ageid:"0"},{regid:"181",parid:"13",regname:"仙桃市",regtype:"2",ageid:"0"},{regid:"182",parid:"13",regname:"鄂州市",regtype:"2",ageid:"0"},{regid:"183",parid:"13",regname:"黄冈市",regtype:"2",ageid:"0"},{regid:"184",parid:"13",regname:"黄石市",regtype:"2",ageid:"0"},{regid:"185",parid:"13",regname:"荆门市",regtype:"2",ageid:"0"},{regid:"186",parid:"13",regname:"荆州市",regtype:"2",ageid:"0"},{regid:"187",parid:"13",regname:"潜江市",regtype:"2",ageid:"0"},{regid:"188",parid:"13",regname:"神农架林区市",regtype:"2",ageid:"0"},{regid:"189",parid:"13",regname:"十堰市",regtype:"2",ageid:"0"},{regid:"190",parid:"13",regname:"随州市",regtype:"2",ageid:"0"},{regid:"191",parid:"13",regname:"天门市",regtype:"2",ageid:"0"},{regid:"192",parid:"13",regname:"咸宁市",regtype:"2",ageid:"0"},{regid:"193",parid:"13",regname:"襄阳(襄樊市)",regtype:"2",ageid:"0"},{regid:"194",parid:"13",regname:"孝感市",regtype:"2",ageid:"0"},{regid:"195",parid:"13",regname:"宜昌市",regtype:"2",ageid:"0"},{regid:"196",parid:"13",regname:"恩施市",regtype:"2",ageid:"0"},{regid:"197",parid:"14",regname:"长沙市",regtype:"2",ageid:"0"},{regid:"198",parid:"14",regname:"张家界市",regtype:"2",ageid:"0"},{regid:"199",parid:"14",regname:"常德市",regtype:"2",ageid:"0"},{regid:"200",parid:"14",regname:"郴州市",regtype:"2",ageid:"0"},{regid:"201",parid:"14",regname:"衡阳市",regtype:"2",ageid:"0"},{regid:"202",parid:"14",regname:"怀化市",regtype:"2",ageid:"0"},{regid:"203",parid:"14",regname:"娄底市",regtype:"2",ageid:"0"},{regid:"204",parid:"14",regname:"邵阳市",regtype:"2",ageid:"0"},{regid:"205",parid:"14",regname:"湘潭市",regtype:"2",ageid:"0"},{regid:"206",parid:"14",regname:"湘西市",regtype:"2",ageid:"0"},{regid:"207",parid:"14",regname:"益阳市",regtype:"2",ageid:"0"},{regid:"208",parid:"14",regname:"永州市",regtype:"2",ageid:"0"},{regid:"209",parid:"14",regname:"岳阳市",regtype:"2",ageid:"0"},{regid:"210",parid:"14",regname:"株洲市",regtype:"2",ageid:"0"},{regid:"211",parid:"15",regname:"长春市",regtype:"2",ageid:"0"},{regid:"212",parid:"15",regname:"吉林市",regtype:"2",ageid:"0"},{regid:"213",parid:"15",regname:"白城市",regtype:"2",ageid:"0"},{regid:"214",parid:"15",regname:"白山市",regtype:"2",ageid:"0"},{regid:"215",parid:"15",regname:"辽源市",regtype:"2",ageid:"0"},{regid:"216",parid:"15",regname:"四平市",regtype:"2",ageid:"0"},{regid:"217",parid:"15",regname:"松原市",regtype:"2",ageid:"0"},{regid:"218",parid:"15",regname:"通化市",regtype:"2",ageid:"0"},{regid:"219",parid:"15",regname:"延边市",regtype:"2",ageid:"0"},{regid:"220",parid:"16",regname:"南京市",regtype:"2",ageid:"0"},{regid:"221",parid:"16",regname:"苏州市",regtype:"2",ageid:"0"},{regid:"222",parid:"16",regname:"无锡市",regtype:"2",ageid:"0"},{regid:"223",parid:"16",regname:"常州市",regtype:"2",ageid:"0"},{regid:"224",parid:"16",regname:"淮安市",regtype:"2",ageid:"0"},{regid:"225",parid:"16",regname:"连云港市",regtype:"2",ageid:"0"},{regid:"226",parid:"16",regname:"南通市",regtype:"2",ageid:"0"},{regid:"227",parid:"16",regname:"宿迁市",regtype:"2",ageid:"0"},{regid:"228",parid:"16",regname:"泰州市",regtype:"2",ageid:"0"},{regid:"229",parid:"16",regname:"徐州市",regtype:"2",ageid:"0"},{regid:"230",parid:"16",regname:"盐城市",regtype:"2",ageid:"0"},{regid:"231",parid:"16",regname:"扬州市",regtype:"2",ageid:"0"},{regid:"232",parid:"16",regname:"镇江市",regtype:"2",ageid:"0"},{regid:"233",parid:"17",regname:"南昌市",regtype:"2",ageid:"0"},{regid:"234",parid:"17",regname:"抚州市",regtype:"2",ageid:"0"},{regid:"235",parid:"17",regname:"赣州市",regtype:"2",ageid:"0"},{regid:"236",parid:"17",regname:"吉安市",regtype:"2",ageid:"0"},{regid:"237",parid:"17",regname:"景德镇市",regtype:"2",ageid:"0"},{regid:"238",parid:"17",regname:"九江市",regtype:"2",ageid:"0"},{regid:"239",parid:"17",regname:"萍乡市",regtype:"2",ageid:"0"},{regid:"240",parid:"17",regname:"上饶市",regtype:"2",ageid:"0"},{regid:"241",parid:"17",regname:"新余市",regtype:"2",ageid:"0"},{regid:"242",parid:"17",regname:"宜春市",regtype:"2",ageid:"0"},{regid:"243",parid:"17",regname:"鹰潭市",regtype:"2",ageid:"0"},{regid:"244",parid:"18",regname:"沈阳市",regtype:"2",ageid:"0"},{regid:"245",parid:"18",regname:"大连市",regtype:"2",ageid:"0"},{regid:"246",parid:"18",regname:"鞍山市",regtype:"2",ageid:"0"},{regid:"247",parid:"18",regname:"本溪市",regtype:"2",ageid:"0"},{regid:"248",parid:"18",regname:"朝阳市",regtype:"2",ageid:"0"},{regid:"249",parid:"18",regname:"丹东市",regtype:"2",ageid:"0"},{regid:"250",parid:"18",regname:"抚顺市",regtype:"2",ageid:"0"},{regid:"251",parid:"18",regname:"阜新市",regtype:"2",ageid:"0"},{regid:"252",parid:"18",regname:"葫芦岛市",regtype:"2",ageid:"0"},{regid:"253",parid:"18",regname:"锦州市",regtype:"2",ageid:"0"},{regid:"254",parid:"18",regname:"辽阳市",regtype:"2",ageid:"0"},{regid:"255",parid:"18",regname:"盘锦市",regtype:"2",ageid:"0"},{regid:"256",parid:"18",regname:"铁岭市",regtype:"2",ageid:"0"},{regid:"257",parid:"18",regname:"营口市",regtype:"2",ageid:"0"},{regid:"258",parid:"19",regname:"呼和浩特市",regtype:"2",ageid:"0"},{regid:"259",parid:"19",regname:"阿拉善盟市",regtype:"2",ageid:"0"},{regid:"260",parid:"19",regname:"巴彦淖尔盟市",regtype:"2",ageid:"0"},{regid:"261",parid:"19",regname:"包头市",regtype:"2",ageid:"0"},{regid:"262",parid:"19",regname:"赤峰市",regtype:"2",ageid:"0"},{regid:"263",parid:"19",regname:"鄂尔多斯市",regtype:"2",ageid:"0"},{regid:"264",parid:"19",regname:"呼伦贝尔市",regtype:"2",ageid:"0"},{regid:"265",parid:"19",regname:"通辽市",regtype:"2",ageid:"0"},{regid:"266",parid:"19",regname:"乌海市",regtype:"2",ageid:"0"},{regid:"267",parid:"19",regname:"乌兰察布市",regtype:"2",ageid:"0"},{regid:"268",parid:"19",regname:"锡林郭勒盟市",regtype:"2",ageid:"0"},{regid:"269",parid:"19",regname:"兴安盟市",regtype:"2",ageid:"0"},{regid:"270",parid:"20",regname:"银川市",regtype:"2",ageid:"0"},{regid:"271",parid:"20",regname:"固原市",regtype:"2",ageid:"0"},{regid:"272",parid:"20",regname:"石嘴山市",regtype:"2",ageid:"0"},{regid:"273",parid:"20",regname:"吴忠市",regtype:"2",ageid:"0"},{regid:"274",parid:"20",regname:"中卫市",regtype:"2",ageid:"0"},{regid:"275",parid:"21",regname:"西宁市",regtype:"2",ageid:"0"},{regid:"276",parid:"21",regname:"果洛市",regtype:"2",ageid:"0"},{regid:"277",parid:"21",regname:"海北市",regtype:"2",ageid:"0"},{regid:"278",parid:"21",regname:"海东市",regtype:"2",ageid:"0"},{regid:"279",parid:"21",regname:"海南市",regtype:"2",ageid:"0"},{regid:"280",parid:"21",regname:"海西市",regtype:"2",ageid:"0"},{regid:"281",parid:"21",regname:"黄南市",regtype:"2",ageid:"0"},{regid:"282",parid:"21",regname:"玉树市",regtype:"2",ageid:"0"},{regid:"283",parid:"22",regname:"济南市",regtype:"2",ageid:"0"},{regid:"284",parid:"22",regname:"青岛市",regtype:"2",ageid:"0"},{regid:"285",parid:"22",regname:"滨州市",regtype:"2",ageid:"0"},{regid:"286",parid:"22",regname:"德州市",regtype:"2",ageid:"0"},{regid:"287",parid:"22",regname:"东营市",regtype:"2",ageid:"0"},{regid:"288",parid:"22",regname:"菏泽市",regtype:"2",ageid:"0"},{regid:"289",parid:"22",regname:"济宁市",regtype:"2",ageid:"0"},{regid:"290",parid:"22",regname:"莱芜市",regtype:"2",ageid:"0"},{regid:"291",parid:"22",regname:"聊城市",regtype:"2",ageid:"0"},{regid:"292",parid:"22",regname:"临沂市",regtype:"2",ageid:"0"},{regid:"293",parid:"22",regname:"日照市",regtype:"2",ageid:"0"},{regid:"294",parid:"22",regname:"泰安市",regtype:"2",ageid:"0"},{regid:"295",parid:"22",regname:"威海市",regtype:"2",ageid:"0"},{regid:"296",parid:"22",regname:"潍坊市",regtype:"2",ageid:"0"},{regid:"297",parid:"22",regname:"烟台市",regtype:"2",ageid:"0"},{regid:"298",parid:"22",regname:"枣庄市",regtype:"2",ageid:"0"},{regid:"299",parid:"22",regname:"淄博市",regtype:"2",ageid:"0"},{regid:"300",parid:"23",regname:"太原市",regtype:"2",ageid:"0"},{regid:"301",parid:"23",regname:"长治市",regtype:"2",ageid:"0"},{regid:"302",parid:"23",regname:"大同市",regtype:"2",ageid:"0"},{regid:"303",parid:"23",regname:"晋城市",regtype:"2",ageid:"0"},{regid:"304",parid:"23",regname:"晋中市",regtype:"2",ageid:"0"},{regid:"305",parid:"23",regname:"临汾市",regtype:"2",ageid:"0"},{regid:"306",parid:"23",regname:"吕梁市",regtype:"2",ageid:"0"},{regid:"307",parid:"23",regname:"朔州市",regtype:"2",ageid:"0"},{regid:"308",parid:"23",regname:"忻州市",regtype:"2",ageid:"0"},{regid:"309",parid:"23",regname:"阳泉市",regtype:"2",ageid:"0"},{regid:"310",parid:"23",regname:"运城市",regtype:"2",ageid:"0"},{regid:"311",parid:"24",regname:"西安市",regtype:"2",ageid:"0"},{regid:"312",parid:"24",regname:"安康市",regtype:"2",ageid:"0"},{regid:"313",parid:"24",regname:"宝鸡市",regtype:"2",ageid:"0"},{regid:"314",parid:"24",regname:"汉中市",regtype:"2",ageid:"0"},{regid:"315",parid:"24",regname:"商洛市",regtype:"2",ageid:"0"},{regid:"316",parid:"24",regname:"铜川市",regtype:"2",ageid:"0"},{regid:"317",parid:"24",regname:"渭南市",regtype:"2",ageid:"0"},{regid:"318",parid:"24",regname:"咸阳市",regtype:"2",ageid:"0"},{regid:"319",parid:"24",regname:"延安市",regtype:"2",ageid:"0"},{regid:"320",parid:"24",regname:"榆林市",regtype:"2",ageid:"0"},{regid:"321",parid:"25",regname:"上海市",regtype:"2",ageid:"0"},{regid:"322",parid:"26",regname:"成都市",regtype:"2",ageid:"0"},{regid:"323",parid:"26",regname:"绵阳市",regtype:"2",ageid:"0"},{regid:"324",parid:"26",regname:"阿坝市",regtype:"2",ageid:"0"},{regid:"325",parid:"26",regname:"巴中市",regtype:"2",ageid:"0"},{regid:"326",parid:"26",regname:"达州市",regtype:"2",ageid:"0"},{regid:"327",parid:"26",regname:"德阳市",regtype:"2",ageid:"0"},{regid:"328",parid:"26",regname:"甘孜市",regtype:"2",ageid:"0"},{regid:"329",parid:"26",regname:"广安市",regtype:"2",ageid:"0"},{regid:"330",parid:"26",regname:"广元市",regtype:"2",ageid:"0"},{regid:"331",parid:"26",regname:"乐山市",regtype:"2",ageid:"0"},{regid:"332",parid:"26",regname:"凉山市",regtype:"2",ageid:"0"},{regid:"333",parid:"26",regname:"眉山市",regtype:"2",ageid:"0"},{regid:"334",parid:"26",regname:"南充市",regtype:"2",ageid:"0"},{regid:"335",parid:"26",regname:"内江市",regtype:"2",ageid:"0"},{regid:"336",parid:"26",regname:"攀枝花",regtype:"2",ageid:"0"},{regid:"337",parid:"26",regname:"遂宁市",regtype:"2",ageid:"0"},{regid:"338",parid:"26",regname:"雅安市",regtype:"2",ageid:"0"},{regid:"339",parid:"26",regname:"宜宾市",regtype:"2",ageid:"0"},{regid:"340",parid:"26",regname:"资阳市",regtype:"2",ageid:"0"},{regid:"341",parid:"26",regname:"自贡市",regtype:"2",ageid:"0"},{regid:"342",parid:"26",regname:"泸州市",regtype:"2",ageid:"0"},{regid:"343",parid:"27",regname:"天津市",regtype:"2",ageid:"0"},{regid:"344",parid:"28",regname:"拉萨市",regtype:"2",ageid:"0"},{regid:"345",parid:"28",regname:"阿里市",regtype:"2",ageid:"0"},{regid:"346",parid:"28",regname:"昌都市",regtype:"2",ageid:"0"},{regid:"347",parid:"28",regname:"林芝市",regtype:"2",ageid:"0"},{regid:"348",parid:"28",regname:"那曲市",regtype:"2",ageid:"0"},{regid:"349",parid:"28",regname:"日喀则市",regtype:"2",ageid:"0"},{regid:"350",parid:"28",regname:"山南市",regtype:"2",ageid:"0"},{regid:"351",parid:"29",regname:"乌鲁木齐市",regtype:"2",ageid:"0"},{regid:"352",parid:"29",regname:"阿克苏市",regtype:"2",ageid:"0"},{regid:"353",parid:"29",regname:"阿拉尔市",regtype:"2",ageid:"0"},{regid:"354",parid:"29",regname:"巴音郭楞市",regtype:"2",ageid:"0"},{regid:"355",parid:"29",regname:"博尔塔拉市",regtype:"2",ageid:"0"},{regid:"356",parid:"29",regname:"昌吉市",regtype:"2",ageid:"0"},{regid:"357",parid:"29",regname:"哈密市",regtype:"2",ageid:"0"},{regid:"358",parid:"29",regname:"和田市",regtype:"2",ageid:"0"},{regid:"359",parid:"29",regname:"喀什市",regtype:"2",ageid:"0"},{regid:"360",parid:"29",regname:"克拉玛依市",regtype:"2",ageid:"0"},{regid:"361",parid:"29",regname:"克孜勒苏市",regtype:"2",ageid:"0"},{regid:"362",parid:"29",regname:"石河子",regtype:"2",ageid:"0"},{regid:"363",parid:"29",regname:"图木舒克市",regtype:"2",ageid:"0"},{regid:"364",parid:"29",regname:"吐鲁番市",regtype:"2",ageid:"0"},{regid:"365",parid:"29",regname:"五家渠市",regtype:"2",ageid:"0"},{regid:"366",parid:"29",regname:"伊犁市",regtype:"2",ageid:"0"},{regid:"367",parid:"30",regname:"昆明市",regtype:"2",ageid:"0"},{regid:"368",parid:"30",regname:"怒江市",regtype:"2",ageid:"0"},{regid:"369",parid:"30",regname:"普洱市",regtype:"2",ageid:"0"},{regid:"370",parid:"30",regname:"丽江市",regtype:"2",ageid:"0"},{regid:"371",parid:"30",regname:"保山市",regtype:"2",ageid:"0"},{regid:"372",parid:"30",regname:"楚雄市",regtype:"2",ageid:"0"},{regid:"373",parid:"30",regname:"大理市",regtype:"2",ageid:"0"},{regid:"374",parid:"30",regname:"德宏市",regtype:"2",ageid:"0"},{regid:"375",parid:"30",regname:"迪庆市",regtype:"2",ageid:"0"},{regid:"376",parid:"30",regname:"红河市",regtype:"2",ageid:"0"},{regid:"377",parid:"30",regname:"临沧市",regtype:"2",ageid:"0"},{regid:"378",parid:"30",regname:"曲靖市",regtype:"2",ageid:"0"},{regid:"379",parid:"30",regname:"文山市",regtype:"2",ageid:"0"},{regid:"380",parid:"30",regname:"西双版纳市",regtype:"2",ageid:"0"},{regid:"381",parid:"30",regname:"玉溪市",regtype:"2",ageid:"0"},{regid:"382",parid:"30",regname:"昭通市",regtype:"2",ageid:"0"},{regid:"383",parid:"31",regname:"杭州市",regtype:"2",ageid:"0"},{regid:"384",parid:"31",regname:"湖州市",regtype:"2",ageid:"0"},{regid:"385",parid:"31",regname:"嘉兴市",regtype:"2",ageid:"0"},{regid:"386",parid:"31",regname:"金华市",regtype:"2",ageid:"0"},{regid:"387",parid:"31",regname:"丽水市",regtype:"2",ageid:"0"},{regid:"388",parid:"31",regname:"宁波市",regtype:"2",ageid:"0"},{regid:"389",parid:"31",regname:"绍兴市",regtype:"2",ageid:"0"},{regid:"390",parid:"31",regname:"台州市",regtype:"2",ageid:"0"},{regid:"391",parid:"31",regname:"温州市",regtype:"2",ageid:"0"},{regid:"392",parid:"31",regname:"舟山市",regtype:"2",ageid:"0"},{regid:"393",parid:"31",regname:"衢州市",regtype:"2",ageid:"0"},{regid:"394",parid:"32",regname:"重庆市",regtype:"2",ageid:"0"},{regid:"395",parid:"33",regname:"香港",regtype:"2",ageid:"0"},{regid:"396",parid:"34",regname:"澳门",regtype:"2",ageid:"0"},{regid:"397",parid:"35",regname:"台湾",regtype:"2",ageid:"0"}],dateiladdress:"",area:"",addresstype:["住宅","公司","学校","其他"],addtypeindex:0,operate:!0,username:"",telphone:"",doorplate:"",usestatus:"",id:""},onLoad:function(e){"update"==e.op&&(this.setData({operate:!1}),wx.setNavigationBarTitle({title:"编辑收货地址"}),this.getUserInfo(e.addid))},onShow:function(){},bindMultiPickerChange:function(e){(vm=this).setData({"multiIndex[0]":e.detail.value[0],"multiIndex[1]":e.detail.value[1],dateiladdress:"",area:""})},bindMultiPickerColumnChange:function(e){switch(vm=this,e.detail.column){case 0:list=[];for(var r=0;r<vm.data.objectMultiArray.length;r++)vm.data.objectMultiArray[r].parid==vm.data.objectMultiArray[e.detail.value].regid&&list.push(vm.data.objectMultiArray[r].regname);vm.setData({"multiArray[1]":list,"multiIndex[0]":e.detail.value,"multiIndex[1]":0})}},ReceiptAddress:function(e){wx.navigateTo({url:"../setaddress/seladdress?city="+e.target.dataset.city})},bindPickerChange:function(e){this.setData({addtypeindex:e.detail.value})},formSubmit:function(e){wx.showLoading({title:"加载中"});var r=e.detail.value,g="/weixin/adduserinfo";e.detail.target.dataset.type&&(g="/weixin/updateuserinfo"),wx.request({url:app.globalData.httpHost+g,method:"POST",data:r,success:function(e){200==e.data.status&&"success"==e.data.message?(wx.hideLoading(),wx.navigateBack({delta:1})):e.statusCode}})},deladdress:function(e){var g=e.target.dataset.addid;wx.showModal({title:"提示",content:"您确定删除该地址吗？",success:function(e){if(e.confirm){wx.showLoading({title:"加载中"});var r=wx.getStorageSync("userinfo");g==r.id&&wx.setStorageSync("userinfo",null),wx.request({url:app.globalData.httpHost+"/weixin/deluserinfo",method:"POST",data:{id:g},success:function(e){200==e.data.status&&"success"==e.data.message?(wx.hideLoading(),wx.navigateBack({delta:1})):e.statusCode}}),wx.navigateBack({delta:1})}else e.cancel}})},getUserInfo:function(e){var r=this;wx.request({url:app.globalData.httpHost+"/weixin/getuserinfo",method:"POST",data:{addid:e},success:function(e){200==e.data.status&&"success"==e.data.message?r.setData({username:e.data.data[0].username,telphone:e.data.data[0].Telphone,doorplate:e.data.data[0].doorplate,dateiladdress:e.data.data[0].detailaddress,area:e.data.data[0].Area,addtypeindex:r.contains(r.data.addresstype,e.data.data[0].addresstype),"multiArray[1][0]":e.data.data[0].city,"multiArray[0][0]":e.data.data[0].province,usestatus:e.data.data[0].usestatus,id:e.data.data[0].id}):500==e.data.code&&r.setData({})}})},contains:function(e,r){for(var g=e.length;g--;)if(e[g]===r)return g;return!1}});