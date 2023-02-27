import { defineComponent, ref, watch, shallowReactive } from 'vue'

// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref()
    // 配置项
    let options = null
    watch(
        () => props.cdata,
        (val:any) => {
        options = {
            title: {
              text: 'georight1',
              show: false
            },
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          series: [
            {
              name: 'Pressure',
              type: 'gauge',
              detail: {
                formatter: '{value}'
              },
              data: [
                {
                  value: val.data,
                  name: 'SCORE'
                }
              ]
            }
          ]
        };

        //手动触发更新
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
        const height = "200px"
        const width = "260px"

        return <div>
            <echart ref={chartRef} options={options} height={height} width={width}/>
        </div>
    }
  }
}
)