let romaji_kana_table = {};

gojuon_kana_table = {
    'a': {'hebon_romaji': 'a', 'kunrei_romaji': 'a', 'hiragana': 'あ', 'katakana': 'ア'},
    'i': {'hebon_romaji': 'i', 'kunrei_romaji': 'i', 'hiragana': 'い', 'katakana': 'イ'},
    'u': {'hebon_romaji': 'u', 'kunrei_romaji': 'u', 'hiragana': 'う', 'katakana': 'ウ'},
    'e': {'hebon_romaji': 'e', 'kunrei_romaji': 'e', 'hiragana': 'え', 'katakana': 'エ'},
    'o': {'hebon_romaji': 'o', 'kunrei_romaji': 'o', 'hiragana': 'お', 'katakana': 'オ'},
    'ka': {'hebon_romaji': 'ka', 'kunrei_romaji': 'ka', 'hiragana': 'か', 'katakana': 'カ'},
    'ki': {'hebon_romaji': 'ki', 'kunrei_romaji': 'ki', 'hiragana': 'き', 'katakana': 'キ'},
    'ku': {'hebon_romaji': 'ku', 'kunrei_romaji': 'ku', 'hiragana': 'く', 'katakana': 'ク'},
    'ke': {'hebon_romaji': 'ke', 'kunrei_romaji': 'ke', 'hiragana': 'け', 'katakana': 'ケ'},
    'ko': {'hebon_romaji': 'ko', 'kunrei_romaji': 'ko', 'hiragana': 'こ', 'katakana': 'コ'},
    'sa': {'hebon_romaji': 'sa', 'kunrei_romaji': 'sa', 'hiragana': 'さ', 'katakana': 'サ'},
    'si': {'hebon_romaji': 'shi', 'kunrei_romaji': 'si', 'hiragana': 'し', 'katakana': 'シ'},
    'su': {'hebon_romaji': 'su', 'kunrei_romaji': 'su', 'hiragana': 'す', 'katakana': 'ス'},
    'se': {'hebon_romaji': 'se', 'kunrei_romaji': 'se', 'hiragana': 'せ', 'katakana': 'セ'},
    'so': {'hebon_romaji': 'so', 'kunrei_romaji': 'so', 'hiragana': 'そ', 'katakana': 'ソ'},
    'ta': {'hebon_romaji': 'ta', 'kunrei_romaji': 'ta', 'hiragana': 'た', 'katakana': 'タ'},
    'ti': {'hebon_romaji': 'chi', 'kunrei_romaji': 'ti', 'hiragana': 'ち', 'katakana': 'チ'},
    'tu': {'hebon_romaji': 'tsu', 'kunrei_romaji': 'tu', 'hiragana': 'つ', 'katakana': 'ツ'},
    'te': {'hebon_romaji': 'te', 'kunrei_romaji': 'te', 'hiragana': 'て', 'katakana': 'テ'},
    'to': {'hebon_romaji': 'to', 'kunrei_romaji': 'to', 'hiragana': 'と', 'katakana': 'ト'},
    'na': {'hebon_romaji': 'na', 'kunrei_romaji': 'na', 'hiragana': 'な', 'katakana': 'ナ'},
    'ni': {'hebon_romaji': 'ni', 'kunrei_romaji': 'ni', 'hiragana': 'に', 'katakana': 'ニ'},
    'nu': {'hebon_romaji': 'nu', 'kunrei_romaji': 'nu', 'hiragana': 'ぬ', 'katakana': 'ヌ'},
    'ne': {'hebon_romaji': 'ne', 'kunrei_romaji': 'ne', 'hiragana': 'ね', 'katakana': 'ネ'},
    'no': {'hebon_romaji': 'no', 'kunrei_romaji': 'no', 'hiragana': 'の', 'katakana': 'ノ'},
    'ha': {'hebon_romaji': 'ha', 'kunrei_romaji': 'ha', 'hiragana': 'は', 'katakana': 'ハ'},
    'hi': {'hebon_romaji': 'hi', 'kunrei_romaji': 'hi', 'hiragana': 'ひ', 'katakana': 'ヒ'},
    'hu': {'hebon_romaji': 'fu', 'kunrei_romaji': 'hu', 'hiragana': 'ふ', 'katakana': 'フ'},
    'he': {'hebon_romaji': 'he', 'kunrei_romaji': 'he', 'hiragana': 'へ', 'katakana': 'ヘ'},
    'ho': {'hebon_romaji': 'ho', 'kunrei_romaji': 'ho', 'hiragana': 'ほ', 'katakana': 'ホ'},
    'ma': {'hebon_romaji': 'ma', 'kunrei_romaji': 'ma', 'hiragana': 'ま', 'katakana': 'マ'},
    'mi': {'hebon_romaji': 'mi', 'kunrei_romaji': 'mi', 'hiragana': 'み', 'katakana': 'ミ'},
    'mu': {'hebon_romaji': 'mu', 'kunrei_romaji': 'mu', 'hiragana': 'む', 'katakana': 'ム'},
    'me': {'hebon_romaji': 'me', 'kunrei_romaji': 'me', 'hiragana': 'め', 'katakana': 'メ'},
    'mo': {'hebon_romaji': 'mo', 'kunrei_romaji': 'mo', 'hiragana': 'も', 'katakana': 'モ'},
    'ya': {'hebon_romaji': 'ya', 'kunrei_romaji': 'ya', 'hiragana': 'や', 'katakana': 'ヤ'},
    // 'yi': {'hebon_romaji': 'yi', 'kunrei_romaji': 'yi', 'hiragana': '', 'katakana': ''},
    'yu': {'hebon_romaji': 'yu', 'kunrei_romaji': 'yu', 'hiragana': 'ゆ', 'katakana': 'ユ'},
    // 'ye': {'hebon_romaji': 'ye', 'kunrei_romaji': 'ye', 'hiragana': '', 'katakana': ''},
    'yo': {'hebon_romaji': 'yo', 'kunrei_romaji': 'yo', 'hiragana': 'よ', 'katakana': 'ヨ'},
    'ra': {'hebon_romaji': 'ra', 'kunrei_romaji': 'ra', 'hiragana': 'ら', 'katakana': 'ラ'},
    'ri': {'hebon_romaji': 'ri', 'kunrei_romaji': 'ri', 'hiragana': 'り', 'katakana': 'リ'},
    'ru': {'hebon_romaji': 'ru', 'kunrei_romaji': 'ru', 'hiragana': 'る', 'katakana': 'ル'},
    're': {'hebon_romaji': 're', 'kunrei_romaji': 're', 'hiragana': 'れ', 'katakana': 'レ'},
    'ro': {'hebon_romaji': 'ro', 'kunrei_romaji': 'ro', 'hiragana': 'ろ', 'katakana': 'ロ'},
    'wa': {'hebon_romaji': 'wa', 'kunrei_romaji': 'wa', 'hiragana': 'わ', 'katakana': 'ワ'},
    // 'wi': {'hebon_romaji': 'wi', 'kunrei_romaji': 'wi', 'hiragana': 'ゐ', 'katakana': 'ヰ'},
    // 'wu': {'hebon_romaji': 'wu', 'kunrei_romaji': 'wu', 'hiragana': '', 'katakana': ''},
    // 'we': {'hebon_romaji': 'we', 'kunrei_romaji': 'we', 'hiragana': 'ゑ', 'katakana': 'ヱ'},
    'wo': {'hebon_romaji': 'wo', 'kunrei_romaji': 'wo', 'hiragana': 'を', 'katakana': 'ヲ'},
    'n': {'hebon_romaji': 'n', 'kunrei_romaji': 'n', 'hiragana': 'ん', 'katakana': 'ン'},
};

