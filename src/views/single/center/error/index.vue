<template>
  <div class="geo3Left3">
    <div>
      <div class="d-flex pt-2 pl-2">
        <!--        <span>-->
        <!--          <i class="iconfont icon-chart-area" />-->
        <!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">错误统计</span>
        </div>
      </div>

      <!-- <div class="item1">
        <span>CPU占用率</span>
        <chart :tips="rate[0].tips" :colorObj="rate[0].colorData" />
      </div> -->
      <div>
        <chart />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Chart from "./chart/index";
export default defineComponent({
  components: {
    Chart,
  },

  // setup() {
  //   const rate = reactive([
  //     {
  //       id: "centerRate1",
  //       tips: 65.42,
  //       colorData: {
  //         textStyle: "#3fc0fb",
  //         series: {
  //           color: ["#00bcd44a", "transparent"],
  //           dataColor: {
  //             normal: "#03a9f4",
  //             shadowColor: "#97e2f5",
  //           },
  //         },
  //       },
  //     },
  //   ]);

  //   return {
  //     rate,
  //   };
  // },
});
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 475px;
.geo3Left3 {
  //padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: bisque;
    font-size: 20px;
  }
  .chart {
    position: relative;
    // top: 10px;
    left: -50px;
  }
  // .chart-box {
  //  margin-top: 16px;
  //  width: 170px;
  //  height: 500px;
  //  .active-ring-name {
  //    padding-top: 10px;
  //  }
  // }
}
</style>
