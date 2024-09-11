var comment = new Vue({
    el: '#comment-area',
    data: {
        commentContent: [],
        username: '',
        pic: '',
        user: [],/* 用户对象数组 */
        identify: false,/* 是否身份认证 */
        isSend:false,
        userToken:'',
        dataLength:0
    },
    methods: {
        /* 点击关闭按钮关闭评论 */
        close: function () {
            var commentArea = document.querySelector('#comment-area')
            commentArea.style.right = '-300px'
            // commentArea.style.transform = 'translateX(300px)'
            commentArea.style.transition = 'all ease 1s'
            // commentArea.style.display = 'none'
            
        },
        /* 未登录禁止评论 */
        disabled: function () {
            this.userToken = localStorage.getItem('userToken')
            if (this.userToken !== '' && this.userToken !== null) {
                document.querySelector('textarea').disabled = false
                // console.log(this.userToken);
                console.log('object');
            }
            else {
                document.querySelector('textarea').disabled = true
                document.querySelector('textarea').title = '登录后评论'
            }
        },
        /* 根据网页标题获取id，它们二者有关联 */
        getNum: function () {
            /* 获取网页标题 */
            title = document.title
            /* 切割字符串 */
            let idStr = title.split('s');//分割结果是数组如“[New,01]”
            let str = idStr[1]
            /* 判断是否是10以内的数字 */
            if (str[0] === '0') {
                let id = parseInt(str[1], 10)
                return id
            }
            else {
                id = parseInt(str, 10)
                return id
            }
        },
        /* 从后端数据库获取到全部评论和相关评论的用户信息 */
        getComment: function () {
            that = this
            let id = this.getNum()
            axios.get('http://127.0.0.1/api/comment', {
                params: {
                    id: id,
                }
            }).then(
                function (response) {
                    console.log(response.data);
                    if (response.data === '暂无评论') {
                        that.commentContent = []
                        that.dataLength = 0
                        // that.commentContent.push(response.data) bug代码
                    }
                    else {
                        console.log(response);
                        for (let i = 0; i < response.data.length; i++) {
                            that.commentContent.push(response.data[i].content)
                            that.user.push({ uname: response.data[i].username, pic: response.data[i].pic })
                        }
                        that.dataLength = response.data.length
                    }
                },
                function (err) {
                    console.log(err);
                }

            )
        },
        postComment: function () {
            /* 显示'发送成功'的提示信息 */
            this.dataLength = 1
            this.isSend = true
            setTimeout(()=>{
                this.isSend = false
            },1000)
            /* 获取用户评论 */
            let userComment = document.querySelector('#comment-textarea').value
            that = this
            let id = this.getNum()
            /* 将评论发送到服务器并且储存在数据库 */
            axios.post('http://127.0.0.1/api/comment', {
                id: id,
                content: userComment,
                username: that.username,
                pic: that.pic
            }).then(
                function (response) {
                    console.log(response);
                    /* 获取id */
                    let id = that.getNum()
                    /* 实时更新评论，可以免去刷新页面 */
                    axios.get('http://127.0.0.1/api/comment', {
                        params: {
                            id: id
                        }
                    }).then(
                        function (response) {
                            let length = response.data.length
                            that.commentContent.push(response.data[length - 1].content)//插入最新评论
                            that.user.push({ uname: response.data[length - 1].username, pic: response.data[length - 1].pic })//插入最新用户信息
                        },
                        function (err) {
                            console.log(err);
                        }
                    )

                },
                function (err) {
                    console.log(err);
                }
            )
            /* 清空输入区域文本 */
            document.querySelector('#comment-textarea').value = ''
        },
        //获取用户头像
        async getUserPic() {
            try {
                const response = await axios.get('http://127.0.0.1/user_pic', {
                    headers: {
                        'Authorization': `${localStorage.getItem('userToken')}` // 发送验证请求头
                    }
                });
                console.log(response.data);
                if (response.data === '身份认证失败') {
                    this.identify = false
                }
                if (response.data.meg === '获取头像成功') { // 假设meg是正确的字段名
                    this.username = response.data.username;
                    this.pic = response.data.pic;
                    this.identify = true
                    /* 再这里再调用一次 */
                    this.disabled()
                }
            } catch (error) {
                console.error('获取用户图片失败:', error);
                // 这里可以添加错误处理逻辑，比如显示错误信息给用户
            }
        },
    },
    mounted() {
        this.disabled()
        this.getComment()
        this.getUserPic()
        this.getNum()
        
    },
})