dakuon_handakuon_kana_table = {
    'ga': {'hebon_romaji': 'ga', 'kunrei_romaji': 'ga', 'hiragana': 'が', 'katakana': 'ガ'},
    'gi': {'hebon_romaji': 'gi', 'kunrei_romaji': 'gi', 'hiragana': 'ぎ', 'katakana': 'ギ'},
    'gu': {'hebon_romaji': 'gu', 'kunrei_romaji': 'gu', 'hiragana': 'ぐ', 'katakana': 'グ'},
    'ge': {'hebon_romaji': 'ge', 'kunrei_romaji': 'ge', 'hiragana': 'げ', 'katakana': 'ゲ'},
    'go': {'hebon_romaji': 'go', 'kunrei_romaji': 'go', 'hiragana': 'ご', 'katakana': 'ゴ'},
    'za': {'hebon_romaji': 'za', 'kunrei_romaji': 'za', 'hiragana': 'ざ', 'katakana': 'ザ'},
    'zi': {'hebon_romaji': 'ji', 'kunrei_romaji': 'zi', 'hiragana': 'じ', 'katakana': 'ジ'},
    'zu': {'hebon_romaji': 'zu', 'kunrei_romaji': 'zu', 'hiragana': 'ず', 'katakana': 'ズ'},
    'ze': {'hebon_romaji': 'ze', 'kunrei_romaji': 'ze', 'hiragana': 'ぜ', 'katakana': 'ゼ'},
    'zo': {'hebon_romaji': 'zo', 'kunrei_romaji': 'zo', 'hiragana': 'ぞ', 'katakana': 'ゾ'},
    'da': {'hebon_romaji': 'da', 'kunrei_romaji': 'da', 'hiragana': 'だ', 'katakana': 'ダ'},
    'di': {'hebon_romaji': 'ji', 'kunrei_romaji': 'zi', 'hiragana': 'ぢ', 'katakana': 'ヂ'},
    'du': {'hebon_romaji': 'zu', 'kunrei_romaji': 'zu', 'hiragana': 'づ', 'katakana': 'ヅ'},
    'de': {'hebon_romaji': 'de', 'kunrei_romaji': 'de', 'hiragana': 'で', 'katakana': 'デ'},
    'do': {'hebon_romaji': 'do', 'kunrei_romaji': 'do', 'hiragana': 'ど', 'katakana': 'ド'},
    'ba': {'hebon_romaji': 'ba', 'kunrei_romaji': 'ba', 'hiragana': 'ば', 'katakana': 'バ'},
    'bi': {'hebon_romaji': 'bi', 'kunrei_romaji': 'bi', 'hiragana': 'び', 'katakana': 'ビ'},
    'bu': {'hebon_romaji': 'bu', 'kunrei_romaji': 'bu', 'hiragana': 'ぶ', 'katakana': 'ブ'},
    'be': {'hebon_romaji': 'be', 'kunrei_romaji': 'be', 'hiragana': 'べ', 'katakana': 'ベ'},
    'bo': {'hebon_romaji': 'bo', 'kunrei_romaji': 'bo', 'hiragana': 'ぼ', 'katakana': 'ボ'},
    'pa': {'hebon_romaji': 'pa', 'kunrei_romaji': 'pa', 'hiragana': 'ぱ', 'katakana': 'パ'},
    'pi': {'hebon_romaji': 'pi', 'kunrei_romaji': 'pi', 'hiragana': 'ぴ', 'katakana': 'ピ'},
    'pu': {'hebon_romaji': 'pu', 'kunrei_romaji': 'pu', 'hiragana': 'ぷ', 'katakana': 'プ'},
    'pe': {'hebon_romaji': 'pe', 'kunrei_romaji': 'pe', 'hiragana': 'ぺ', 'katakana': 'ペ'},
    'po': {'hebon_romaji': 'po', 'kunrei_romaji': 'po', 'hiragana': 'ぽ', 'katakana': 'ポ'},
};

