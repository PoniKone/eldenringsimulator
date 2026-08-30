//============================================================
// ELDENRING パラメータシミュレータ
// 素性を追加するときは CLASSES に1行足すだけでOK
//============================================================

//素性一覧 [レベルlv,生命力vit,精神力mnd,持久力edr,筋力str,技量dex,知力int,信仰pie,神秘mys]
const CLASSES = [
	{ name: '放浪騎士',       stats: [ 9,15,10,11,14,13, 9, 9, 7] },
	{ name: '剣士',           stats: [ 8,11,12,11,10,16,10, 8, 9] },
	{ name: '勇者',           stats: [ 7,14, 9,12,16, 9, 7, 8,11] },
	{ name: '盗賊',           stats: [ 5,10,11,10, 9,13, 9, 8,14] },
	{ name: '星見',           stats: [ 6, 9,15, 9, 8,12,16, 7, 9] },
	{ name: '預言者',         stats: [ 7,10,14, 8,11,10, 7,16,10] },
	{ name: '侍',             stats: [ 9,12,11,13,12,15, 9, 8, 8] },
	{ name: '囚人',           stats: [ 9,11,12,11,11,14,14, 6, 9] },
	{ name: '密使',           stats: [10,10,13,10,12,12, 9,14, 9] },
	{ name: '素寒貧',         stats: [ 1,10,10,10,10,10,10,10,10] },
	// Tarnished Pack (Ver.1.17 / 2026-08-28) で追加
	{ name: 'イデスの騎士',   stats: [ 7,10,12,11,13,15, 8,11, 6] },
	{ name: '重装騎士',       stats: [10,14, 8,17,15,11, 7, 8, 9] }
];

//能力値の定義（CLASSES の stats の並びと対応。index 0 はレベル）
const STATS = [
	{ key: 'vit', label: '生命' },
	{ key: 'mnd', label: '精神' },
	{ key: 'edr', label: '持久' },
	{ key: 'str', label: '筋力' },
	{ key: 'dex', label: '技量' },
	{ key: 'int', label: '知力' },
	{ key: 'pie', label: '信仰' },
	{ key: 'mys', label: '神秘' }
];

const MAX_STAT = 99;
const MAX_LEVEL = 713;
const STORAGE_KEY = 'eldenring-simulator-state';

//------------------------------------------------------------
// 派生ステータス表（添字＝能力値 1〜99。0番は未使用）
//------------------------------------------------------------
//HP（生命力）
const HP = [0,
	 300, 304, 312, 322, 334, 347, 362, 378, 396, 414,
	 434, 455, 476, 499, 522, 547, 572, 598, 624, 652,
	 680, 709, 738, 769, 800, 833, 870, 910, 951, 994,
	1037,1081,1125,1170,1216,1262,1308,1355,1402,1450,
	1476,1503,1529,1555,1581,1606,1631,1656,1680,1704,
	1727,1750,1772,1793,1814,1834,1853,1871,1887,1900,
	1906,1912,1918,1924,1930,1936,1942,1948,1954,1959,
	1965,1971,1977,1982,1988,1993,1999,2004,2010,2015,
	2020,2026,2031,2036,2041,2046,2051,2056,2060,2065,
	2070,2074,2078,2082,2086,2090,2094,2097,2100];

//FP（精神力）
const FP = [0,
	  50,  53,  56,  59,  62,  66,  69,  72,  75,  78,
	  82,  85,  88,  91,  95, 100, 105, 110, 116, 121,
	 126, 131, 137, 142, 147, 152, 158, 163, 168, 173,
	 179, 184, 189, 194, 200, 207, 214, 221, 228, 235,
	 242, 248, 255, 262, 268, 275, 281, 287, 293, 300,
	 305, 311, 317, 322, 328, 333, 338, 342, 346, 350,
	 352, 355, 357, 360, 362, 365, 367, 370, 373, 375,
	 378, 380, 383, 385, 388, 391, 393, 396, 398, 401,
	 403, 406, 408, 411, 414, 416, 419, 421, 424, 426,
	 429, 432, 434, 437, 439, 442, 444, 447, 450];

