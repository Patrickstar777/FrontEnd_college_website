<template>
  <div class="container">
    <div class="news-title">{{ name }}</div>
    <div class="news-time">
      <p v-show="!listshow">发布时间：{{ time }}</p>
    </div>
    <div class="news-location">
      <span>当前位置：</span>
      <span><router-link to="./home-page">首页>></router-link></span>
      <span
        ><router-link to="./news-page?type=showall">新闻>></router-link></span
      >
      <span style="color: #62a8ea !important" v-show="!listshow">{{
        name
      }}</span>
    </div>
    <!-- 显示新闻列表 -->
    <div class="news-content" v-show="listshow">
      <ul>
        <li v-for="item in news" :key="item.id">
          <router-link :to="`./news-page?id=${item.id}`">
            {{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>
    <!-- 显示具体新闻 -->
    <div class="news-content" v-html="content" v-show="!listshow"></div>
    <div class="news-end"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      content: "",
      listshow: "",
    };
  },
  methods: {
    //接收新闻
    receivedNews() {
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/news",
      })
        .then((response) => {
          for (let item of response.data[0]) {
            if (item.id == this.$route.query.id) {
              this.name = item.name;
              this.content = item.content;
              this.time = this.getTime(item.time);
              break;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {},
  created() {
    this.receivedNews();
    this.getNews();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (to.query.type) {
        vm.listshow = true;
      } else {
        vm.listshow = false;
      }
    });
  },

  watch: {
    $route(to) {
      //选择是显示具体新闻页还是新闻列表页
      if (to.query.type) {
        this.getNews();
        this.listshow = true;
      } else {
        this.listshow = false;
        this.receivedNews();
      }
    },
  },
};
</script>

<style>
</style>