yoon_kana_table = {
    'kya': {'hebon_romaji': 'kya', 'kunrei_romaji': 'kya', 'hiragana': 'きゃ', 'katakana': 'キャ'},
    'kyu': {'hebon_romaji': 'kyu', 'kunrei_romaji': 'kyu', 'hiragana': 'きゅ', 'katakana': 'キュ'},
    'kyo': {'hebon_romaji': 'kyo', 'kunrei_romaji': 'kyo', 'hiragana': 'きょ', 'katakana': 'キョ'},
    'sya': {'hebon_romaji': 'sha', 'kunrei_romaji': 'sya', 'hiragana': 'しゃ', 'katakana': 'シャ'},
    'syu': {'hebon_romaji': 'shu', 'kunrei_romaji': 'syu', 'hiragana': 'しゅ', 'katakana': 'シュ'},
    'syo': {'hebon_romaji': 'sho', 'kunrei_romaji': 'syo', 'hiragana': 'しょ', 'katakana': 'ショ'},
    'tya': {'hebon_romaji': 'cha', 'kunrei_romaji': 'tya', 'hiragana': 'ちゃ', 'katakana': 'チャ'},
    'tyu': {'hebon_romaji': 'chu', 'kunrei_romaji': 'tyu', 'hiragana': 'ちゅ', 'katakana': 'チュ'},
    'tyo': {'hebon_romaji': 'cho', 'kunrei_romaji': 'tyo', 'hiragana': 'ちょ', 'katakana': 'チョ'},
    'nya': {'hebon_romaji': 'nya', 'kunrei_romaji': 'nya', 'hiragana': 'にゃ', 'katakana': 'ニャ'},
    'nyu': {'hebon_romaji': 'nyu', 'kunrei_romaji': 'nyu', 'hiragana': 'にゅ', 'katakana': 'ニュ'},
    'nyo': {'hebon_romaji': 'nyo', 'kunrei_romaji': 'nyo', 'hiragana': 'にょ', 'katakana': 'ニョ'},
    'hya': {'hebon_romaji': 'hya', 'kunrei_romaji': 'hya', 'hiragana': 'ひゃ', 'katakana': 'ヒャ'},
    'hyu': {'hebon_romaji': 'hyu', 'kunrei_romaji': 'hyu', 'hiragana': 'ひゅ', 'katakana': 'ヒュ'},
    'hyo': {'hebon_romaji': 'hyo', 'kunrei_romaji': 'hyo', 'hiragana': 'ひょ', 'katakana': 'ジョ'},
    'mya': {'hebon_romaji': 'mya', 'kunrei_romaji': 'mya', 'hiragana': 'みゃ', 'katakana': 'ミャ'},
    'myu': {'hebon_romaji': 'myu', 'kunrei_romaji': 'myu', 'hiragana': 'みゅ', 'katakana': 'ミュ'},
    'myo': {'hebon_romaji': 'myo', 'kunrei_romaji': 'myo', 'hiragana': 'みょ', 'katakana': 'ミョ'},
    'rya': {'hebon_romaji': 'rya', 'kunrei_romaji': 'rya', 'hiragana': 'りゃ', 'katakana': 'リャ'},
    'ryu': {'hebon_romaji': 'ryu', 'kunrei_romaji': 'ryu', 'hiragana': 'りゅ', 'katakana': 'リュ'},
    'ryo': {'hebon_romaji': 'ryo', 'kunrei_romaji': 'ryo', 'hiragana': 'りょ', 'katakana': 'リョ'},
    'gya': {'hebon_romaji': 'gya', 'kunrei_romaji': 'gya', 'hiragana': 'ぎゃ', 'katakana': 'ガャ'},
    'gyu': {'hebon_romaji': 'gyu', 'kunrei_romaji': 'gyu', 'hiragana': 'ぐゅ', 'katakana': 'グュ'},
    'gyo': {'hebon_romaji': 'gyo', 'kunrei_romaji': 'gyo', 'hiragana': 'ごょ', 'katakana': 'ゴュ'},
    'zya': {'hebon_romaji': 'ja', 'kunrei_romaji': 'zya', 'hiragana': 'ざゃ', 'katakana': 'ザャ'},
    'zyu': {'hebon_romaji': 'ju', 'kunrei_romaji': 'zyu', 'hiragana': 'ずゅ', 'katakana': 'ズュ'},
    'zyo': {'hebon_romaji': 'jo', 'kunrei_romaji': 'zyo', 'hiragana': 'ぞょ', 'katakana': 'ゾュ'},
    'dya': {'hebon_romaji': 'ja', 'kunrei_romaji': 'zya', 'hiragana': 'だゃ', 'katakana': 'ダャ'},
    'dyu': {'hebon_romaji': 'ju', 'kunrei_romaji': 'zyu', 'hiragana': 'づゅ', 'katakana': 'ヅュ'},
    'dyo': {'hebon_romaji': 'jo', 'kunrei_romaji': 'zyo', 'hiragana': 'どょ', 'katakana': 'ドュ'},
    'bya': {'hebon_romaji': 'bya', 'kunrei_romaji': 'bya', 'hiragana': 'ばゃ', 'katakana': 'バャ'},
    'byu': {'hebon_romaji': 'byu', 'kunrei_romaji': 'byu', 'hiragana': 'ぶゅ', 'katakana': 'ブュ'},
    'byo': {'hebon_romaji': 'byo', 'kunrei_romaji': 'byo', 'hiragana': 'ぼょ', 'katakana': 'ボュ'},
    'pya': {'hebon_romaji': 'pya', 'kunrei_romaji': 'pya', 'hiragana': 'ぱゃ', 'katakana': 'パャ'},
    'pyu': {'hebon_romaji': 'pyu', 'kunrei_romaji': 'pyu', 'hiragana': 'ぷゅ', 'katakana': 'プュ'},
    'pyo': {'hebon_romaji': 'pyo', 'kunrei_romaji': 'pyo', 'hiragana': 'ぽょ', 'katakana': 'ポュ'},
};

