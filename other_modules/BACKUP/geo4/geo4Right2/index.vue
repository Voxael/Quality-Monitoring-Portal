<template>
  <div class="geo4Right2">
    <div>
      <div class="d-flex pt-2 pl-2">
        
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">相关推荐</span>
        </div>
      </div>
      <div class="down">
        <div class="ranking">
        <!-- <span>
          <i class="iconfont icon-tongji2"></i>
        </span>
        <span class="fs-xl text mx-2 mb-1">年度负责人组件达标榜</span> -->
        <dv-scroll-ranking-board class="dv-scr-rank-board" :config="ranking" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent,reactive, onMounted } from "vue";
import Chart from "./chart/index";
export default defineComponent({
  components: {
    Chart
  },
  setup(){
    const ranking = reactive({
      data: [
        {
          name: '洛川实测苹果园种植年份及减产数据',
          value: 86
        },
        {
          name: '2019年山西省苹果种植统计年鉴',
          value: 75
        },
        {
          name: '山东栖霞苹果树背包雷达点云数据',
          value: 70
        },
        {
          name: '广州天河区局部LiDAR点云案例数据',
          value: 66
        },
        {
          name: '陕西铜川柑橘农事历信息',
          value: 53
        },
        {
          name: '山东烟台50m精度DEM数据',
          value: 40
        }
        
      ],
      carousel: 'single',
      unit: '%相似度'
    })

    return { 
      ranking,
    }

  }
});
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
.geo4Right2 {
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
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 255px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 15px;
      width: 100%;
      .dv-scr-rank-board {
        height: 220px;
      }
    }
  }


}
</style>
