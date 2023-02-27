<template>
  <div class="geo5Mid1">
    <div >
      <div class="d-flex pt-2 pl-2">
<!--        <span>-->
<!--          <i class="iconfont icon-chart-area" />-->
<!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">质量综合得分</span>
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
$box-height: 300px;
$box-width: 620px;
.geo5Mid1 {
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
    top: -15px;
    // left: 20px;
  }
  
}
</style>
