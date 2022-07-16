<template>
  <div class="content">
    <div class="container">
      <div class="news-title">{{ name }}</div>
      <div class="news-time">
        <p>{{ time }}</p>
      </div>
      <div class="news-location">
        <span>当前位置：</span>
        <span><router-link to="./home-page">首页>></router-link></span>
        <span
          ><router-link :to="`./twice-page?id=${id}`"
            >{{ tab }}>></router-link
          ></span
        >
        <span style="color: #62a8ea !important">{{ name }}</span>
      </div>
      <div class="news-content" v-html="content"></div>
      <div class="news-end"></div>
    </div>
  </div>
</template>

<script>
import MD5 from "js-md5";
export default {
  data() {
    return {
      //小类名字
      name: "",
      //大类名字
      tab: "",
      content: "",
      id: -1,
      contentid: -1,
      researchs: [],
      str: "",
    };
  },
  methods: {
    reload() {
      let item = {};
      this.id = this.$route.query.id;
      this.contentid = this.$route.query.contentid;
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=" + this.id,
      })
        .then((response) => {
          this.researchs = response.data[0];
          //判断当前页面是否为空

          if (this.researchs == null) {
            this.content = "<p>There is no content on the current page</p>";
            this.name = "";
          }
          //判断当前页面是否是直接跳转的，而不是由twicepage跳转过来
          if (this.contentid == undefined && this.researchs != null) {
            this.content = response.data[0][0].content;
            this.name = response.data[0][0].name;
          } else {
            for (item of this.researchs) {
              if (item.id == this.contentid * 1) {
                this.name = item.name;
                this.content = item.content;
                this.time = this.getTime(item.time);
                break;
              } else {
                this.content = "<p>There is no content on the current page</p>";
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //获取大类名字
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/nav",
      })
        .then((response) => {
          for (let item of response.data[0]) {
            if (item.id == this.id * 1) {
              this.tab = item.name;
              break;
            } else {
              this.tab = "No classification";
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //翻译大类
    async translateTab(text) {
      //初始化要传给api的数据
      let tab;
      var appid = "20211028000985481";
      var key = "l_9VRb3AT9xN4pK7uLx6";
      var salt = new Date().getTime() + 1;
      var query = text;
      var from = "zh";
      var to = "en";
      var str1 = appid + query + salt + key;
      var sign = MD5(str1);
      await this.$jsonp(
        "http://api.fanyi.baidu.com/api/trans/vip/translate?q=" +
          query +
          "&from=" +
          from +
          "&to=" +
          to +
          "&appid=" +
          appid +
          "&salt=" +
          salt +
          "&sign=" +
          sign
      )
        .then(function (response) {
          console.log(response.trans_result[0].dst);
          tab = response.trans_result[0].dst;
          console.log(tab);
        })
        .catch((e) => {
          console.log(e);
        });
      this.tab = tab;
    },
    //翻译小类
    async translateName(text) {
      //初始化要传给api的数据
      let res;
      var appid = "20211028000985481";
      var key = "l_9VRb3AT9xN4pK7uLx6";
      var salt = new Date().getTime();
      var query = text;
      var from = "zh";
      var to = "en";
      var str1 = appid + query + salt + key;
      var sign = MD5(str1);
      await this.$jsonp(
        "http://api.fanyi.baidu.com/api/trans/vip/translate?q=" +
          query +
          "&from=" +
          from +
          "&to=" +
          to +
          "&appid=" +
          appid +
          "&salt=" +
          salt +
          "&sign=" +
          sign
      )
        .then(function (response) {
          res = response.trans_result[0].dst;
        })
        .catch((e) => {
          console.log(e);
        });
      this.name = res;
    },
  },

  computed: {},
  created() {
    this.reload();
  },
  watch: {
    $route() {
      this.reload();
    },
  },
};
</script>

<style scoped>
.content {
  background: url("../assets/img/bg.eddafe58.jpg") no-repeat bottom;
}
</style>