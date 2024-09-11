const arrow = document.querySelector('#arrow');
const moreBtn = document.querySelector('#more-btn');
const moreContent = document.querySelector('.more-content');
const ul = document.querySelector('#nav ul')
const li = document.querySelectorAll('#nav li')
li.forEach(function (li, index) {
    li.onclick = function () {
        let navName = ''
        /* 点击后导航链接变成红色 */
        clearStyle()
        if (index === 8) return //最后一个除外
        this.style.color = 'red'
        /* 相关内容显示与隐藏 */
        switch (index) {
            case 0:
                navName = 'focus'
                break;
            case 1:
                navName = 'hotNews-box'
                break;
            case 2:
                navName = 'nanchang'
                break;
            case 3:
                navName = 'video'
                break;
            case 4:
                navName = 'finance'
                break;
            case 5:
                navName = 'science'
                break;
            case 6:
                navName = 'history'
                break;
            case 7:
                navName = 'internation'
                break;
            default:
                navName = ''
                break;
        }
        /* 清空样式 */
        displayNav()
        /* 使用模版字符串 */
        document.querySelector(`#${navName}`).style.display = 'block'
        $(function () {
            $.get(`./Nav/${navName}.html`, function (data) { //引入时的页面名称
                $(`#${navName}`).html(data); //引入时的ID
            });
        });
    }
})
li.forEach(function (li) {
    li.onmouseover = function () {
        if (this.style.color === 'red') return
        this.style.color = '#999'
        // li[8].style.color = '#333'//最后一个除外
    }
    li.onmouseleave = function () {
        if (this.style.color === 'red') return
        this.style.color = '#333'
    }
})
moreBtn.onmouseover = function () {
    arrow.style.transform = 'rotate(270deg)'
    arrow.style.transition = 'all linear 0.2s'
    moreContent.classList.add('show');
}
moreBtn.onmouseleave = function () {
    arrow.style.transform = 'rotate(90deg)'
    arrow.style.transition = 'all linear 0.2s'
    moreContent.classList.remove('show');
}
function clearStyle() {
    for (let i = 0; i < li.length - 1; i++) {
        li[i].style.color = '#333'
    }
}

function displayNav() {
    document.querySelector('#focus').style.display = 'none'
    document.querySelector('#hotNews-box').style.display = 'none'
    document.querySelector('#nanchang').style.display = 'none'
    document.querySelector('#video').style.display = 'none'
    document.querySelector('#finance').style.display = 'none'
    document.querySelector('#science').style.display = 'none'
    document.querySelector('#history').style.display = 'none'
    document.querySelector('#internation').style.display = 'none'
}

