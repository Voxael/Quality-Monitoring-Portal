<template>
  <div class="geo3Center3">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">监测历史</span>
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
      header: ['时间戳', '综合评分', 'FGDC打分','FGDC测速(ms)','下载速度(kb/s)','响应时间(ms)'],
      data: [
        ['2023/01/01,01:35:37', 
        '98.13', 
        "85.26",
        '793.15',
        '265.13',
        '100.16'],

        ['2023/01/05,19:35:38', 
        "<span  class='colorRed'>0</span>", 
        '75.13',
        '523.45',
        "<span  class='colorRed'>404错误</span>",
        "<span  class='colorRed'>404错误</span>"],

        ['2023/01/07,03:35:59', 
        '99.62', 
        "87.61",
        '123.15',
        '365.85',
        '86.75'],

        ['2023/01/08,09:35:38', 
        '97.48', 
        "89.61",
        '56.13',
        '765.64',
        '92.46'],

        ['2023/01/10,20:35:07',
         "<span  class='colorRed'>0</span>",
         '92.76', 
         '79.63',
         "<span  class='colorRed'>404错误</span>",
         "<span  class='colorRed'>404错误</span>"],

        ['2023/01/10,22:12:35',
         '95.73', 
         "91.16",
         '20.36',
         '515.45',
         '100.16'],

        ['2023/01/20,17:35:38',
         '92.76',
          "87.49",
          '159.76',
          '265.13',
          '100.16'],

        ['2023/01/30,18:35:01', 
        '96.46', 
        "90.23",
        '263.89',
        '265.13',
        '100.16'],
        
      ],
      rowNum: 3, //表格行数
      headerHeight: 35,
      headerBGC: '#0f1325', //表头
      oddRowBGC: '#0f1325', //奇数行
      evenRowBGC: '#171c33', //偶数行
      index: true,
      columnWidth: [40,180],
      align: 'center'
    })
    return { config }
  }

});
</script>

<style lang="scss" class>
$box-height: 200px;
$box-width: 950px;
.geo3Center3 {
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
    left:3px;
    .dv-scr-board {
      width: 920px;
      height: 180px;
    }
  }
}
</style>
