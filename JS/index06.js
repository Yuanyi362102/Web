var navbar = new Vue({
    el:'#nav',
    data:{
        content:''
    },
    methods:{
        change:function(){
            document.querySelector('#hotNews-div').innerHTML = 'yy'
        }
    }
})