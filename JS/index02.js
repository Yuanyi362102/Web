var area = new Vue({
    el: '#user',
    data: {
        get: false,
        username: '',
        pic: ''
    },
    methods: {
        async getUserPic() {
            try {
                const response = await axios.get('http://127.0.0.1/user_pic', { 
                    headers: {
                        'Authorization': `${localStorage.getItem('userToken')}` // 发送验证请求头
                    }
                });
                console.log(response.data);
                if (response.data.meg === '获取头像成功') { // 假设meg是正确的字段名
                    this.get = true;
                    this.username = response.data.username;
                    this.pic = response.data.pic;
                }
            } catch (error) {
                console.error('获取用户图片失败:', error);
                // 这里可以添加错误处理逻辑，比如显示错误信息给用户
            }
        },
        LogOut:function(){
            this.get = false
            localStorage.removeItem('userToken');
        }
    },
    mounted() {
        this.getUserPic(); // 直接调用getUserPic方法
    }
});