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
        
        const colors = ['#5470C6', '#EE6666'];

        options = {
          color: colors,

          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            top:'3%',
            textStyle: {
              fontSize: 15
            }
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params: any) {
                    return (
                      '质量得分  ' +
                      params.value +
                      (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    );
                  }
                }
              },
        
              // prettier-ignore
              data: ['2月1日', '2月2日', '2月3日', '2月4日', '2月5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月11日', '2月12日']
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params: any) {
                    return (
                      '质量得分  ' +
                      params.value +
                      (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    );
                  }
                }
              },
        
              // prettier-ignore
              data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日', '1月11日', '1月12日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '质量得分(1月)',
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              emphasis: {
                focus: 'series'
              },
              data: [
                82.6, 25.9, 91.0, 26.4, 28.7, 70.7, 95.6, 82.2, 48.7, 18.8, 36.0, 52.3
              ]
            },
            {
              name: '质量得分(2月)',
              type: 'line',
              smooth: true,
              emphasis: {
                focus: 'series'
              },
              data: [
                23.9, 55.9, 11.1, 18.7, 48.3, 69.2, 31.6, 46.6, 55.4, 18.4, 10.3, 80.7
              ]
            }
          ]
         
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
      const width = "650px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
