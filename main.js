//素性一覧 [レベルlv,生命力vit,精神力mnd,持久力edr,筋力str,技量dex,知力int,信仰pie,神秘mys]
const VAGABOND = [9,15,10,11,14,13,9,9,7];
const WARRIOR = [8,11,12,11,10,16,10,8,9];
const HERO = [7,14,9,12,16,9,7,8,1];
const BANDIT = [5,10,11,10,9,13,9,8,14];
const ASTROLOGER = [6,9,15,9,8,12,16,7,9];
const PROPHET = [7,10,14,8,11,10,7,16,10];
const SAMURAI = [9,12,11,13,12,15,9,8,8];
const PRISONER = [9,11,12,11,11,14,14,6,9];
const CONFESSOR = [10,10,13,10,12,12,9,14,9];
const WRETCH = [1,10,10,10,10,10,10,10,10];
var feature = new Array(9);//素性

//初期値（放浪騎士）
var para0=VAGABOND[0];
var para1=VAGABOND[1];
var para2=VAGABOND[2];
var para3=VAGABOND[3];
var para4=VAGABOND[4];
var para5=VAGABOND[5];
var para6=VAGABOND[6];
var para7=VAGABOND[7];
var para8=VAGABOND[8];
var minpara0=para0;
var minpara1=para1;
var minpara2=para2;
var minpara3=para3;
var minpara4=para4;
var minpara5=para5;
var minpara6=para6;
var minpara7=para7;
var minpara8=para8;

//HP,FP,スタミナ,重量の配列
var hpary = [0,0,0,0,0,0,0,0,0,394,
	     414,434,455,476,499,522,547,572,598,624,
	     652,680,709,738,769,800,833,870,910,951,
	     994,1037,1081,1125,1170,1216,1262,1308,1355,1402,
	     1450,1476,1503,1529,1555,1581,1606,1631,1656,1680,
	     1704,1727,1750,1772,1793,1814,1834,1853,1871,1887,
	     1900,1906,1912,1918,1924,1930,1936,1942,1948,1954,
	     1959,1965,1971,1977,1982,1988,1993,1999,2004,2010,
	     2015,2020,2026,2031,2036,2041,2046,2051,2056,2060,
	     2065,2070,2074,2078,2082,2086,2090,2094,2097,2100];

var fpary = [0,0,0,0,0,0,0,0,0,65,
	     68,71,74,77,81,84,87,90,93,96,
	     100,106,112,118,124,130,136,142,148,154,
	     160,166,172,178,184,190,196,202,208,214,
	     220,226,232,238,244,250,256,262,268,274,
	     280,288,297,305,313,321,328,335,341,346,
	     350,352,355,357,360,362,365,367,370,373,
	     375,378,380,383,385,388,391,393,396,398,
	     401,403,406,408,411,414,416,419,421,424,
	     426,429,432,434,437,439,442,444,447,450];

var stary = [0,0,0,0,0,0,0,0,90,91,
	     92,94,95,97,98,100,101,103,105,106,
	     108,110,111,113,115,116,118,120,121,123,
	     125,126,128,129,131,132,134,135,137,138,
	     140,141,143,144,146,147,149,150,152,153,
	     155,155,155,155,156,156,156,157,157,157,
	     158,158,158,158,159,159,159,160,160,160,
	     161,161,161,162,162,162,162,163,163,163,
	     164,164,164,165,165,165,166,166,166,166,
	     167,167,167,168,168,168,169,169,169,170];

var cpary = [0,0,0,0,0,0,0,0,450,466,
	     482,498,514,529,545,561,577,593,609,625,
	     641,656,672,688,704,720,730,741,752,764,
	     776,789,802,815,828,841,854,868,881,895,
	     909,923,937,951,965,979,994,1008,1022,1037,
	     1052,1066,1081,1096,1110,1125,1140,1155,1170,1185,
	     1200,1210,1221,1231,1241,1251,1262,1272,1282,1292,
	     1303,1313,1323,1333,1344,1354,1364,1374,1385,1395,
	     1405,1415,1426,1436,1446,1456,1467,1477,1487,1497,
	     1508,1518,1528,1538,1549,1559,1569,1579,1590,160];



