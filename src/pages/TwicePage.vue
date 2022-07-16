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
        <span
          ><router-link :to="`./twice-page?id=${id}`"
            >{{ tab }}>></router-link
          ></span
        >
        <span>栏目内容</span>
      </div>
      <div class="news-content">
        <ul>
          <li
            v-for="item in researchs"
            :key="item.id"
            :item="item"
            @click="getContenId(item)"
          >
            <a>{{ item.name }} </a>
          </li>
        </ul>
      </div>
      <div class="news-end">共 {{ length }} 条</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      researchs: [],
      id: -1,
      contentid: -1,
      name: "",
      content: "",
      //大分类名字
      tab: "",
      //小类数量
      length: 0,
    };
  },
  methods: {
    getContenId(item) {
      this.contentid = item.id;
      this.$router.push({
        path: "./content?id=" + this.id + "&contentid=" + this.contentid,
      });
    },
    reload() {
      this.id = this.$route.query.id;
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/content?id=" + this.id,
      })
        .then((response) => {
          this.researchs = response.data[0];
          if (this.researchs == null) {
            this.length = 0;
          } else {
            this.length = this.researchs.length;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.$axios({
        method: "get",
        url: "http://120.78.184.70/index/index/nav",
      })
        .then((response) => {
          //输出含有所有类和id的数组
          // console.log(response.data[0]);
          for (let item of response.data[0]) {
            if (item.id == this.id * 1) {
              this.tab = item.name;
              break;
            } else {
              this.tab = "无分类";
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.reload();
  },
  watch: {
    $route: "reload",
  },
};
</script>

<style scoped>
.twice-page {
  background: url("../assets/img/bg.eddafe58.jpg") no-repeat bottom;
}
</style>