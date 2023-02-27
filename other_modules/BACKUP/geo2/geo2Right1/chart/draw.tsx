import { defineComponent, ref, watch, shallowReactive } from 'vue'

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
    // 配置项
    let options = {}

    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center',
            show: false
          },
          tooltip: {
            trigger: 'item'
          },
          // toolbox: {
          //   show: true,
          //   feature: {
          //     mark: { show: true },
          //     dataView: { show: true, readOnly: false },
          //     restore: { show: true },
          //     saveAsImage: { show: true }
          //   }
          // },
          color: ['#1E90FF', '#87CEEB', '#1E90FF', '#87CEEB', '#1E90FF'],
          legend: {
            // orient: 'vertical',
            top: 'top'
          },
          series: [
            {
              name: '错误类型情况',
              type: 'pie',
              radius: ['0%', '40%'],
              data: [
                { value: 1048, name: '404' },
                { value: 735, name: '403' },
                { value: 580, name: '405' },
                { value: 484, name: '414' },
                { value: 300, name: '500' }
              ],
              labelLine: {
                length2: 80,
                lineStyle: {
                  color: '#235894'
                }
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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
      const height = "300px"
      const width = "460px"

      return <div>
        <echart ref={chartRef} options={options} height={height} width={width} />
      </div>
    }
  }
})