//初期ステータスを代入
function addPar(status)
{

	for(let i = 0;i < 9;i++)
	{
		feature[i] = status[i];
	}
	return feature;
}


//素性選択
$(function(){
	$("#classselect").selectmenu({
		select:function(event,ui){
	  		var lvObj=document.getElementById("lv");
			val=$("select[name='classselect']").val();
			switch(val){
				case '1':
					addPar(VAGABOND);//放浪騎士のステータスを配列に代入
					break;
				case '2':
					addPar(WARRIOR);;//剣士のステータスを配列に代入
					break;
				case '3':
					addPar(HERO);//勇者のステータスを配列に代入
					break;
				case '4':
					addPar(BANDIT);//盗賊のステータスを配列に代入
					break;
				case '5':
					addPar(ASTROLOGER);//星見のステータスを配列に代入
					break;
				case '6':
					addPar(PROPHET);//預言者のステータスを配列に代入
					break;
				case '7':
					addPar(SAMURAI);//侍のステータスを配列に代入
					break;
				case '8':
					addPar(PRISONER);//囚人のステータスを配列に代入
					break;
				case '9':
					addPar(CONFESSOR);//密使のステータスを配列に代入
					break;
				case '10':
					addPar(WRETCH);//素寒貧のステータスを配列に代入
			}
			//値を設定
			para0=feature[0];
			para1=feature[1];
			para2=feature[2];
			para3=feature[3];
			para4=feature[4];
			para5=feature[5];
			para6=feature[6];
			para7=feature[7];
			para8=feature[8];
			//最低値の設定
			minpara0=para0;
			minpara1=para1;
			minpara2=para2;
			minpara3=para3;
			minpara4=para4;
			minpara5=para5;
			minpara6=para6;
			minpara7=para7;
			minpara8=para8;
			//値を反映
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			$("#vit").spinner({max:99,min:para1}).spinner("value",para1);
			$("#mnd").spinner({max:99,min:para2}).spinner("value",para2);
			$("#edr").spinner({max:99,min:para3}).spinner("value",para3);
			$("#str").spinner({max:99,min:para4}).spinner("value",para4);
			$("#dex").spinner({max:99,min:para5}).spinner("value",para5);
			$("#int").spinner({max:99,min:para6}).spinner("value",para6);
			$("#pie").spinner({max:99,min:para7}).spinner("value",para7);
			$("#mys").spinner({max:99,min:para8}).spinner("value",para8);
			hpfunc($("#vit").spinner("value"));
			fpfunc($("#mnd").spinner("value"));
			stfunc($("#edr").spinner("value"));
			cpfunc($("#edr").spinner("value"));
		}
	});
});


$(function(){
	var var1;
	var var2;
	var lvObj=document.getElementById("lv");
	//生命力
	$("#vit").spinner({max:99,min:para1,
		start:function(event,ui){
			var1=$("#vit").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#vit").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			hpfunc($("#vit").spinner("value"));
		}
	}).spinner("value",para1);
	//精神力
	$("#mnd").spinner({max:99,min:para2,
		start:function(event,ui){
			var1=$("#mnd").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#mnd").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			fpfunc($("#mnd").spinner("value"));
		}
	}).spinner("value",para2);
	//持久力
	$("#edr").spinner({max:99,min:para3,
		start:function(event,ui){
			var1=$("#edr").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#edr").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			stfunc($("#edr").spinner("value"));
			cpfunc($("#edr").spinner("value"));
		}
	}).spinner("value",para3);
	//筋力
	$("#str").spinner({max:99,min:para4,
		start:function(event,ui){
			var1=$("#str").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#str").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
		}
	}).spinner("value",para4);
	//技量
	$("#dex").spinner({max:99,min:para5,
		start:function(event,ui){
			var1=$("#dex").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#dex").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
		}
	}).spinner("value",para5);
	//知力
	$("#int").spinner({max:99,min:para6,
		start:function(event,ui){
			var1=$("#int").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#int").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
		}
	}).spinner("value",para6);
	//信仰
	$("#pie").spinner({max:99,min:para7,
		start:function(event,ui){
			var1=$("#pie").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#pie").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
		}
	}).spinner("value",para7);
	//神秘
	$("#mys").spinner({max:99,min:para8,
		start:function(event,ui){
			var1=$("#mys").spinner("value");
		},
		stop:function(event,ui){
			var2=$("#mys").spinner("value");
			switch(var2-var1){
				case 1:
					++para0;break;
				case -1:
					--para0;break;
			}
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
		}
	}).spinner("value",para8);
});

