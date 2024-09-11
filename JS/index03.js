var medal = new Vue({
    el: '#medal-div',
    data: {
        showCompetition: true,
        showCountry: false,
        competitionImgSrc: [
            './images/volleyball.png',
            './images/handball.png',
            './images/wrestling.png',
            './images/cycling track.png',
            './images/waterpolo.png',
            './images/basketball.png',
            './images/swim.png',
            './images/field.png',
            './images/weightlifting.png',
            './images/beachball.png',
        ],
        countryImgSrc: [
            './images/America.png',
            './images/China.png',
            './images/Japan.png',
            './images/Australia.png',
            './images/France.png',
            './images/Holland.png',
            './images/Britain.png',
            './images/Korea.png',
            './images/Italy.png',
            './images/German.png',
        ],
        competitionName: ['排球', '手球', '摔跤', '场地自行车', '水球', '篮球', '花样游泳', '田径', '举重', '沙滩排球'],
        countryName: [
            { name: '美国', goldmedal: 40, silvermedal: 44, bronzemedal: 42 },
            { name: '中国', goldmedal: 40, silvermedal: 27, bronzemedal: 24 },
            { name: '日本', goldmedal: 20, silvermedal: 12, bronzemedal: 13 },
            { name: '澳大利亚', goldmedal: 18, silvermedal: 19, bronzemedal: 16 },
            { name: '法国', goldmedal: 16, silvermedal: 26, bronzemedal: 22 },
            { name: '荷兰', goldmedal: 15, silvermedal: 7, bronzemedal: 12 },
            { name: '英国', goldmedal: 14, silvermedal: 22, bronzemedal: 29 },
            { name: '韩国', goldmedal: 13, silvermedal: 9, bronzemedal: 10 },
            { name: '意大利', goldmedal: 12, silvermedal: 13, bronzemedal: 15 },
            { name: '德国', goldmedal: 12, silvermedal: 13, bronzemedal: 8 },
        ]
    },
    methods: {
        showCompetitionName: function () {
            this.showCountry = false
            this.showCompetition = true
            document.querySelector('#competition').style.borderBottom = '3px solid #D6C278'
            document.querySelector('#country').style.borderBottom = '1px solid #999'
        },
        showCountryName: function () {
            this.showCompetition = false
            this.showCountry = true
            document.querySelector('#country').style.borderBottom = '3px solid #D6C278'
            document.querySelector('#competition').style.borderBottom = '1px solid #999'
        },
    }
})