let keys = Object.keys(romaji_kana_table);

settings = {romaji_system: 'hebon_romaji',
    romaji_default: true,
    hiragana_default: false,
    katakana_default: false,
    show_all: false};

window.onkeydown = function(e){ //event可以简写成 e
    // alert(e.key);
    // console.log(e.key);//不喜欢弹窗的话 可以通过控制台输出查看信息
    e.preventDefault();
    if (e.key === 'Enter' || e.key === 'ArrowRight') {
        document.getElementById("Next").click();
    }
    else if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
        document.getElementById("Previous").click();
    }
    else if (e.key === ' ') {
        document.getElementById("Show All").click();
    }
    else if (e.key === 'M' || e.key === 'm') {
        document.getElementById("More Settings").click();
    }
}

function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}

document.getElementById("Next").addEventListener("click", NextClick);
function NextClick() {
    if (keys.length === 0) {
        return;
    }
    if (typeof NextClick.iterator == 'undefined' || NextClick.iterator === keys.length - 1) {
        NextClick.iterator = -1;
    }
    if (NextClick.iterator === -1) {
        shuffle(keys);
    }

    ++NextClick.iterator;
    UpdateIter();

    console.log('Click Next');

    settings.show_all = false
    UpdateDisplay();

    // NextClick.iterator %= keys.length
}

