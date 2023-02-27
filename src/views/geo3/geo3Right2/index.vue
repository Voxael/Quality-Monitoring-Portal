<template>
  <div class="geo3Right2">
    <div>
      <div class="d-flex pt-2 pl-2">
        
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">相似服务推荐</span>
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
          name: 'EMP_INDS(FUA)',
          value: 86
        },
        {
          name: 'GDP_MPPS(NUTSO)',
          value: 75
        },
        {
          name: 'life_exp_female_80(NUTS0)',
          value: 70
        },
        {
          name: 'life_exp_female_80(NUTS1)',
          value: 66
        },
        {
          name: 'REF_ALAND_CLC_321(NUTS0)',
          value: 53
        },
        {
          name: 'REF_ALAND_CLC_321(NUTS3)',
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
.geo3Right2 {
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
