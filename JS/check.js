// 获取画布元素
var mycanvas=document.getElementsByTagName("canvas")[0];
// 获取绘图上下文，调用getContext()方法
var ctx=mycanvas.getContext("2d");
// 定义干扰点的数量
var pointNum=80;
// 定义干扰线的数量
var lineNum=5;
// 定义随机字符文本
var str="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZ";
// 定义用来存储每次生成验证码的字符串
var codeStr="";

// 为画布添加点击事件
mycanvas.onclick=function(){
    // 每次点击刷新验证码
    codeStr=ranCode();
};
// 页面加载时要调用一次，绘制验证码
codeStr=ranCode();
// 获取输入框元素
var code=document.getElementById("code");
// 获取按钮元素
var btn=document.getElementsByTagName("button")[0];
// 为按钮添加点击事件
btn.onclick=function(){
    // 如果输入框值为空，或者输入框的值不等于验证码的值（统一将2个值转换为小写）
    if(code.value=="" || code.value.toLowerCase()!=codeStr.toLowerCase()){
        alert("验证码错误");
    }
    // 验证码一定要忽略大小写判断
    else if(code.value.toLowerCase()==codeStr.toLowerCase()){
        alert("验证码正确")
    }
    // 无论正确还是错误，都要重新刷新验证码
    codeStr=ranCode();
}

// 构造随机验证码函数
function ranCode(){
    // 每次使用画布之前都要先将其清除
    ctx.clearRect(0,0,120,40);
    // 每次刷新验证码时，都要重新创建一个字符串变量用来存储验证码
    var text="";
    // 绘制随机字符的循环
    for(var i=0;i<4;i++){
        // 创建新路径
        ctx.beginPath();
        // 设置文本基线，顶端垂直对齐
        ctx.textBaseline="top";
        // 设置文本样式
        ctx.font="24px 宋体";
        // 填充文本颜色，颜色要更深一点，不然跟干扰线与干扰点颜色相近，分不清
        ctx.fillStyle=getRanColor(0,100);
        // 定义随机字符
        var ranS=str.charAt(getRanNumber(0,str.length-1));
        // 将每次循环得到的随机字符拼接上去
        text+=ranS;
        // 保存画布当前状态
        ctx.save();
        // 每次绘制一个字符之前先把画布位移到指定位置
        ctx.translate(i*25,0);
        // 旋转，定义角度可以顺时针旋转也可以逆时针旋转
        var ranAngle=Math.PI/180*getRanNumber(-15,15);
        // 画布旋转随机角度
        ctx.rotate(ranAngle);
        // 绘制旋转之后的随机字符
        ctx.fillText(ranS,getRanNumber(10,15),getRanNumber(0,15));
        // 直接读取之前保存的状态，不需要再位移旋转回来
        ctx.restore();
    }
    // 绘制随机点的循环
    for(var i=0;i<pointNum;i++){
        ctx.beginPath();
        // 填充文本颜色，颜色推荐在180左右，效果比较明显，中间颜色比较艳丽
        ctx.fillStyle=getRanColor(180,260);
        // 绘制圆形  x轴坐标在随机数0~120（画布宽度），y轴坐标在0~40（画布高度），半径为1
        ctx.arc(getRanNumber(0,120),getRanNumber(0,40),1,0,Math.PI*2);
        // 填充形状
        ctx.fill();
    }

    // 绘制干扰线循环
    for(var i=0;i<lineNum;i++){
        ctx.beginPath();
        // 干扰线轮廓颜色
        ctx.strokeStyle=getRanColor(180,240);
        // 干扰线起始点坐标
        ctx.moveTo(getRanNumber(0,20),getRanNumber(0,40));
        // 干扰线结束点坐标
        ctx.lineTo(getRanNumber(100,120),getRanNumber(0,40));
        // 绘制干扰线轮廓
        ctx.stroke();
    }
    // 返回每次随机产生的验证码
    return text;
}
// 构造随机数的方法函数（min到max随机，包含max）
function getRanNumber(min,max){
    return parseInt(Math.random()*(max-min+1)+min);
}
// 构造随机颜色的方法函数
function  getRanColor(min,max){
    // 如果最小值小于0，或者最小值大于255，即非正常数范围
    if(min<0 || min>255){
        // 设置最小值为0
        min=0;
    }
    // 如果最大值小于0，或者最大值大于255，即非正常数范围
    if(max<0 || max>255){
        // 设置最大值为255
        max=255;
    }
    // 定义rgb()函数的各个值
    var r=getRanNumber(min,max);
    var g=getRanNumber(min,max);
    var b=getRanNumber(min,max);
    return "rgb("+r+","+g+","+b+")";
}