//スタミナ（持久力）
const STAMINA = [0,
	  80,  81,  83,  85,  87,  88,  90,  92,  94,  96,
	  97,  99, 101, 103, 105, 106, 108, 110, 111, 113,
	 115, 116, 118, 120, 121, 123, 125, 126, 128, 130,
	 131, 132, 133, 135, 136, 137, 138, 140, 141, 142,
	 143, 145, 146, 147, 148, 150, 151, 152, 153, 155,
	 155, 155, 155, 156, 156, 156, 157, 157, 157, 158,
	 158, 158, 158, 159, 159, 159, 160, 160, 160, 161,
	 161, 161, 162, 162, 162, 162, 163, 163, 163, 164,
	 164, 164, 165, 165, 165, 166, 166, 166, 166, 167,
	 167, 167, 168, 168, 168, 169, 169, 169, 170];

//装備重量（持久力）※10倍の整数で保持
const EQUIP = [0,
	 450, 450, 450, 450, 450, 450, 450, 450, 466, 482,
	 498, 514, 529, 545, 561, 577, 593, 609, 625, 641,
	 656, 672, 688, 704, 720, 730, 741, 752, 764, 776,
	 789, 802, 815, 828, 841, 854, 868, 881, 895, 909,
	 923, 937, 951, 965, 979, 994,1008,1022,1037,1052,
	1066,1081,1096,1110,1125,1140,1155,1170,1185,1200,
	1210,1221,1231,1241,1251,1262,1272,1282,1292,1303,
	1313,1323,1333,1344,1354,1364,1374,1385,1395,1405,
	1415,1426,1436,1446,1456,1467,1477,1487,1497,1508,
	1518,1528,1538,1549,1559,1569,1579,1590,1600];

//------------------------------------------------------------
// 計算式
//------------------------------------------------------------
//レベルアップに必要なルーン（lvl → lvl+1）
//本来の式は floor((max(0,(n-92)*0.02) + 0.1) * n^2 + 1) だが、
//0.02 と 0.1 の誤差で切り捨てが1ずれる場合があるので100倍した整数で計算する
function runeCost(lvl) {
	var n = lvl + 81;
	var k = Math.max(10, 2 * n - 174);
	return Math.floor(k * n * n / 100) + 1;
}

//fromLv から toLv までの累計必要ルーン
function runeTotal(fromLv, toLv) {
	var sum = 0;
	for (var i = fromLv; i < toLv; i++) sum += runeCost(i);
	return sum;
}

//ローリングの種類が変わる装備重量の上限（0.1刻み）
//maxTenths / ratioTenths ともに10倍の整数。軽ロリなら ratioTenths = 3（＝30%）
//ちょうど境界に乗る場合は、軽い方に倒さず1段下げて安全側に寄せる
//（境界ぴったりが軽ロリ側か中ロリ側かは資料によって記述が割れているため）
function loadLimit(maxTenths, ratioTenths) {
	var n = maxTenths * ratioTenths;
	return n % 10 === 0 ? n / 10 - 1 : Math.floor(n / 10);
}

//耐性のレベル依存分（免疫・頑健・正気・抗死で共通）
function resistByLevel(lvl) {
	var n = lvl + 79;
	if (lvl <= 71)  return  75 + 30 * ((n -   1) / 149);
	if (lvl <= 111) return 105 + 40 * ((n - 150) /  40);
	if (lvl <= 161) return 145 + 15 * ((n - 190) /  50);
	return                  160 + 20 * ((n - 240) / 552);
}

//耐性の能力値依存分（免疫←生命力 / 頑健←持久力 / 正気←精神力）
function resistByStat(v) {
	if (v <= 30) return 0;
	if (v <= 40) return      30 * ((v - 30) / 10);
	if (v <= 60) return 30 + 10 * ((v - 40) / 20);
	return              40 + 10 * ((v - 60) / 39);
}

//抗死の能力値依存分（←神秘。ソフトキャップの位置が他と違う）
function resistByArcane(v) {
	if (v <= 15) return v;
	if (v <= 40) return 15 + 15 * ((v - 15) / 25);
	if (v <= 60) return 30 + 10 * ((v - 40) / 20);
	return              40 + 10 * ((v - 60) / 39);
}

