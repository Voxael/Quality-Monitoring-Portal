<template>
  <div class="geoLeft2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-chart-area" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">监测结果</span>
        </div>
      </div>
      <div>
        <Chart ref="gl2_in"/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref, onMounted, nextTick, onUpdated} from 'vue'
import Chart from "./chart";
import * as echarts from 'echarts'
export default defineComponent({
  components: {
    Chart
  },

  setup(propos, {expose}){
    const gl2_in = ref(null)
    const getgl2_in_dom = () =>
    {
      return gl2_in.value.gl2_ch()
    }
    const resetDate = () =>
    {
      gl2_in.value.setDate()
    }
    //子组件在onMounted不需要使用该函数
    // onMounted(() => {
    //
    // })

    expose({
      getgl2_in_dom,
      resetDate
    })

    return {
      gl2_in
    }
  }
})
</script>

<style lang="scss" class>
$box-height: 320px;
$box-width: 500px;
.geoLeft2 {
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
    position: relative;
    left: 10px;
  }
  .chart{
    position: relative;
    top: -65px;
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
