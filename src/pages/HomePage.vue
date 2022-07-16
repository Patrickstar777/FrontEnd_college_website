<template>
  <div class="home-page">
    <!-- 研究方向 -->
    <div class="research-area">
      <div class="container">
        <!-- 标题区域 -->
        <div class="title-main">研究方向</div>
        <!-- 图片区域 -->
        <div class="row ra-img">
          <ul>
            <li
              v-for="item in ra_li_img"
              :key="item.id"
              :class="ra_li"
              @mouseover="animationShow"
              @mouseout="animationNotShow"
            >
              <router-link :to="`./content?id=8&contentid=${item.id}`">
                <div class="ra-li-img">
                  <img :src="item.src" alt="" />
                </div>
                <div class="ra-li-font">
                  {{ item.content }}
                </div></router-link
              >

              <!-- 波动特效 -->
              <div class="wave">
                <div class="pulse1"></div>
                <div class="pulse2"></div>
                <div class="pulse3"></div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 更多按钮 -->
        <router-link to="./twice-page?id=8">
          <div class="ra-more">
            <el-button type="primary" class="ra-btn">了解更多</el-button>
          </div></router-link
        >
      </div>
    </div>
    <!-- 新闻动态 -->
    <div class="news-information">
      <div class="container">
        <div class="title-main">新闻动态</div>

        <!-- 图片和新闻 -->
        <div class="news-panel">
          <!-- 图片区域 -->
          <router-link :to="`news-page?id=${newsid}`">
            <div class="img-enlarge col-lg-6 col-sm-12">
              <img :src="newsimg" alt="" /></div
          ></router-link>

          <!-- 内容区域 -->
          <div class="ni-tab col-lg-6 col-sm-12">
            <el-timeline>
              <el-timeline-item
                v-for="item in news.slice(0, 6)"
                :key="item.id"
                :color="color"
                :size="size"
              >
                <!-- 新闻时间 -->
                <div class="ni-time">
                  {{ getTime(item.time) }}
                </div>
                <!-- 新闻内容 -->
                <router-link :to="`./news-page?id=${item.id}`">
                  <div class="ni-content" v-html="item.content"></div
                ></router-link>
              </el-timeline-item>
            </el-timeline>
          </div>
          <!-- 更多按钮 -->
          <div>
            <el-button type="primary" plain class="ni-btn" @click="showall"
              >更多
              <div class="glyphicon glyphicon-menu-right"></div>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 学术交流 -->
    <div class="academic-exchange">
      <div class="container">
        <!-- 题目 -->
        <div class="title-main">学术交流</div>

        <div class="row">
          <!-- 大图片区域 -->
          <router-link to="./twice-page?id=21">
            <div class="ae-baseimg img-enlarge col-lg-4 col-sm-12">
              <img :src="study_report.img" alt="" /></div
          ></router-link>

          <!-- 图片和文字列 -->
          <div class="ae-imgline col-lg-8 col-sm-12">
            <ul>
              <!-- 人才培养 -->

              <li class="row">
                <router-link to="./content?id=27">
                  <!-- 图片 -->
                  <div class="imgline-img img-enlarge col-lg-5 col-sm-12">
                    <img :src="person.img" alt="" />
                  </div>
                  <!-- 文字 -->
                  <div class="imgline-content col-lg-7 col-sm-12">
                    <h3>{{ person.name }}</h3>
                    <div
                      class="imgline-content-1"
                      v-html="person.content"
                    ></div>
                  </div>
                </router-link>
              </li>

              <!-- 科学研究 -->
              <li class="row">
                <router-link to="./content?id=41">
                  <!-- 图片 -->
                  <div class="imgline-img img-enlarge col-lg-5 col-sm-12">
                    <img :src="sci.img" alt="" />
                  </div>
                  <!-- 文字 -->
                  <div class="imgline-content col-lg-7 col-sm-12">
                    <h3>{{ sci.name }}</h3>
                    <div class="imgline-content-1" v-html="sci.content"></div>
                  </div>
                </router-link>
              </li>
              <!-- 研究开发能力建设 -->
              <li class="row">
                <router-link to="./content?id=42">
                  <!-- 图片 -->
                  <div class="imgline-img img-enlarge col-lg-5 col-sm-12">
                    <img :src="dev.img" alt="" />
                  </div>
                  <!-- 文字 -->
                  <div class="imgline-content col-lg-7 col-sm-12">
                    <h3>{{ dev.name }}</h3>
                    <div class="imgline-content-1" v-html="dev.content"></div>
                    <p></p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <!-- 实验资源 -->
          <div class="ae-resource col-lg-8 col-md-12">
            <div class="ae-re-title">实验资源</div>

            <div class="ae-re-img row">
              <ul>
                <li
                  class="col-lg-3 col-md-6 col-sm-6 col-xs-6"
                  v-for="item in equipment"
                  :key="item.id"
                >
                  <router-link :to="`./content?id=39&contentid=${item.id}`">
                    <div class="img-enlarge">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="ae-re-name">{{ item.name }}</div></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- 科研团队和管理制度 -->
          <div class="row col-lg-4 col-md-12">
            <!-- 科研团队 -->
            <div class="ae-team col-lg-12 col-md-12">
              <div class="ae-re-title">科研团队</div>

              <div class="ae-team-img1" v-show="index % 2 == 0">
                <img src="../assets/img/team-1.jpg" alt="" />
              </div>
              <div class="ae-team-img2" v-show="index % 2 == 1">
                <img src="../assets/img/team-2.jpg" alt="" />
              </div>
            </div>
            <!-- 管理制度 -->
            <div class="ae-manage col-lg-12 col-md-12">
              <div class="ae-re-title">管理制度</div>

              <div class="ae-manage-content">
                <ul>
                  <li>
                    <div class="el-icon-s-order"></div>
                    <router-link to="./twice-page?id=29">管理总则</router-link>
                  </li>
                  <li>
                    <div class="el-icon-s-order"></div>
                    <router-link to="./twice-page?id=30"
                      >人员管理制度</router-link
                    >
                  </li>
                  <li>
                    <div class="el-icon-s-order"></div>
                    <router-link to="./twice-page?id=30"
                      >科研管理制度</router-link
                    >
                  </li>
                  <li>
                    <div class="el-icon-s-order"></div>
                    <router-link to="./twice-page?id=32"
                      >仪器设备管理制度</router-link
                    >
                  </li>
                  <li>
                    <div class="el-icon-s-order"></div>
                    <router-link to="./twice-page?id=33"
                      >科研成果管理制度</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ra_li: "col-lg-3 col-sm-6 col-xs-6 ra-li",
      // 研究方向图片和文字
      ra_li_img: [
        {
          id: 10,
          src: require("../assets/img/ra-img-1.jpg"),
          content: "发酵工程与合成生物学",
        },
        {
          id: 11,
          src: require("../assets/img/ra-img-2.jpg"),
          content: "结构生物学与酶学研究",
        },
        {
          id: 12,
          src: require("../assets/img/ra-img-3.jpg"),
          content: "酶应用研发",
        },
        {
          id: 13,
          src: require("../assets/img/ra-img-4.jpg"),
          content: "生物计算与分析检测",
        },
      ],
      // 新闻动态区域圆球设置
      size: "large",
      color: "#2a84eb",
      //新闻列表
      news: [],
      newsimg: "",
      //设备数组
      equipment: [],
      //学术报告
      study_report: {},
      //人才培养
      person: {},
      //科学研究
      sci: {},
      //研究开发能力建设
      dev: {},
      //图片轮播索引
      index: 0,
    };
  },
  methods: {
    animationShow($event) {
      $event.currentTarget.lastElementChild.className = "ra-li-animation";
    },
    animationNotShow($event) {
      $event.currentTarget.lastElementChild.className = "";
    },
    //科研团队图片轮播
    switchImg() {
      this.index = (this.index + 1) % 10000;
    },
    showall() {
      this.$router.push({ path: "./news-page?type=showall" });
    },
    //获取设备资源
    getRequipment() {
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=39",
      })
        .then((response) => {
          this.equipment = response.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取学术报告图片
    getStudyReport() {
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=21",
      })
        .then((response) => {
          this.study_report = response.data[0].reverse()[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取人才培养
    getPerson() {
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=27",
      })
        .then((response) => {
          this.person = response.data[0][0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取科学研究
    getSci() {
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=41",
      })
        .then((response) => {
          this.sci = response.data[0][0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获取研究开发能力建设
    getDev() {
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=42",
      })
        .then((response) => {
          this.dev = response.data[0][0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // 触发axios获取数据
  created() {
    this.getRequipment();
    this.getStudyReport();
    this.getPerson();
    this.getSci();
    this.getDev();
    this.getNews();
  },
  mounted() {
    this.t = setInterval(() => {
      this.switchImg();
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.t);
  },
};
</script>

<style lang="less" >
.home-page {
  .title-main {
    font-size: 3rem;
    color: #000000;
    margin-bottom: 14px;
  }
  .img-enlarge {
    cursor: pointer;
    transition: all 0.6s;
  }
  .img-enlarge:hover {
    transform: scale(1.1);
    position: relative;
  }
}

.research-area {
  margin-top: 30px;
  .container {
    text-align: center;
    ul {
      display: inline-block;
      padding-left: 0;
    }
  }

  .ra-img ul {
    text-align: center;
  }
  .ra-img .ra-li {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  .ra-li-font {
    margin-top: 10px;
    font-size: 1.5em;
    color: #000000;
  }
  .ra-li-animation {
    position: absolute;
    top: 40%;
    left: 50%;
    div[class^="pulse"] {
      position: absolute;
      width: 8px;
      height: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 12px #009dfd;
      border-radius: 50%;
      animation: pulse 1.2s linear infinite;
    }
  }
  .ra-btn {
    margin: 3rem auto 5rem;
    width: 15rem;
  }
  @keyframes pulse {
    0% {
    }
    70% {
      width: 40px;
      height: 40px;
      opacity: 1;
    }
    100% {
      width: 70px;
      height: 70px;
      opacity: 0;
    }
  }
}
.news-information {
  margin-top: 20px;
  padding-top: 30px;
  img {
    margin-top: 30px;
    width: 100%;
  }
  background: url("../assets/img/bg.eddafe58.jpg") no-repeat center;

  .ni-tab {
    padding-left: 0;
    margin-top: 30px;
    .el-timeline {
      padding-left: 15px;
    }
    .ni-content p:nth-of-type(-n + 2) {
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 1.5rem;
    }
    .ni-content img,
    video {
      display: none;
    }
    .ni-time {
      color: #909399;
      text-align: left;
    }
  }
  .ni-btn {
    margin: 3rem auto 5rem;
    width: 15rem;
  }
}
.academic-exchange {
  padding-top: 50px;
  margin-bottom: 30px;
  .ae-re-title {
    text-align: left;
    width: 100%;
    height: 40px;
    padding: 10px 20px 10px;
    font-size: 18px;
    color: #fff;
    background-color: #62a8ea;
  }
  .ae-imgline ul {
    padding-left: 0;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
  .ae-baseimg {
    height: 100%;
  }
  .imgline-img {
    margin-bottom: 10px;
  }
  .imgline-content {
    color: #303133;
    text-align: left;
    font-size: 1.5rem;
    h3 {
      margin-top: 0;
    }
    p:nth-of-type(2) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    p:nth-of-type(n + 3) {
      display: none;
    }
  }
  .ae-resource {
    font-size: 16px;
    margin-top: 20px;

    .ae-re-img {
      width: 100%;
      margin: 0;
      background-color: #e2ffff;
    }
    .ae-re-img ul {
      padding: 0;
    }
    .ae-re-img li {
      padding: 10px;
    }
    .ae-re-img img {
      width: 100%;
      margin-bottom: 5px;
    }
    .ae-re-img .ae-re-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .ae-team {
    margin-top: 20px;
    margin-bottom: 20px;
    img {
      width: 100%;
      margin-top: 20px;
    }
  }
  .ae-manage {
    .ae-manage-content ul {
      margin-top: 20px;
      text-align: left;
      padding-left: 10px;
      li div {
        padding: 5px;
        line-height: 20px;
      }
    }
  }
}
</style>