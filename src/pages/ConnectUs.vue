<template>
  <div class="connect">
    <div class="container">
      <h2>联系我们</h2>
      <hr />
      <div class="news-content">
        <p>地址：佛山市南海区狮山镇罗村朗沙光明大道15号A9座一楼之一、二楼</p>
        <p>邮政编码：528200</p>
        <p>邮箱：huangrq@yong-h.com</p>

        <br />
        <baidu-map
          class="bmView"
          :scroll-wheel-zoom="true"
          :center="location"
          :zoom="zoom"
          ak="E5OKaBy9WAzhfXoAqeG64j3UFzniUIvT"
        >
          <bm-view class="bdmap"></bm-view>
        </baidu-map>
        <!-- <div class="bdmap"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import BMapGL from "vue-baidu-map";
export default {
  data() {
    return {
      location: {
        lng: 113.047841,
        lat: 23.048034,
      },
      zoom: 16,
    };
  },

  // mounted() {
  //   var map = new BMapGL.Map("bdmap"); // 创建地图实例
  //   var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
  //   map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  //   map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  //   map.setHeading(64.5); //设置地图旋转角度
  //   map.setTilt(73); //设置地图的倾斜角度

  // // 禁止地图旋转和倾斜可以通过配置项进行设置
  // var map = new BMapGL.Map("allmap", {
  //   enableRotate: false,
  //   enableTilt: false,
  // });
  // },
};
</script>

<style lang="less" scoped>
.connect {
  background: url("../assets/img/bg.eddafe58.jpg") no-repeat bottom;
}
.bdmap {
  width: 400px;
  height: 400px;
}
@media screen and (max-width: 750px) {
  .bdmap {
    width: 95% !important;
  }
}
</style>