//10ずつ変化
$(function(){
	var lvObj=document.getElementById("lv");
	$("#tenup1")
     	.button()
		.click(function() {
			if($("#vit").spinner("value")<90){
				$("#vit").spinner("value",$("#vit").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
				hpfunc($("#vit").spinner("value"));
			}
 		});
	$("#tendown1")
     	.button()
		.click(function() {
			if($("#vit").spinner("value")>=minpara1+10){
				$("#vit").spinner("value",$("#vit").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
				hpfunc($("#").spinner("value"));
			}
 		});
	$("#tenup2")
     	.button()
		.click(function() {
			if($("#mnd").spinner("value")<90){
				$("#mnd").spinner("value",$("#mnd").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
				fpfunc($("#mnd").spinner("value"));
			}
 		});
	$("#tendown2")
     	.button()
		.click(function() {
			if($("#mnd").spinner("value")>=minpara2+10){
				$("#mnd").spinner("value",$("#mnd").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
				fpfunc($("#mnd").spinner("value"));
			}
 		});
	$("#tenup3")
     	.button()
		.click(function() {
			if($("#edr").spinner("value")<90){
				$("#edr").spinner("value",$("#edr").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
				stfunc($("#edr").spinner("value"));
				cpfunc($("#edr").spinner("value"));
			}
 		});
	$("#tendown3")
     	.button()
		.click(function() {
			if($("#edr").spinner("value")>=minpara3+10){
				$("#edr").spinner("value",$("#edr").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
				stfunc($("#edr").spinner("value"));
				cpfunc($("#edr").spinner("value"));
			}
 		});
	$("#tenup4")
     	.button()
		.click(function() {
			if($("#str").spinner("value")<90){
				$("#str").spinner("value",$("#str").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown4")
     	.button()
		.click(function() {
			if($("#str").spinner("value")>=minpara4+10){
				$("#str").spinner("value",$("#str").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tenup5")
     	.button()
		.click(function() {
			if($("#dex").spinner("value")<90){
				$("#dex").spinner("value",$("#dex").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown5")
     	.button()
		.click(function() {
			if($("#dex").spinner("value")>=minpara5+10){
				$("#dex").spinner("value",$("#dex").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tenup6")
     	.button()
		.click(function() {
			if($("#int").spinner("value")<90){
				$("#int").spinner("value",$("#int").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown6")
     	.button()
		.click(function() {
			if($("#int").spinner("value")>=minpara6+10){
				$("#int").spinner("value",$("#int").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tenup7")
     	.button()
		.click(function() {
			if($("#pie").spinner("value")<90){
				$("#pie").spinner("value",$("#pie").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown7")
     	.button()
		.click(function() {
			if($("#pie").spinner("value")>=minpara7+10){
				$("#pie").spinner("value",$("#pie").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tenup8")
     	.button()
		.click(function() {
			if($("#mys").spinner("value")<90){
				$("#mys").spinner("value",$("#mys").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown8")
     	.button()
		.click(function() {
			if($("#mys").spinner("value")>=minpara8+10){
				$("#mys").spinner("value",$("#mys").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
 });
//HP変化
function hpfunc(val) {
	var chObj=document.getElementById("hp");
	chObj.innerHTML='<span id="hp">'+hpary[val]+'</span>';
}
//FP変化
function fpfunc(val) {
	var chObj=document.getElementById("fp");
	chObj.innerHTML='<span id="fp">'+fpary[val]+'</span>';
}
//スタミナ変化
function stfunc(val) {
	var chObj=document.getElementById("st");
	chObj.innerHTML='<span id="st">'+stary[val]+'</span>';
}
//重量変化
function cpfunc(val) {
	var chObj=document.getElementById("cp");
	chObj.innerHTML='<span id="cp">'+cpary[val]/10+'</span>';
}
