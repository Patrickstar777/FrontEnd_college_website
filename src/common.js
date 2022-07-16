export var mixin = {
    data() {
        return {
            news: [],
            clickNum: "0",
            time: "",
            newsid: -1,
        }
    },
    methods: {
        getTime(m) {
            var d = new Date()
            d.setTime(m * 1000)
            var time = d.getFullYear() +
                "-" +
                (d.getMonth() * 1 + 1) +
                "-" +
                d.getDate() +
                "  " +
                d.getHours() +
                ":" +
                d.getMinutes()
            this.time = time

            return time
        },
        getMonth(m) {
            var d = new Date()
            d.setTime(m * 1000)
            return d.getMonth() * 1 + 1
        },
        getDay(m) {
            var d = new Date()
            d.setTime(m * 1000)
            return this.day = d.getDate()
        },
        getNews() {
            this.$axios({
                method: "get",
                url: "http://120.78.184.70/index/index/news",
            })
                .then((response) => {
                    this.news = response.data[0];
                    //首页展示最新的新闻图片
                    this.newsimg = this.news[0].img;
                    // 获取最新的新闻id
                    this.newsid = this.news[0].id
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
}