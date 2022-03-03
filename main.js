//素性一覧 [レベルlv,生命力vit,精神力mnd,持久力edr,筋力str,技量dex,知力int,信仰pie,神秘mys]
const VAGABOND = [9,15,10,11,14,13,9,9,7];
const WARRIOR = [8,11,12,11,10,16,10,8,9];
const HERO = [7,14,9,12,16,9,7,8,14];
const BANDIT = [5,10,11,10,9,13,0,8,14];
const ASTROLOGER = [6,9,15,9,8,12,16,7,9];
const PROPHET = [7,10,14,8,11,10,7,16,10];
const SAMURAI = [9,12,11,13,12,15,9,8,8];
const PRISONER = [9,11,12,11,11,14,14,6,9];
const CONFESSOR = [10,10,13,10,12,12,9,14,9];
const WRETCH = [1,10,10,10,10,10,10,10,10];
var feature = new Array(9);//素性

//初期値（放浪騎士）
var para0=VAGABOND[0];
var para1_min=VAGABOND[1];
var para2_min=VAGABOND[2];
var para3_min=VAGABOND[3];
var para4_min=VAGABOND[4];
var para5_min=VAGABOND[5];
var para6_min=VAGABOND[6];
var para7_min=VAGABOND[7];
var para8_min=VAGABOND[8];





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
			para1_min=feature[1];
			para2_min=feature[2];
			para3_min=feature[3];
			para4_min=feature[4];
			para5_min=feature[5];
			para6_min=feature[6];
			para7_min=feature[7];
			para8_min=feature[8];
			//値を反映
			lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			$("#vit").spinner({max:99,min:para1_min}).spinner("value",para1_min);
			$("#mnd").spinner({max:99,min:para2_min}).spinner("value",para2_min);
			$("#edr").spinner({max:99,min:para3_min}).spinner("value",para3_min);
			$("#str").spinner({max:99,min:para4_min}).spinner("value",para4_min);
			$("#dex").spinner({max:99,min:para5_min}).spinner("value",para5_min);
			$("#int").spinner({max:99,min:para6_min}).spinner("value",para6_min);
			$("#pie").spinner({max:99,min:para7_min}).spinner("value",para7_min);
			$("#mys").spinner({max:99,min:para8_min}).spinner("value",para8_min);
		}
	});
});


$(function(){
	var var1;
	var var2;
	var lvObj=document.getElementById("lv");
	//生命力
	$("#vit").spinner({max:99,min:para1_min,
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
//			hpfunc($("#str").spinner("value"));
		}
	}).spinner("value",para1_min);
	//精神力
	$("#mnd").spinner({max:99,min:para2_min,
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
		}
	}).spinner("value",para2_min);
	//持久力
	$("#edr").spinner({max:99,min:para3_min,
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
		}
	}).spinner("value",para3_min);
	//筋力
	$("#str").spinner({max:99,min:para4_min,
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
	}).spinner("value",para4_min);
	//技量
	$("#dex").spinner({max:99,min:para5_min,
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
	}).spinner("value",para5_min);
	//知力
	$("#int").spinner({max:99,min:para6_min,
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
	}).spinner("value",para6_min);
	//信仰
	$("#pie").spinner({max:99,min:para7_min,
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
	}).spinner("value",para7_min);
	//神秘
	$("#mys").spinner({max:99,min:para8_min,
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
	}).spinner("value",para8_min);
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
//				hpfunc($("#str").spinner("value"));
			}
 		});
	$("#tendown1")
     	.button()
		.click(function() {
			if($("#vit").spinner("value")>24){
				$("#vit").spinner("value",$("#vit").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tenup2")
     	.button()
		.click(function() {
			if($("#mnd").spinner("value")<90){
				$("#mnd").spinner("value",$("#mnd").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown2")
     	.button()
		.click(function() {
			if($("#mnd").spinner("value")>26){
				$("#mnd").spinner("value",$("#mnd").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tenup3")
     	.button()
		.click(function() {
			if($("#edr").spinner("value")<90){
				$("#edr").spinner("value",$("#edr").spinner("value")+10);
				para0=para0+10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
	$("#tendown3")
     	.button()
		.click(function() {
			if($("#edr").spinner("value")>22){
				$("#edr").spinner("value",$("#edr").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
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
			if($("#str").spinner("value")>25){
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
			if($("#dex").spinner("value")>26){
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
			if($("#int").spinner("value")>26){
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
			if($("#pie").spinner("value")>26){
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
			if($("#mys").spinner("value")>26){
				$("#mys").spinner("value",$("#mys").spinner("value")-10);
				para0=para0-10;
				lvObj.innerHTML='<span id="lv">'+para0+'</span>';
			}
 		});
 });