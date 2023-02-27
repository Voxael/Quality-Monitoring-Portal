<template>
  <div class="geo3Center1">
    <div>
      <div class="d-flex pt-2 pl-2">
        <!--        <span>-->
        <!--          <i class="iconfont icon-chart-area" />-->
        <!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">监测指标展示</span>
        </div>
      </div>

      <div class="up">
        <div
          class="bg-color-black item"
          v-for="item in titleItem"
          :key="item.title"
        >
          <p class="ml-3 colorBlue fw-b">{{ item.title }}</p>
          <div>
            <dv-digital-flop
              class="dv-dig-flop ml-1 mt-1 pl-3"
              :config="item.config"
            />
          </div>
        </div>
      </div>

      <!-- <div>
        <chart />
      </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from "vue";
import Chart from "./chart/index";
export default defineComponent({
  components: {
    Chart,
  },
  setup() {
    // 下层数据
    const titleDate = [
      {
        number: 85.17,
        text: "平均综合得分",
      },{
        number: 92.16,
        text: "平均FGDC得分",
      },{
        number: 92.16,
        text: "平均FGDC测速",
      },
      {
        number: 86.49,
        text: "最近一次综合得分",
      },
      {
        number: 71.5,
        text: "最近一次FGDC得分",
      },{
        number: 92.16,
        text: "最近一次FGDC测速",
      },{
        number: 81.3,
        text: "平均响应率(%)",
      },{
        number: 120.6,
        text: "平均响应时间(ms)",
      },
      {
        number: 811.3,
        text: "平均下载速度(kb/s)",
      },
      
    ];
    const titleItem = reactive([]);

    onMounted(() => {
      setData();
    });

    const setData = () => {
      titleDate.map((e) => {
        titleItem.push({
          title: e.text,
          config: {
            number: [e.number],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 20,
            },
          },
        });
      });
    };
    return {
      titleItem,
    };
  },
});
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 660px;
.geo3Center1 {
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
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 10px;
      width: 32%;
      height: 72px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
}
</style>
