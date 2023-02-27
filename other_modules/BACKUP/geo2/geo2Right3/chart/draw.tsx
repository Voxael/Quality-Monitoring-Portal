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
            show: true,
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            left: 'center',
            itemSize: 25,
            top: 85,
            feature: {
              dataView: { show: false, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: false },
              saveAsImage: { show: false }
            }
          },
          legend: {
            data: ['数目']
          },
          xAxis: [
            {
              type: 'category',
              name: '分数区间',
              data: [
                '1-10',
                '10-20',
                '20-30',
                '30-40',
                '40-50',
                '50-60',
                '60-70',
                '70-80',
                '80-90',
                '90-100',
              ],
              position: "top",
              nameLocation: "middle",
              nameTextStyle: {
                lineHeight: -50,
                fontSize: 20
              },
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '数目',
              min: 0,
              max: 1000,
              interval: 100,
              nameLocation: "start",
              nameTextStyle: {
                lineHeight: 13,
                fontSize: 0
              },
              axisLabel: {
                formatter: '{value} 个'
              }
            }
          ],
          series: [
            {
              name: 'FGDC分数分布',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + '个';
                }
              },
              data: [350, 240, 380, 450, 500, 520, 490, 760, 680, 510]
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
      const height = "370px"
      const width = "530px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})