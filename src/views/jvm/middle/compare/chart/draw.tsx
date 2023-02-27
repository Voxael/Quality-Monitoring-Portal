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
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [
              "data11.us.geodatabase",
              "ip-10-1-230",
              "china-geoss-client-entry",
              "china-geoss-client-entry-2",
              "ip-10-1-1-28",
            ],
          },
          calculable: true,
          dataZoom: {
            show: true,
            realtime: true,
            start: 20,
            end: 80,
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: (function () {
                var list = [];
                for (var i = 1; i <= 30; i++) {
                  list.push("2022-01-" + i);
                }
                return list;
              })(),
            },
          ],
          yAxis: [
            {
              name:'百分比',
              type: "value",
              axisLabel:{
                formatter:'{value}%'
              }
            },
          ],
          series: [
            {
              name: "data11.us.geodatabase",
              type: "line",
              data: val.data1,
              itemStyle: {
                
                normal: {
                  lineStyle: {
                    width: 4, 
                    //颜色
                    color: '#82B7FE',
                    shadowColor: '#82B7FE',
                    shadowBlur: 7,
                  },
                },
              },
              symbol:'none',
            },
            {
              name: "ip-10-1-230",
              type: "line",
              data: val.data2,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 4, 
                    //颜色
                    color: '#A6DAFF',
                    shadowColor: '#A6DAFF',
                    shadowBlur: 7,
                  },
                },
              },
              symbol:'none',
              
            },
            {
              name: "china-geoss-client-entry",
              type: "line",
              data: val.data3,
              // data: (function () {
              //   var list = [];
              //   for (var i = 1; i <= 30; i++) {
              //     list.push(80-Math.round(Math.random() * 10));
              //   }
              //   return list;
              // })(),
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 4, 
                    //颜色
                    color: '#B7E5FF',
                    shadowColor: '#B7E5FF',
                    shadowBlur: 7,
                  },
                },
              },
              symbol:'none',
            },
            {
              name: "china-geoss-client-entry-2",
              type: "line",
              data: val.data4,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 4, 
                    //颜色
                    color: '#76B7DA',
                    shadowColor: '#76B7DA',
                    shadowBlur: 7,
                  },
                },
              },
              symbol:'none',
            },
            {
              name: "ip-10-1-1-28",
              type: "line",
              data: val.data5,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 4, 
                    //颜色
                    color: '#5696CC',
                    shadowColor: '#5696CC',
                    shadowBlur: 7,
                  },
                },
              },
              symbol:'none',
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
      const width = "1200px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
