import { defineComponent, watch, ref, shallowReactive } from "vue";
import * as echarts from "echarts";
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref();

    let options = {};
    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        type BarLabelOption = NonNullable<echarts.BarSeriesOption["label"]>;

        const labelOption: BarLabelOption = {
          show: true,
          position: "inside",
          distance: 15,
          align: "center",
          verticalAlign: "middle",
          rotate: 0,
          formatter: "{c}",
          //formatter: "{c}  {name|{a}}",
          fontSize: 16,
          //fontWeight  : 'bold',
          color: "#ffffff",
          rich: {
            name: {},
          },
        };

        options = {
          color: ["#343077", "#9C599E", "#E6759E", "#1E87BB"],

          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["FGDC打分", "FGDC测速", "下载速度", "响应时间"],
            top: "3%",
            left: "center",
            textStyle: {
              fontSize: 18,
            },
          },

          xAxis: [
            {
              type: "category",
              axisTick: { show: true },
              data: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日"],
              axisLabel: {
                show: true,
                fontSize: 16,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                show: true,
                fontSize: 16,
              },
            },
          ],
          series: [
            {
              name: "FGDC打分",
              type: "bar",
              barGap: "15%",
              label: labelOption,
              emphasis: {
                focus: "series",
              },
              data: [95, 86, 92, 80, 95],
              itemStyle: {
                emphasis: {
                  barBorderRadius: [20,20,0,0],
                },
                normal: {
                  barBorderRadius: [20,20,0,0],
                },
              },
            },
            {
              name: "FGDC测速",
              type: "bar",
              label: labelOption,
              emphasis: {
                focus: "series",
              },
              data: [70, 82, 91, 86, 90],
              itemStyle: {
                emphasis: {
                  barBorderRadius: [20,20,0,0],
                },
                normal: {
                  barBorderRadius: [20,20,0,0],
                },
              },
            },
            {
              name: "下载速度",
              type: "bar",
              label: labelOption,
              emphasis: {
                focus: "series",
              },
              data: [50, 32, 21, 54, 90],
              itemStyle: {
                emphasis: {
                  barBorderRadius: [20,20,0,0],
                },
                normal: {
                  barBorderRadius: [20,20,0,0],
                },
              },
            },
            {
              name: "响应时间",
              type: "bar",
              label: labelOption,
              emphasis: {
                focus: "series",
              },
              data: [98, 77, 100, 99, 40],
              itemStyle: {
                emphasis: {
                  barBorderRadius: [20,20,0,0],
                },
                normal: {
                  barBorderRadius: [20,20,0,0],
                },
              },
            },
          ],
        };

        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options);
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );
    return () => {
      const height = "300px";
      const width = "700px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
