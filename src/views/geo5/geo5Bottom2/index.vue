<template>
  <div class="geo5Bottom2">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">历史监测信息</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
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
      header: ['时间戳', '综合评分','硬盘存储(TB)','系统内存(GB)','虚拟机内存(GB)'],
      data: [
        ['01/01,01:35', '98.13', '265.13','100.16','56.13'],

        ['01/05,19:35', "<span  class='colorRed'>50.13</span>", "<span  class='colorRed'>5.05</span>","165.45","<span  class='colorRed'>14.23</span>"],

        ['01/02,03:35', '99.62', '365.85','86.75',"73.12"],

        ['01/02,09:35', '97.48', '765.64','92.46','43.89'],

        ['01/05,20:35', "<span  class='colorRed'>45.78</span>", "541.16","<span  class='colorRed'>30.13</span>","<span  class='colorRed'>7.98</span>"],

        ['01/03,12:35', '95.73', '515.45','175.16','99.78'],

        ['01/05,17:35', '92.76', '265.13','250.78','105.74'],

        ['01/05,18:35', '96.46', '265.13','100.16','100.02'],
        
        
      ],
      rowNum: 5, //表格行数
      headerHeight: 35,
      headerBGC: '#0f1325', //表头
      oddRowBGC: '#0f1325', //奇数行
      evenRowBGC: '#171c33', //偶数行
      //index: true,
      columnWidth: [120,100],
      align: ['center']
    })
    return { config }
  }

});
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
.geo5Bottom2 {
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
    border-radius: 15px;
    overflow: auto;
    position:relative;
    left:10px;
    .dv-scr-board {
      width: 620px;
      height: 250px;
    }
  }
}
</style>