//------------------------------------------------------------
// 状態
//------------------------------------------------------------
var ready = false;                 //スピナー初期化完了フラグ
var classIndex = 0;                //選択中の素性
var baseStats = CLASSES[0].stats;  //初期値（＝各能力値の下限）

function $stat(key) { return $('#' + key); }
function baseOf(key) {
	return baseStats[STATS.findIndex(function(s){ return s.key === key; }) + 1];
}

//直接入力された値を [初期値, 99] に丸める（jQuery UI spinner は入力値を丸めてくれない）
var clamping = false;
function clampInput(key) {
	if (clamping) return;
	clamping = true;
	var el = $stat(key);
	var min = baseOf(key);
	var raw = parseInt(el.val(), 10);
	if (isNaN(raw)) raw = min;
	el.spinner('value', Math.min(MAX_STAT, Math.max(min, raw)));
	clamping = false;
}

function setText(id, text) {
	document.getElementById(id).textContent = text;
}

//現在値を取得（spin 中は確定前の値を override で受け取る）
function valueOf(key, overrideKey, overrideVal) {
	return key === overrideKey ? overrideVal : $stat(key).spinner('value');
}

//レベル＝素性の初期レベル＋振った合計。差分ではなく毎回計算し直す
function refresh(overrideKey, overrideVal) {
	if (!ready) return;
	var cur = {};
	var level = baseStats[0];
	STATS.forEach(function(s, i) {
		cur[s.key] = valueOf(s.key, overrideKey, overrideVal);
		level += cur[s.key] - baseStats[i + 1];
	});

	setText('lv', level);
	setText('hp', HP[cur.vit]);
	setText('fp', FP[cur.mnd]);
	setText('st', STAMINA[cur.edr]);
	var maxLoad = EQUIP[cur.edr];
	setText('cp', (maxLoad / 10).toFixed(1));

	//ローリング（軽ロリは最大重量の30%未満、中ロリは70%未満）
	setText('rl1', (loadLimit(maxLoad, 3) / 10).toFixed(1));
	setText('rl2', (loadLimit(maxLoad, 7) / 10).toFixed(1));

	//耐性（防具なしの素の値）
	var lvPart = resistByLevel(level);
	setText('imn', Math.floor(lvPart + resistByStat(cur.vit)));
	setText('rbs', Math.floor(lvPart + resistByStat(cur.edr)));
	setText('fcs', Math.floor(lvPart + resistByStat(cur.mnd)));
	setText('dth', Math.floor(lvPart + resistByArcane(cur.mys)));

	//必要ルーン
	setText('rune', runeTotal(baseStats[0], level).toLocaleString());
	setText('runenext', level < MAX_LEVEL ? runeCost(level).toLocaleString() : '—');

	saveState(cur);
}

//素性の切り替え（能力値は初期値に戻す）
function applyClass(index) {
	classIndex = index;
	baseStats = CLASSES[index].stats;
	STATS.forEach(function(s, i) {
		var base = baseStats[i + 1];
		$stat(s.key).spinner('option', 'min', base).spinner('value', base);
	});
	refresh();
}

//10UP / 10DOWN（99 や下限に張り付いた分もレベルへ正しく反映する）
function step(key, delta) {
	var el = $stat(key);
	var min = baseOf(key);
	var now = el.spinner('value');
	var next = Math.min(MAX_STAT, Math.max(min, now + delta));
	if (next === now) return;
	el.spinner('value', next);
	refresh();
}

//------------------------------------------------------------
// URL共有 / 保存
//------------------------------------------------------------
//現在の状態を URL のハッシュと localStorage に書き出す
function saveState(cur) {
	var hash = '#c=' + classIndex + '&s=' +
		STATS.map(function(s){ return cur[s.key]; }).join('.');
	if (location.hash !== hash) {
		try {
			history.replaceState(null, '', location.pathname + location.search + hash);
		} catch (e) {
			//file:// で開いた場合など replaceState が拒否される環境がある
		}
	}
	try {
		localStorage.setItem(STORAGE_KEY, hash);
	} catch (e) {
		//プライベートモード等で保存できなくても動作に支障はないので握りつぶす
	}
}

