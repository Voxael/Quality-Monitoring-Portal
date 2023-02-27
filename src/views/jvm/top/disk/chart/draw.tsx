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
        options = {
          // title: {
          //   text: "阶梯瀑布图",
          //   subtext: "From ExcelHome",
          //   sublink: "http://e.weibo.com/1341556070/Aj1J2x5a5",
          // },
          color:["#2EC7C9","#B6A2DE"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              var tar;
              if (params[1].value != "-") {
                tar = params[1];
              } else if (params[2].value != "-") {
                tar = params[2];
              }
              else {
                tar = params[0];
              }
              return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
            },
          },
          legend: {
            data: ["下降", "上升"],
          },

          xAxis: [
            {
              type: "category",
              splitLine: { show: false },
              data: (function () {
                var list = [];
                for (var i = 1; i <= 11; i++) {
                  list.push("1月" + i + "日");
                }
                return list;
              })(),
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLabel:{
                testStyle:
                {
                  fontSize:5,
                },
                formatter:'{value}GB'
              }
            },
          ],
          grid:{
            left:55
          },

          series: [
            {
              name: "总量",
              type: "bar",
              stack: "总量",
              itemStyle: {
                normal: {
                  barBorderColor: "rgba(0,0,0,0)",
                  color: "rgba(0,0,0,0)",
                },
                emphasis: {
                  barBorderColor: "rgba(0,0,0,0)",
                  color: "rgba(0,0,0,0)",
                },
              },
              data: [
                0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292,
              ],
            },
            {
              name: "上升",
              type: "bar",
              stack: "总量",
              itemStyle: { 
                normal: 
                { 
                  label: 
                  { 
                    show: true, 
                    position: "top" ,
                    color:'#ffffff'
                  } 
                } 
              },
              data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"],
            },
            {
              name: "下降",
              type: "bar",
              stack: "总量",
              itemStyle: {
                normal: { 
                  label: { 
                    show: true, 
                    position: "bottom", 
                    color:'#ffffff'
                  } 
                },
              },
              data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203],
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
      const width = "480px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
