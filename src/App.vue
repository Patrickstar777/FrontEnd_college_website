<template>
  <div id="app">
    <Header />
    <News />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import News from "./components/News.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    News,
  },
};
</script>

<style lang="less">
.news-title {
  margin: 1.5em 0 1.5em;
  text-align: center;
  font-size: 1.6em;
  font-weight: 700;
}
.news-time {
  border-bottom: 1px dashed gray;
  p {
    text-align: right;
    color: #909399;
  }
}
.news-location {
  margin: 1.5em 0 1em;
  text-align: left;
  span {
    font-size: 1.5rem !important;
    a {
      color: #337aba;
    }
  }
}
.news-content {
  text-align: left;
  margin-top: 6rem;
  ul li {
    font-size: 1.8rem !important;
    line-height: 3.5rem !important;
    text-indent: -2em !important;
    cursor: pointer;
    a {
      color: #62a8ea;
    }
  }
  p,
  strong {
    font-size: 1.8rem !important;
    line-height: 3.5rem !important;
    text-indent: 2em !important;
    img,
    video {
      width: 50rem;
      display: block;
      margin: 10px auto;
    }
    @media screen and (max-width: 750px) {
      img,
      video {
        width: 95% !important;
      }
    }
    @media screen and (max-width: 1170px) {
      img,
      video {
        width: 50%;
      }
    }
    span {
      font-size: 1.8rem !important;
      line-height: 3.5rem !important;
      text-indent: 2em !important;
    }
    strong {
      font-size: 1.8rem !important;
      line-height: 3.5rem !important;
      text-indent: 2em !important;
    }
  }
}
.news-end {
  text-align: right;
  font-size: 1.8rem;
  margin-bottom: 100px;
}
</style>
