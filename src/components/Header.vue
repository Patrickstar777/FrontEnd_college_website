<template>
  <div class="header">
    <div class="container">
      <!-- 搜索框和logo -->
      <div class="row">
        <!-- logo -->
        <div class="col-lg-8 col-sm-12">
          <img src="../assets/img/logo_20211101152027.png" alt="" />
        </div>
        <!-- 搜索框 -->
        <div class="search" v-show="screenWidth >= 900">
          <el-input
            v-model="search_name"
            placeholder="请输入搜索内容"
            style="width: 190px"
          ></el-input>
          <div style="float: right">
            <router-link to="./search">
              <button type="button" class="btn btn-primary" @click="newsSearch">
                新闻搜索
              </button>

              <button
                type="button"
                class="btn btn-primary"
                @click="articleSearch"
              >
                文章搜索
              </button>
            </router-link>
          </div>
        </div>
        <!-- 登录按钮 -->
        <div class="login" v-show="screenWidth >= 900">
          <a href="http://120.78.184.70/admin"
            ><el-button type="success">登录</el-button>
          </a>
        </div>
        <!-- 翻译按钮 -->
        <div class="translate">
          <a href="http://120.78.184.70:81/">
            <el-button type="text">中文</el-button></a
          >
          <a href="http://120.78.184.70:82/">
            <el-button type="text">English</el-button></a
          >
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="row">
        <el-menu class="el-menu-demo banner" mode="horizontal">
          <!-- 首页 -->
          <el-menu-item index="1" class="nav-link">
            <router-link to="home-page">首页</router-link>
          </el-menu-item>

          <!-- 实验室概况 -->
          <el-submenu index="2" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./twice-page?id=2">实验室概况</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="2-1">
              <router-link to="./content?id=5">实验室简介</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="./content?id=1">学术委员会</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="./content?id=6">实验室领导</router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
              <router-link to="./content?id=7">研究队伍</router-link>
            </el-menu-item>
            <el-menu-item index="2-5">
              <router-link to="./twice-page?id=39">研究资源</router-link>
            </el-menu-item>
          </el-submenu>
          <!-- 研究方向 -->
          <el-menu-item index="3" class="nav-link">
            <router-link to="./twice-page?id=8">研究方向</router-link>
          </el-menu-item>
          <!-- 承担项目 -->
          <el-submenu index="4" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./twice-page?id=9">承担项目</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="4-1">
              <router-link to="./twice-page?id=10">国家级项目</router-link>
            </el-menu-item>
            <el-menu-item index="4-2"
              ><router-link to="./twice-page?id=11">国际合作项目</router-link>
            </el-menu-item>
            <el-menu-item index="4-3"
              ><router-link to="./twice-page?id=12">省部级项目</router-link>
            </el-menu-item>
            <el-menu-item index="4-3"
              ><router-link to="./twice-page?id=13">横向课题</router-link>
            </el-menu-item>
          </el-submenu>
          <!-- 科研成果 -->
          <el-submenu index="5" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./content?id=14">科研成果</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="5-1">
              <router-link to="./twice-page?id=15">论文</router-link>
            </el-menu-item>
            <el-menu-item index="5-2">
              <router-link to="./twice-page?id=16">专著</router-link>
            </el-menu-item>
            <el-menu-item index="5-3">
              <router-link to="./twice-page?id=17">获奖</router-link>
            </el-menu-item>
            <el-menu-item index="5-3">
              <router-link to="./twice-page?id=18">专利</router-link>
            </el-menu-item>
          </el-submenu>
          <!-- 学术交流 -->
          <el-submenu index="6" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./content?id=19">学术交流</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="6-1">
              <router-link to="./twice-page?id=20">学术会议</router-link>
            </el-menu-item>
            <el-menu-item index="6-2">
              <router-link to="./twice-page?id=21">学术报告</router-link>
            </el-menu-item>
            <el-menu-item index="6-3">
              <router-link to="./twice-page?id=22">各类任职</router-link>
            </el-menu-item>
          </el-submenu>
          <!--开放基金 -->
          <el-submenu index="7" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./content?id=23">开放基金</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="7-1">
              <router-link to="./content?id=24">开放基金管理办法</router-link>
            </el-menu-item>
            <el-menu-item index="7-2">
              <router-link to="./content?id=25">开放基金申请指南</router-link>
            </el-menu-item>
            <el-menu-item index="7-3">
              <router-link to="./content?id=26">开放基金目录</router-link>
            </el-menu-item>
          </el-submenu>
          <!--人才培养-->
          <el-menu-item index="8" class="nav-link">
            <router-link to="./content?id=27">人才培养</router-link>
          </el-menu-item>
          <!--规章制度 -->
          <el-submenu index="9" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./content?id=28">规章制度</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="9-1">
              <router-link to="./twice-page?id=29">管理总则</router-link>
            </el-menu-item>
            <el-menu-item index="9-2">
              <router-link to="./twice-page?id=30">人员管理制度</router-link>
            </el-menu-item>
            <el-menu-item index="9-3">
              <router-link to="./twice-page?id=31">科研管理制度</router-link>
            </el-menu-item>
            <el-menu-item index="9-4">
              <router-link to="./twice-page?id=32"
                >仪器设备管理制度</router-link
              >
            </el-menu-item>
            <el-menu-item index="9-5">
              <router-link to="./twice-page?id=33"
                >科研成果管理制度</router-link
              >
            </el-menu-item>
          </el-submenu>
          <!-- 人才招聘 -->
          <el-menu-item index="10" class="nav-link">
            <router-link to="./twice-page?id=34">人才招聘</router-link>
          </el-menu-item>
          <!--国重党建  -->
          <el-submenu index="11" class="dropdown">
            <div slot="title" class="dropdown">
              <router-link to="./content?id=35">国重党建</router-link>

              <div class="glyphicon glyphicon-menu-down"></div>
            </div>
            <el-menu-item index="11-1">
              <router-link to="./twice-page?id=36">党建园地</router-link>
            </el-menu-item>
            <el-menu-item index="11-2">
              <router-link to="./twice-page?id=37">特色活动</router-link>
            </el-menu-item>
          </el-submenu>

          <!-- 联系我们 -->
          <el-menu-item index="12" class="nav-link">
            <router-link to="./connect-us">联系我们</router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MD5 from "js-md5";
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      search_name: "",
      //存放新闻和文章搜索结果
      newsData: [],
      articleData: [],
      //翻译
      lang: true,
    };
  },
  methods: {
    // 搜索功能
    newsSearch() {
      console.log();
      if (this.search_name == "") return;
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/news?name=" + this.search_name,
      })
        .then((response) => {
          this.newsData = response.data[0];
          if (this.newsData == null) {
            pubsub.publish("newsSearch", null);
          } else {
            this.newsData.map((item) => {
              //遍历进行关键字高亮
              item.content = this.brightKeyword(item.content);
            });
            pubsub.publish("newsSearch", this.newsData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    articleSearch() {
      if (this.search_name == "") return;
      this.$axios({
        method: "get",
        url:
          "http://120.78.184.70/index/index/contents?name=" + this.search_name,
      })
        .then((response) => {
          this.articleData = response.data[0];
          if (this.articleData == null) {
            pubsub.publish("articleSearch", null);
          } else {
            this.articleData.map((item) => {
              //遍历进行关键字高亮
              item.content = this.brightKeyword(item.content);
            });
            pubsub.publish("articleSearch", this.articleData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //高亮功能
    brightKeyword(val) {
      let keyword = this.search_name; //获取输入框输入的内容
      if (val.indexOf(keyword) !== -1) {
        //判断这个字段中是否包含keyword
        //如果包含的话，就把这个字段中的那一部分进行替换成html字符
        return val.replace(keyword, `<font color='red'>${keyword}</font>`);
      } else {
        return val;
      }
    },
    //翻译功能
    getText: function () {
      //初始化要传给api的数据
      var appid = "20211028000985481";
      var key = "l_9VRb3AT9xN4pK7uLx6";
      var salt = new Date().getTime();
      var query = "我是一个人";
      var from = "zh";
      var to = "en";
      var str1 = appid + query + salt + key;
      var sign = MD5(str1);
      this.$jsonp(
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
      ).then(function (response) {
        console.log(response.trans_result[0].dst);
      });
    },
    to_zh() {
      this.lang = true;
      pubsub.publish("to_lang", true);
    },
    to_en() {
      this.lang = false;

      pubsub.publish("to_lang", false);
    },
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
};
</script>

<style lang="less" >
.container {
  text-align: center;
}

.header {
  background-color: #7bd2ff;
  .container {
    position: relative;
    img {
      width: 100%;
    }
    .el-submenu {
      a {
        color: #909399;
      }
    }
    .el-submenu:hover a {
      color: #303133;
    }
    .el-submenu .el-icon-arrow-down::before {
      content: "";
    }

    .search {
      position: absolute;
      right: 10px;
      top: 100px;
      width: 390px;
      margin-top: 20px;

      button {
        margin-left: 10px;
      }
    }
    .login {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .banner {
      height: 66px;
      background-color: #7bd2ff;
      color: #76838f;
      border: 0px;
      font-weight: bold;
      .nav-link {
        font-size: 18px;
        padding-left: 11px;
        padding-right: 11px;
      }
      .el-submenu__title {
        padding-left: 11px;
        padding-right: 11px;
      }
      .dropdown {
        font-size: 18px;
      }
    }
  }
}
.router-link-active {
  color: #526069;
  text-decoration: none !important;
}
</style>