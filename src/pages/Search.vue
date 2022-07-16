<template>
  <div class="twice-page">
    <div class="container">
      <div class="news-title">{{ name }}</div>
      <div class="news-time">
        <p>点击率：{{ clickNum }}</p>
      </div>
      <div class="news-location">
        <span>当前位置：</span>
        <span><router-link to="./home-page">首页>></router-link></span>
        <span>搜索内容</span>
      </div>
      <div class="news-content" v-show="newsShow">
        <ul>
          <li
            v-for="item in newssearch_list"
            :key="item.id"
            :item="item"
            @click="getNewsId(item)"
          >
            <a>{{ item.name }} </a>
            <div class="search-content" v-html="item.content"></div>
          </li>
        </ul>
      </div>
      <div class="news-content" v-show="!newsShow">
        <ul>
          <li
            v-for="item in articlesearch_list"
            :key="item.id"
            :item="item"
            @click="getArticleId(item)"
          >
            <a>{{ item.name }} </a>
            <div class="search-content" v-html="item.content"></div>
          </li>
        </ul>
      </div>
      <div class="news-end" v-show="newsShow">共 {{ newslength }} 条</div>
      <div class="news-end" v-show="!newsShow">共 {{ articlelength }} 条</div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  data() {
    return {
      // 新闻与文章搜索结果
      newssearch_list: [],
      articlesearch_list: [],
      //   显示新闻还是文章
      newsShow: true,
      //   新闻id
      newsid: -1,
      //   文章大类id
      articleid: -1,
      //   文章小类id
      contentid: -1,
      //搜索数量
      newslength: 0,
      articlelength: 0,
      name: "",
    };
  },
  methods: {
    getNewsId(item) {
      this.newsid = item.id;
      this.$router.push({
        path: "./news-page?id=" + this.newsid,
      });
    },
    getArticleId(item) {
      this.articleid = item.class;
      this.contentid = item.id;
      this.$router.push({
        path: "./content?id=" + this.articleid + "&contentid=" + this.contentid,
      });
    },

    newsSearch(msgName, data) {
      this.newsShow = true;
      if (data == null) {
        this.newssearch_list = [{ id: -1, content: "<p>无搜索结果</p>" }];
        this.newslength = 0;

        return;
      } else {
        this.newssearch_list = data;
        this.newslength = data.length;
      }
    },
    articleSearch(msgName, data) {
      this.newsShow = false;
      if (data == null) {
        this.articlesearch_list = [{ id: -1, content: "<p>无搜索结果</p>" }];
        this.articlelength = 0;
        return;
      } else {
        this.articlesearch_list = data;
        this.articlelength = data.length;
      }
    },
  },

  mounted() {
    this.pid1 = pubsub.subscribe("newsSearch", this.newsSearch);
    this.pid2 = pubsub.subscribe("articleSearch", this.articleSearch);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pid1);
    pubsub.unsubscribe(this.pid2);
  },
};
</script>

<style lang="less" scoped>
.twice-page {
  background: url("../assets/img/bg.eddafe58.jpg") no-repeat bottom;
  .search-content img {
    display: none;
  }
}
</style>