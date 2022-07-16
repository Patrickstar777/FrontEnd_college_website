<template>
  <div class="footer .navbar-static-top">
    <!-- 底部导航栏 -->
    <ul class="foot-nav">
      <li class="foot-nav-link">
        <router-link to="home-page">首页</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./twice-page?id=2">实验室概况</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./twice-page?id=8">研究方向</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./twice-page?id=9">承担项目</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./content?id=14">科研成果</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./content?id=19">学术交流</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./content?id=23">开放基金</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./content?id=27">人才培养</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./content?id=28">规章制度</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./twice-page?id=34">人才招聘</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="./content?id=35">国重党建</router-link>
      </li>
      <li class="foot-nav-link">
        <router-link to="connect-us">联系我们</router-link>
      </li>
    </ul>
    <!-- 联系方式列 -->
    <div class="container">
      <div class="col-md-12 message">
        <div class="foot-logo">
          <img src="../assets/img/gongzhonghao.jpg" alt="" />
        </div>
        <div class="foot-con col-sm-8 col-lg-6">
          <div class="foot-about" style="margin-top: 5px">
            <p style="text-align: left">
              <span style="color: #fff"
                >地 址：广东省佛山市南海区狮山镇罗村大道新光源产业基地A9</span
              >
            </p>
          </div>
          <div class="foot-box" style="margin-top: 5px; color: #aaaaaa">
            广东优酶生物制造研究院有限公司 版权所有 2021
          </div>
          <div class="foot-box" style="margin-top: 5px; color: #aaaaaa">
            本站图片如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。
          </div>
          <div class="foot-box" style="margin-top: 5px; color: #aaaaaa">
            <a href="#" target="_blank" @click="toBeian" style="color: #aaaaaa">
              粤ICP备2021155025号</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  methods: {
    toBeian() {
      window.location.href = "https://beian.miit.gov.cn/#/Integrated/index";
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  background-color: #2a84eb;
  .foot-nav {
    text-align: center;
    border-bottom: 1px solid;
    border-color: #2a84eb;
    border-color: #649ff2;
    margin-bottom: 20px;
    height: 60px;
    line-height: 60px;
    .foot-nav-link {
      display: inline-block;
      a {
        width: 70px;
        height: 60px;

        color: #fff;
      }
    }
    .foot-nav-link::after {
      content: "|";
      margin: 0 10px;
      color: #fff;
    }
  }
  .el-menu {
    background-color: #2a84eb;
  }
  .message {
    text-align: left;
    margin-bottom: 50px;
    .foot-logo {
      float: left;
      width: 11rem;
      height: 11rem;
      margin-top: 10px;
      margin-right: 10px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
