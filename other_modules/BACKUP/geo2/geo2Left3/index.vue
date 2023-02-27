<template>
  <div class="geo2Left3">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
<!--        <span>-->
<!--          <i class="iconfont icon-chart-area" />-->
<!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">数据监测更新情况</span>
        </div>
      </div>
      <div>
        <chart />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Chart from "./chart/index";
export default defineComponent({
  components: {
    Chart
  }
})
</script>

<style lang="scss" class>
$box-height: 340px;
$box-width: 500px;
.geo2Left3 {
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
  .chart{
    position: relative;
    top: -10px;
    left: 20px;
  }
  //.chart-box {
  //  margin-top: 16px;
  //  width: 170px;
  //  height: 500px;
  //  .active-ring-name {
  //    padding-top: 10px;
  //  }
  //}
}
</style>