//"#c=0&s=15.10.11.14.13.9.9.7" を解釈する。壊れていれば null
function parseState(hash) {
	var m = /^#c=(\d+)&s=([\d.]+)$/.exec(hash || '');
	if (!m) return null;
	var ci = parseInt(m[1], 10);
	if (!CLASSES[ci]) return null;
	var vals = m[2].split('.').map(function(v){ return parseInt(v, 10); });
	if (vals.length !== STATS.length) return null;
	var base = CLASSES[ci].stats;
	for (var i = 0; i < vals.length; i++) {
		if (isNaN(vals[i]) || vals[i] < base[i + 1] || vals[i] > MAX_STAT) return null;
	}
	return { classIndex: ci, values: vals };
}

//URL → localStorage → 素性の初期値、の優先順で復元
function restoreState() {
	var state = parseState(location.hash);
	if (!state) {
		try {
			state = parseState(localStorage.getItem(STORAGE_KEY));
		} catch (e) {
			state = null;
		}
	}
	if (!state) return;

	classIndex = state.classIndex;
	baseStats = CLASSES[classIndex].stats;
	$('#classselect').val(classIndex);
	STATS.forEach(function(s, i) {
		$stat(s.key)
			.spinner('option', 'min', baseStats[i + 1])
			.spinner('value', state.values[i]);
	});
}

//クリップボードAPIが使えない・拒否された場合のフォールバック
function legacyCopy(text) {
	var tmp = document.createElement('textarea');
	tmp.value = text;
	tmp.setAttribute('readonly', '');
	tmp.style.position = 'fixed';
	tmp.style.top = '0';
	tmp.style.opacity = '0';
	document.body.appendChild(tmp);
	tmp.select();
	if (tmp.setSelectionRange) tmp.setSelectionRange(0, text.length);
	var ok = false;
	try {
		ok = document.execCommand('copy');
	} catch (e) {
		ok = false;
	}
	document.body.removeChild(tmp);
	return ok;
}

//URLをクリップボードへ
//スマホではクリップボードAPIが拒否されることがあるので、
//失敗したらURLを入力欄に出して手動でコピーできるようにする
function copyUrl() {
	var msg = document.getElementById('sharemsg');
	var field = document.getElementById('shareurl');
	var url = location.href;
	field.value = url;

	function done(ok) {
		if (ok) {
			field.style.display = 'none';
			msg.textContent = 'URLをコピーしました';
			setTimeout(function(){ msg.textContent = ''; }, 2000);
		} else {
			field.style.display = 'block';
			field.focus();
			field.select();
			msg.textContent = '下のURLを選択してコピーしてください';
		}
	}
	if (navigator.clipboard && window.isSecureContext) {
		navigator.clipboard.writeText(url)
			.then(function(){ done(true); })
			.catch(function(){ done(legacyCopy(url)); });
		return;
	}
	done(legacyCopy(url));
}

//------------------------------------------------------------
// 初期化
//------------------------------------------------------------
$(function() {
	//素性のプルダウンを CLASSES から生成
	var $select = $('#classselect');
	$select.empty();
	CLASSES.forEach(function(cls, i) {
		$select.append($('<option>').val(i).text(cls.name));
	});

	//能力値スピナー
	STATS.forEach(function(s, i) {
		$stat(s.key).spinner({
			min: baseStats[i + 1],
			max: MAX_STAT,
			spin: function(event, ui) { refresh(s.key, ui.value); },
			change: function() { clampInput(s.key); refresh(); },
			stop: function() { refresh(); }
		}).spinner('value', baseStats[i + 1]);
	});

	//10UP / 10DOWN ボタン
	STATS.forEach(function(s, i) {
		$('#tenup' + (i + 1)).button().on('click', function() { step(s.key, 10); });
		$('#tendown' + (i + 1)).button().on('click', function() { step(s.key, -10); });
	});

	//URL・localStorage から復元
	restoreState();

	//素性選択
	//jQuery UI の selectmenu はタッチで開かないため、ネイティブの select をそのまま使う
	$select.on('change', function() {
		applyClass(parseInt(this.value, 10));
	});

	//共有・リセット
	$('#share').button().on('click', copyUrl);
	$('#reset').button().on('click', function() { applyClass(classIndex); });

	ready = true;
	refresh();
});
