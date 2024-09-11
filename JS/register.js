var info = document.querySelector('#info')
var infoContent = document.querySelector('#info-content')
var btn = document.querySelector('#rectangle')
info.onmouseover = function () {
    infoContent.style.opacity = '1'
    infoContent.style.transition = 'all ease 1s'
}
info.onmouseleave = function () {
    infoContent.style.opacity = '0'
    infoContent.style.transition = 'all ease 1s'
}
btn.onclick = function () {
    var username = document.querySelector('#username').value//需要实时获取
    var password = document.querySelector('#password').value//需要实时获取
    var status = document.querySelector('#status')/* 在外面定义无效 */
    axios.post('http://127.0.0.1/api/register', {
        username: username, // 获取输入框中的值
        password: password // 获取输入框中的值
    }).then(
        function (response) {
            status.innerHTML = ''
            /* 如果是joi表单验证错误，返回信息是undefined */
            if (response.data.meg === undefined) {
                console.log(response.data.details);
                status.innerHTML = response.data.details[0].message
            }
            else {
                status.innerHTML = response.data.meg
                if (status.innerHTML === '注册成功') {
                    let i = 3
                    setTimeout(function () {
                        let timer = setInterval(() => {
                            status.innerHTML = '即将跳转到上一个页面 ' + i
                            i--
                            if (i === -1) {
                                clearInterval(timer)
                                const redirectUrl = localStorage.getItem('redirectUrl')
                                if (redirectUrl) {
                                    // 如果存在存储的路径，重定向回那个页面
                                    window.location.href = redirectUrl;
                                } else {
                                    // 如果没有存储的路径，可以重定向到默认页面
                                    window.location.href = '../index.html';
                                }
                            }
                        }, 1000)
                    }, 500)
                }
            }
        },
        function (err) {
            console.log(err);
        }
    )
}