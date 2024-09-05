/* 该js文件是操控新闻详情页的js文件，控制点赞功能和评论功能 */

/* 注销功能 */
var btn = document.querySelector('#logout')
btn.onclick = function () {
    window.location.reload();//点击后刷新页面
}

/* 点赞和评论 */
var thumb = document.querySelector('#thumb')
var thumbNum = document.querySelector('#thumb-num')
var comment = document.querySelector('#comment')
var commentArea = document.querySelector('#comment-area')
var cross = document.querySelector('#cross')
/* 点赞功能 */
thumb.onclick = function () {
    if (this.src === "https://lf-dw.toutiaostatic.com/obj/toutiao-duanwai/toutiao/toutiao_web_pc/svgs/like.0caed57a.svg") {
        /* 更换图片路径 */
        this.src = "https://lf-dw.toutiaostatic.com/obj/toutiao-duanwai/toutiao/toutiao_web_pc/svgs/like_active.b265cb30.svg"
        /* 点赞数加一 */
        var num = parseInt(thumbNum.innerHTML, 10)
        num++
        thumbNum.innerHTML = num
        /* 点赞动画 */
        this.style.transform = 'translate(0,-25px) rotate(-80deg)'
        this.style.transition = 'all ease .5s'
        setTimeout(function () {
            thumb.style.transform = 'rotate(0)'
        }, 100)
    }
    else {
        /* 更换图片路径 */
        this.src = "https://lf-dw.toutiaostatic.com/obj/toutiao-duanwai/toutiao/toutiao_web_pc/svgs/like.0caed57a.svg"
        /* 点赞数加一 */
        var num = parseInt(thumbNum.innerHTML, 10)
        num--
        thumbNum.innerHTML = num
    }
}
/* 打开评论 */
comment.onclick = function () {
    commentArea.style.right = '0'
    commentArea.style.transition = 'all ease 1s'
}