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
          
        };
  
      },
      {
        immediate: true,
        deep: true
      }
    )
    return () => {
      const height = "250px"
      const width = "600px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})