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

        console.log(val);
        options = {
          tooltip: {
            trigger: "axis",
            //zIndex: 1,
            show: true,
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
          color: ["#0080ff", "#4cd5ce"],

          grid: {
            left: "5%",
            right: "5%",
            top: "10%",
            bottom: "5%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: [
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
              ],
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#FFFFFF",
                  fontSize: 16,
                },
                formatter: function (value) {
                  //debugger
                  var ret = ""; //拼接加\n返回的类目项
                  var maxLength = 5; //每项显示文字个数
                  var valLength = value.length; //X轴类目项的文字个数
                  var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                  if (rowN > 1) {
                    //如果类目项的文字大于3,
                    for (var i = 0; i < rowN; i++) {
                      var temp = ""; //每次截取的字符串
                      var start = i * maxLength; //开始截取的位置
                      var end = start + maxLength; //结束截取的位置
                      //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                      temp = value.substring(start, end) + "\n";
                      ret += temp; //凭借最终的字符串
                    }
                    return ret;
                  } else {
                    return value;
                  }
                },
              },
              axisLine: {
                lineStyle: {
                  color: "#0a2b52",
                  width: 0.5, //这里是为了突出显示加上的
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: "#8398DE",
                  width: 1, //这里是为了突出显示加上的
                },
              },

              axisLabel: {
                formatter: function (val) {
                  return val + "%";
                },
                show: true,
                textStyle: {
                  color: "#ffffff", //字体颜色
                  fontSize: 18,
                },
              },
              // splitLine: {
              //   show: true,
              //   lineStyle: {
              //     type: "dashed",
              //   },
              // },
            },
          ],
          series: [
            {
              name: "系统占用",
              type: "line",
              smooth: true,
              //  symbol: "none", //去掉折线点
              stack: 100,
              itemStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#d7e3fc", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#ccdbfd", // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#c1d3fe", // 100% 处的颜色
                    },
                  ]), //背景渐变色
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    //color: "#0078D7",
                  },
                },
                emphasis: {
                  //color: "#02675f",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 0.5,
                    type: "dotted",
                    //color: "#02675f", //折线的颜色
                  },
                },
              }, //线条样式
              symbolSize: 9, //折线点的大小
              areaStyle: {
                normal: {},
              },
              data: [56.2, 62.7, 60.3, 74.8, 78.6, 86.5, 90.3],
            },

            {
              name: "剩余",
              type: "line",
              smooth: true,
              //  symbol: "none", //去掉折线点
              stack: 100,
              itemStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#64CAFA", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#64CAFA", // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#0078D7", // 100% 处的颜色
                    },
                  ]), //背景渐变色
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: "#0078D7",
                  },
                },
                emphasis: {
                  color: "#02675f",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 0.5,
                    type: "dotted",
                    color: "#02675f", //折线的颜色
                  },
                },
              }, //线条样式
              symbolSize: 9, //折线点的大小
              areaStyle: {
                normal: {},
              },
              data: [38.6, 31.0, 34.2, 18.6, 13.0, 5.7, 4.1],
            },

            {
              name: "其他占用",
              type: "line",
              smooth: true,
              //  symbol: "none", //去掉折线点
              stack: 100,
              itemStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#0FDE88", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#24C47E", // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#05DE5F", // 100% 处的颜色
                    },
                  ]), //背景渐变色
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: "#039339",
                  },
                },
                emphasis: {
                  color: "#02675f",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 0.5,
                    type: "dotted",
                    color: "#02675f", //折线的颜色
                  },
                },
              }, //线条样式
              symbolSize: 9, //折线点的大小
              areaStyle: {
                normal: {},
              },
              data: [5.2, 6.3, 5.5, 6.6, 8.4, 7.8, 5.6],
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
      const height = "290px";
      const width = "430px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
