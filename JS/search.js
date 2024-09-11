var main = new Vue({
    el: '#main',
    data: {
        searchList: [],
        keyword: '',
        isShow: true,
        debounceTimer: null,// 添加防抖定时器
        isComposing: false // 组合输入状态
    },
    methods: {
        search: function (debounce) {
            var that = this;
            if (this.isComposing) return; // 如果正在组合输入，不执行搜索
            if (debounce) clearTimeout(this.debounceTimer); // 清除已有的防抖定时器
            this.debounceTimer = setTimeout(function () {
                axios.post('http://127.0.0.1/api/search', {
                    keyword: that.keyword
                }).then(function (response) {
                    if (response.data === '未找到相关信息') {
                        that.searchList = []
                        that.searchList.push(response.data)
                    }
                    else {
                        that.searchList = []
                        for (let i = 0; i < response.data.length; i++) {
                            that.searchList.push(response.data[i].newsName)
                        }
                    }
                }).catch(function (err) {
                    that.searchList = []
                    console.log(err);
                    that.searchList.push("发生错误，无法获取数据");
                });
            }, 100); // 设置防抖定时器，300ms 后执行搜索
        },
        handleCompositionStart: function () {
            this.isComposing = true; // 开始组合输入
        },
        handleCompositionEnd: function () {
            this.isComposing = false; // 结束组合输入
            this.search(); // 手动触发搜索，确保输入完成后进行搜索
        },
        handleKeyUp: function (event) {
            // 检查按下的是否是退格键
            if (event.keyCode === 8) {
                // 这是退格键，不执行搜索
                return;
            }   
            // 如果不是退格键，执行搜索
            this.search(true);
        },
        changeURL:function(event){
            axios.get('http://127.0.0.1/api/getNewsId',{
                params:{
                    newsName:event.target.innerHTML
                }
            }).then(
                function(response){
                    // console.log(response.data.id);
                    const newsId = response.data.id
                    if(newsId <10){
                        event.target.href = `../news-details/news0${newsId}.html`;
                    }
                    else{
                        event.target.href = `../news-details/news${newsId}.html`;
                    }
                },
                function(err){
                    console.log(err);
                }
            )
        }
    },
    watch: {
        keyword: function (newVal, oldVal) {
            if (newVal === '') {
                this.searchList = []
                this.isShow = false
            }
            else {
                this.isShow = true
            }
        }
    }
})
// 在 input 元素上添加 compositionstart 和 compositionend 事件监听器
document.querySelector('#main input').addEventListener('compositionstart', main.handleCompositionStart);
document.querySelector('#main input').addEventListener('compositionend', main.handleCompositionEnd);