<template>
  <div class="geo5Mid2">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">质量信息仪表盘</span>
        </div>
      </div>
      <div class="down">
        
        <div class="item1">
          <span>CPU占用率</span>
          <chart :tips="rate[0].tips" :colorObj="rate[0].colorData" />
        </div>
        <div class="item2">
          <span>磁盘空间使用率</span>
          <chart :tips="rate[1].tips" :colorObj="rate[1].colorData" />
        </div>
        <div class="item3">
          <span>系统内存占用率</span>
          <chart :tips="rate[2].tips" :colorObj="rate[2].colorData" />
        </div>
        <div class="item4">
          <span>虚拟机内存占用率</span>
          <chart :tips="rate[3].tips" :colorObj="rate[3].colorData" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from "vue";
import Chart from "./chart/draw";
export default defineComponent({
  components: {
    Chart,
  },

  setup() {
    const rate = reactive([
      {
        id: "centerRate1",
        tips: 65.42,
        colorData: {
          textStyle: "#3fc0fb",
          series: {
            color: ["#00bcd44a", "transparent"],
            dataColor: {
              normal: "#03a9f4",
              shadowColor: "#97e2f5",
            },
          },
        },
      },
      {
        id: "centerRate2",
        tips: 46.89,
        colorData: {
          textStyle: "#67e0e3",
          series: {
            color: ["#faf3a378", "transparent"],
            dataColor: {
              normal: "#ff9800",
              shadowColor: "#fcebad",
            },
          },
        },
      },
      {
        id: "centerRate3",
        tips: 86.19,
        colorData: {
          textStyle: "#3fc0fb",
          series: {
            color: ["#00bcd44a", "transparent"],
            dataColor: {
              normal: "#03a9f4",
              shadowColor: "#97e2f5",
            },
          },
        },
      },
      {
        id: "centerRate4",
        tips: 70.63,
        colorData: {
          textStyle: "#67e0e3",
          series: {
            color: ["#faf3a378", "transparent"],
            dataColor: {
              normal: "#ff9800",
              shadowColor: "#fcebad",
            },
          },
        },
      },
    ]);

    return {
      rate,
    };
  },
});
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
.geo5Mid2 {
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
    //top: -15px;
    // left: 20px;
  }

  .down {
    display: flex;
    flex-direction: row;
    position: relative;
    left: -16px;
    top: 30px;
    //padding: 15px 5px;
    padding-bottom: 0;
    width: 100%;
    height: 255px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }

    .item1 {
      // width: 50%;
      // height: 120px;
      position: relative;
      left: 20px;
      span {
        position: relative;
        top:15px;
        font-size: 16px;
        display: flex;
        justify-content: center;
      }
    }

    .item2 {
      // width: 50%;
      // height: 120px;
      position: relative;
      left: 20px;
      span {
        position: relative;
        top:15px;
        font-size: 16px;
        display: flex;
        justify-content: center;
      }
    }
    .item3 {
      // width: 50%;
      // height: 120px;
      position: relative;
      left: 20px;
      span {
        position: relative;
        top:15px;
        font-size: 16px;
        display: flex;
        justify-content: center;
      }
    }
    .item4 {
      // width: 50%;
      // height: 120px;
      position: relative;
      left: 20px;
      span {
        position: relative;
        top:15px;
        font-size: 16px;
        display: flex;
        justify-content: center;
      }
    }
    // }
  }
}
</style>
