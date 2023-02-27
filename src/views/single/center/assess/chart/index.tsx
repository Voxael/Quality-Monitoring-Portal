import { defineComponent, reactive, onMounted, ref, onUnmounted } from "vue";
import Draw from "./draw";
import * as echarts from "echarts";
export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const dataCount = 1000;
    const generateData = (count: number) => {
      let baseValue = Math.random();
      let time = +new Date(2022, 0, 1);
      let smallBaseValue: number;

      const next = (idx: number) => {
        smallBaseValue =
          idx % 30 === 0
            ? Math.random() * 700
            : smallBaseValue + Math.random() * 500 - 250;
        baseValue += Math.random() * 20 - 10;
        return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
      };

      const categoryData = [];
      const valueData = [];

      for (let i = 0; i < count; i++) {
        categoryData.push(
          echarts.format.formatTime("yyyy-MM-dd\nhh:mm:ss", time, false)
        );
        valueData.push(next(i).toFixed(2));
        time += 3600000;
      }

      return {
        categoryData: categoryData,
        valueData: valueData,
      };
    };
    const data = generateData(dataCount);
    // console.log('..........',data2)
    const cdata = reactive({
      data1: null,
      data2: null,
    });
    onMounted(() => {
      cdata.data1 = data.categoryData;
      cdata.data2 = data.valueData;
    });

    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      );
    };
  },
});
