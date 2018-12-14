// 星星canvas初始化
var CanvasStar = new CanvasStar;
CanvasStar.init();

// 球初始化
// 球的半径
var radius = 150;
var dtr = Math.PI / 180;
// d => 视角深度初始值，球z轴深 类似perspective
var d = radius*2;

var mcList = [];
// 是否运动
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
// 转动速度
var tspeed = 60;
var size = 250;

var mouseX = 0;
var mouseY = 0;

var howElliptical = 1;

// 初始化变量
var aA = null;
var oDiv = null;

window.onload = function() {
    var i = 0;
    var oTag = null;
    oDiv = document.getElementById('rotate');
    aA = oDiv.getElementsByTagName('a');

    // push了每个a标签的宽高，带上padding的值
    for (i = 0; i < aA.length; i++) {
        oTag = {};
        oTag.offsetWidth = aA[i].offsetWidth;
        oTag.offsetHeight = aA[i].offsetHeight;
        mcList.push(oTag);
    }

    sineCosine(0, 0, 0);

    positionAll();

    oDiv.onmouseover = function() {
        active = false;
    };

    oDiv.onmouseout = function() {
        active = true;
        setTimeout(function() {
            active = false;
        }, 600)
    };

    oDiv.onmousemove = function(ev) {
        var oEvent = window.event || ev;

        // 将圆分为一个十字坐标轴计算
        mouseX = oEvent.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
        mouseY = oEvent.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);
        mouseX /= 5;
        mouseY /= 5;
    };

    setInterval(update, 30);
    
    document.querySelector('.inp-search-icon').onclick = function () {
        let tagA = document.querySelectorAll('#rotate a'),
            tagB = document.querySelector('.inp-search').value;
        tagB = tagB ? tagB : 'JJY鸭鸭猪'
        tagA.forEach( vm => {
            vm.innerHTML = tagB
        })
    }
};

