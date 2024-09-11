var hotNews = new Vue({
    el: '#hotNews-div',
    data: {
        imgSrc: '',
        hotNewsList: [],//总的新闻数组
        randomNumber: 0,
        city:'北京',
    },
    methods: {
        /* 从后端获取热点新闻的内容 */
        getHotNews: function () {
            //axios中的this和外面的this不同
            that = this
            axios.get('http://127.0.0.1/api/hotnews').then(
                function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        that.hotNewsList.push(response.data[i].name)
                    }
                },
                function (err) {
                    console.log(err);
                }
            )
        },
        getStyle(index) {
            switch (index) {
                case 0:
                    return { color: 'red' };
                case 1:
                    return { color: 'orange' };
                case 2:
                    return { color: 'gold' };
                default:
                    return { color: '#999' };
            }
        },
        //获取随机数
        getRandomNumber: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        //换一换给功能实现
        changeNews: function () {
            //获取0～39的随机数
            this.randomNumber = this.getRandomNumber(0, 39)
        },
        //更换左侧图片和标题
        changeImg: function (event) {
            that = this
            axios.get('http://127.0.0.1/api/img?name=' + event.target.innerHTML).then(
                function (response) {
                    console.log(response.data);
                    that.imgSrc = response.data.img
                    document.querySelector('#title').innerHTML = event.target.innerHTML
                    document.querySelector('#readNum').innerHTML = response.data.num
                    document.querySelector('#detail-title').innerHTML = event.target.innerHTML
                    document.querySelector('#detail-img').src = response.data.img
                },
                function (err) {
                    console.log(err);
                }
            )
        },
        //获取天气
        getWeather: function () {
            /* 从localStorage中获取城市名字 */
            this.city = localStorage.getItem('city') 
            axios.get("https://api.seniverse.com/v3/weather/now.json?key=SvHHr-IwuUHgeRbXR&location="+this.city+"&language=zh-Hans&unit=c").then(
                function (response) {
                    let location = response.data.results[0].location.name
                    let weather = response.data.results[0].now.text
                    let temperature = response.data.results[0].now.temperature
                    document.querySelector('#city').innerHTML = location + " "
                    document.querySelector('#weather').innerHTML = weather + " "
                    document.querySelector('#temperature').innerHTML = temperature + "˚C"
                },
                function (err) {
                    console.log(err);
                }
            )
        },
        /* 改变新闻详情的链接指向 */
        changeURL:function(event){
            that = this
            axios.get('http://127.0.0.1/api/getNewsId',{
                params:{
                    newsName:event.target.innerHTML
                }
            }).then(
                function(response){
                    const newsId = response.data.id;
                    if(newsId <10){
                        event.target.href = `./news-details/news0${newsId}.html`;
                    }
                    else{
                        event.target.href = `./news-details/news${newsId}.html`;
                    }
                },
                function(err){
                    console.log(err);
                }
            )
        },
        /* 页面渲染之初将当前url存储到本地浏览器中 */
        SaveURL:function(){
            /* 获取当前地址 */
            const currentPath = window.location.href
            localStorage.setItem('redirectUrl', currentPath);
        },
    },
    computed: {
        visibleNewsList: function () {
            return this.hotNewsList.slice(this.randomNumber, this.randomNumber + 10);
        }
    },
    mounted() {
        this.SaveURL()//初始化页面时储存URL
        this.getHotNews()//初始化页面时获取新闻
        this.getWeather()//初始化页面时获取天气
<<<<<<< HEAD
<<<<<<< HEAD
        this.imgSrc = "https://p3-sign.toutiaoimg.com/tos-cn-i-axegupay5k/68373569a47549e098c5fa2432f4ec16~noop.image?_iz=58558&from=article.pc_detail&lk3s=953192f4&x-expires=1726541452&x-signature=wAkgP67Gvvsb9zJ4vIha7OPeIHI%3D"
=======
        this.imgSrc = "https://p3-sign.toutiaoimg.com/top-static-files-outer/breaknews/580c9bed-fc52-4d3b-86e4-0553dfd74627~tplv-tt-poster-sc-center:1125:780.jpeg?_iz=30575&from=sign_default&lk3s=8d617dac&x-expires=1725811200&x-signature=WcMmkn5TvX0zQTDf7aTZxNCZq%2Bo%3D"
>>>>>>> origin/main
=======
        this.imgSrc = "https://p3-sign.toutiaoimg.com/top-static-files-outer/breaknews/580c9bed-fc52-4d3b-86e4-0553dfd74627~tplv-tt-poster-sc-center:1125:780.jpeg?_iz=30575&from=sign_default&lk3s=8d617dac&x-expires=1725811200&x-signature=WcMmkn5TvX0zQTDf7aTZxNCZq%2Bo%3D"
>>>>>>> origin/main
    },
})


