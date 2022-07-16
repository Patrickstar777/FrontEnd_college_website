<template>
  <div class="news">
    <div class="container">
      <!-- 新闻图片区域 -->
      <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12 news-img">
        <img
          src="../assets/img/d1.c64a139e.jpg"
          ref="d1"
          v-show="index % 2 == 0"
        />
        <img
          src="../assets/img/d2.721f9ccd.jpg"
          ref="d2"
          v-show="index % 2 == 1"
        />
        <!-- 图片切换按钮 -->
        <ul class="switch-btn">
          <li class="switch-btn-1" @click="btnSwtich1">1</li>
          <li class="switch-btn-2" @click="btnSwtich2">2</li>
        </ul>
      </div>
      <!-- 新闻报道区域 -->
      <div class="col-lg-6 col-md-5 col-sm-6 col-xs-12 news-report">
        <h3>通知公告</h3>
        <ul>
          <li v-for="item in news.slice(0, 10)" :key="item.id">
            <router-link :to="`./news-page?id=${item.id}`"
              >{{ item.name }}
              <!-- 新闻日期 -->
              <span>
                [{{ getMonth(item.time) }}/{{ getDay(item.time) }}]</span
              ></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
    };
  },
  methods: {
    switchImg() {
      this.index = (this.index + 1) % 10000;
    },
    btnSwtich1() {
      this.index = 0;
      clearInterval(this.t);
      this.restartTimer = setTimeout(() => {
        this.t = setInterval(() => {
          this.switchImg();
        }, 3000);
      }, 2000);
    },

    btnSwtich2() {
      this.index = 1;
      clearInterval(this.t);
      this.restartTimer = setTimeout(() => {
        this.t = setInterval(() => {
          this.switchImg();
        }, 3000);
      }, 3000);
    },
  },
  mounted() {
    this.t = setInterval(() => {
      this.switchImg();
    }, 3000);
  },
  created() {
    this.getNews();
  },
  beforeDestroy() {
    clearInterval(this.t);
    clearTimeout(this.restartTimer);
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #001111;
}
.news {
  padding-top: 30px;
  background: url("../assets/img/bg.eddafe58.jpg") no-repeat center bottom;
}
.container {
  position: relative;
  padding: 0 0 50px;
}
.news-img {
  position: relative;
  padding: 0;
  img {
    width: 100%;
  }
  .switch-btn {
    position: absolute;
    text-align: center;

    right: 10px;
    top: 88%;
    padding: 0;
    .switch-btn-1,
    .switch-btn-2 {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 5px;
      border-radius: 10px;
      line-height: 20px;
      background-color: #ffe1e1;
    }
    .switch-btn-1:hover,
    .switch-btn-2:hover {
      background-color: red;
      color: #fff;
      cursor: pointer;
    }
  }
}
.news-report {
  text-align: left;
  color: #001111;
  margin-top: 0;
  h3 {
    margin-left: 40px;
    margin-bottom: 20px;
  }
  ul {
    text-align: left;
    padding-left: 50px;
  }

  ul li::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-left: 8px solid #001111;
    position: relative;
    top: 2px;
    right: 5px;
  }
  span {
    color: #909399;
  }
}
</style>