import {defineComponent, watch, ref, shallowReactive} from 'vue';
import * as echarts from 'echarts';
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref()

    let options = {}
    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            right: 'center',
            itemSize: 25,
            top: 55,
            feature: {
              dataView: { show: false, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: false },
              // saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['增加', '减少']
          },
          xAxis: [
            {
              type: 'category',
              position: "top",

              data: ['子主题1', '子主题2', '子主题3', '子主题4', '子主题5', '子主题6'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              // name: '数目',
              min: 0,
              max: 100,
              interval: 10,
              axisLabel: {
                formatter: '{value} 个'
              }
            }
          ],
          series: [
            {
              name: '增加',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 个';
                }
              },
              data: [20, 49, 70, 23, 25, 76]
            },
            {
              name: '减少',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 个';
                }
              },
              data: [26, 59, 90, 26, 28, 70]
            }
          ]
        };

        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options)
        }
      },
      {
        immediate: true,
        deep: true
      }
    )
    return () => {
      const height = "350px"
      const width = "500px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})