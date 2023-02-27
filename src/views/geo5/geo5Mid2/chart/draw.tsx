import { defineComponent, watch, shallowReactive } from "vue";
import * as echarts from "echarts";
// 声明类型
const PropsType = {
  tips: {
    type: Number,
    default: 50,
    require: true,
  },
  colorObj: {
    type: Object,
    default: () => ({
      textStyle: "#3fc0fb",
      series: {
        color: ["#00bcd44a", "transparent"],
        dataColor: {
          normal: "#03a9f4",
          shadowColor: "#97e2f5",
        },
      },
    }),
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    let options = shallowReactive({ title: null, series: null });
    // 监听
    watch(
      () => props.tips,
      (val: any) => {
        //const colors = ['#5470C6', '#EE6666'];
        options = {
          title: {
            text: val * 1 + "%",
            x: "center",
            y: "center",
            textStyle: {
              color: props.colorObj.textStyle,
              fontSize: 16,
            },
          },
          series: [
            {
              type: "pie",
              radius: ["75%", "80%"],
              center: ["50%", "50%"],
              hoverAnimation: false,
              color: props.colorObj.series.color,
              label: {
                normal: {
                  show: false,
                },
              },
              data: [
                {
                  value: val,
                  itemStyle: {
                    normal: {
                      color: props.colorObj.series.dataColor.normal,
                      shadowBlur: 10,
                      shadowColor: props.colorObj.series.dataColor.shadowColor,
                    },
                  },
                },
                {
                  value: 100 - val,
                },
              ],
            },
          ],
        };
      },
      {
        immediate: true,
        deep: true,
      }
    );
    return () => {
      const height = "200px";
      const width = "150px";
      return (
        <div>
          <echart options={options} height={height} width={width} />
        </div>
      );
    };
  },
});