document.getElementById("Previous").addEventListener('click', PreviousClick)
function PreviousClick() {
    if (keys.length === 0) {
        return;
    }
    if (typeof NextClick.iterator == 'undefined' || NextClick.iterator === 0) {
        return;
    }

    --NextClick.iterator;
    UpdateIter();

    console.log('Click Previous');

    settings.show_all = false
    UpdateDisplay();
}

function UpdateIter() {
    if (keys.length === 0) {
        document.getElementById("current iter").innerText = String(0);
        document.getElementById("total num").innerText = String(0);
    }
    else {
        document.getElementById("current iter").innerText = String(NextClick.iterator + 1);
        document.getElementById("total num").innerText = String(keys.length);
    }
}

document.getElementById("Show All").addEventListener('click', ShowAllClick);
function ShowAllClick() {
    if (keys.length === 0) {
        return;
    }
    console.log('Click Show All');

    settings.show_all = !settings.show_all;
    UpdateDisplay();
}

// document.getElementById("More Settings").addEventListener('mouseover', MoreSettingsOver)
// function MoreSettingsOver() {
//     console.log('More Settings Mouse Over');
//
//     document.getElementById("Settings").style.display = ''
// }
//
// document.getElementById("More Settings").addEventListener('mouseout', MoreSettingsOut)
// function MoreSettingsOut() {
//     console.log('More Settings Mouse Out');
//
//     document.getElementById("Settings").style.display = 'none'
// }

