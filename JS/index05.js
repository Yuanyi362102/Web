var feedback = new Vue({
    el: '#myModal',
    data: {
        feedbackContent: '',
        isSend: false,
    },
    methods: {
        sendFeedback: function () {
            if (this.feedbackContent === '') {
                console.log('不能为空');
            }
            else {
                this.isSend = true
                that = this
                axios.post('http://127.0.0.1/api/feedback',
                    {
                        feedback:that.feedbackContent
                    }
                ).then(
                    function(response){
                        console.log(response);
                    },
                    function(err){
                        console.log(err);
                    }
                )
                console.log(this.feedbackContent);
                setTimeout(()=>{
                    this.isSend = false
                    this.feedbackContent = ''
                },1000)
            }
        },
    },
}
)

var city = new Vue({
    el: "#cityModal",
    data: {
        cityContent: '',
        isSend: false,
        city: '北京'
    },
    methods: {
        sendCity: function () {
            localStorage.setItem('city', this.cityContent)
            setTimeout(() => {
                this.isSend = true
            }, 1000)
            setTimeout(() => {
                this.isSend = false
                /* 从localStorage中获取城市名字 */
                this.city = localStorage.getItem('city')
                axios.get("https://api.seniverse.com/v3/weather/now.json?key=SvHHr-IwuUHgeRbXR&location=" + this.city + "&language=zh-Hans&unit=c").then(
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
            }, 2000)
        }
    },
})

var User = new Vue({
    el:'#userModal',
    data:{
        isSend:false,
        username:'',
        password:'',
        warningInfo:'内容不能为空',
    },
    methods:{
        changeInfo:function(){
            that = this
            const oldUsername = document.querySelector('#username').innerHTML
            axios.post('http://127.0.0.1/api/changeinfo',{
                username:that.username,
                password:that.password,
                oldUsername:oldUsername,

            }).then(
                function(response){
                    console.log(response.data);
                    if(response.data === '修改成功'){
                        that.isSend = true
                        setTimeout(()=>{
                            /* token失效了，要重新登录 */
                            document.location.reload()
                        },1000)
                    }
                    else{
                        that.isSend = false
                        that.warningInfo = response.data.details[0].message
                    }
                },
                function(err){
                    console.log(err);
                }
            )
            setTimeout(()=>{
                this.isSend = false
                this.username = ''
                this.password = ''
            },1000)
        }
    }
})