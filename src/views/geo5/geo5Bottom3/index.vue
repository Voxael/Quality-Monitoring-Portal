<template>
  <div class="geo5Bottom3">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">其他机器质量信息</span>
        </div>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <!-- <chart /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent ,reactive} from "vue";
//import Chart from "./chart/index";
export default defineComponent({
  components: {
    
  },
  setup() {
    const config = reactive({
      data: [
        {
          name: '北京门户服务器-1',
          value: 87
        },
        {
          name: '北京门户服务器-2',
          value: 67
        },
        {
          name: '武汉门户服务器',
          value: 75
        },
        {
          name: '武汉FTP服务器',
          value: 98
        },
        {
          name: '上海FTP服务器',
          value: 50
        },
        {
          name: '武汉ES服务器',
          value: 73
        }
      ] ,
      colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
      showValue: true,
      unit:'分'
      })
    return { config }
  }

});
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
.geo5Bottom3 {
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
  .body-box {
    border-radius: 20px;
    overflow: auto;
    .dv-cap-chart {
      width: 600px;
      height: 250px;
    }
  }
}
</style>