document.getElementById("setting1").addEventListener('click', Setting1Click);
function Setting1Click() {
    console.log('Click Setting 1');
    console.log(document.getElementById("setting1").checked);

    settings.romaji_default = document.getElementById("setting1").checked;
    UpdateDisplay();
}

document.getElementById("setting2").addEventListener('click', Setting2Click);
function Setting2Click() {
    console.log('Click Setting 2');
    console.log(document.getElementById("setting2").checked);

    settings.hiragana_default = document.getElementById("setting2").checked;
    UpdateDisplay();
}

document.getElementById("setting3").addEventListener('click', Setting3Click);
function Setting3Click() {
    console.log('Click Setting 3');
    console.log(document.getElementById("setting3").checked);

    settings.katakana_default = document.getElementById("setting3").checked;
    UpdateDisplay();
}

document.getElementById("setting41").addEventListener('click', Setting41Click);
function Setting41Click() {
    console.log('Click Setting 41');
    console.log(document.getElementById("setting41").checked);

    console.assert(document.getElementById("setting41").checked && !document.getElementById("setting42").checked);

    settings.romaji_system = "hebon_romaji";
    UpdateDisplay();
}

document.getElementById("setting42").addEventListener('click', Setting42Click);
function Setting42Click() {
    console.log('Click Setting 42');
    console.log(document.getElementById("setting42").checked);

    console.assert(document.getElementById("setting42").checked && !document.getElementById("setting41").checked);

    settings.romaji_system = "kunrei_romaji";
    UpdateDisplay();
}

document.getElementById("setting51").addEventListener('click', Setting5Click);
document.getElementById("setting52").addEventListener('click', Setting5Click);
document.getElementById("setting53").addEventListener('click', Setting5Click);
function Setting5Click() {
    console.log('Click Setting 5');

    romaji_kana_table = {};
    if (document.getElementById("setting51").checked) {
        romaji_kana_table = Object.assign({}, romaji_kana_table, gojuon_kana_table);
    }
    if (document.getElementById("setting52").checked) {
        romaji_kana_table = Object.assign({}, romaji_kana_table, dakuon_handakuon_kana_table);
    }
    if (document.getElementById("setting53").checked) {
        romaji_kana_table = Object.assign({}, romaji_kana_table, yoon_kana_table);
    }
    keys = Object.keys(romaji_kana_table);
    NextClick.iterator = undefined;
    // UpdateDisplay();
    console.log(keys.length)
    if (keys.length === 0) {
        UpdateIter();
        UpdateDisplay();
    }
    else {
        NextClick();
    }
    // console.log(romaji_kana_table)
}

function UpdateDisplay() {
    if (keys.length === 0) {
        document.getElementById("Show All InnerText").innerText = "Show All";
        document.getElementById("romaji").innerText = '';
        document.getElementById("hiragana").innerText = '';
        document.getElementById("katakana").innerText = '';
        return;
    }
    // if (typeof NextClick.iterator == 'undefined') {
    //     key = keys[11];
    // }
    // else {
    //     key = keys[NextClick.iterator];
    // }
    let key = keys[NextClick.iterator];

    if (settings.show_all) {
        document.getElementById("Show All InnerText").innerText = "Hide";
        document.getElementById("romaji").innerText = romaji_kana_table[key][settings.romaji_system];
        document.getElementById("hiragana").innerText = romaji_kana_table[key]['hiragana'];
        document.getElementById("katakana").innerText = romaji_kana_table[key]['katakana'];
    }
    else {
        document.getElementById("Show All InnerText").innerText = "Show All";
        document.getElementById("romaji").innerText =
            settings.romaji_default ? romaji_kana_table[key][settings.romaji_system] : '';
        document.getElementById("hiragana").innerText =
            settings.hiragana_default ? romaji_kana_table[key]['hiragana'] : '';
        document.getElementById("katakana").innerText =
            settings.katakana_default ? romaji_kana_table[key]['katakana'] : '';
    }
}

// UpdateDisplay();
Setting5Click();
