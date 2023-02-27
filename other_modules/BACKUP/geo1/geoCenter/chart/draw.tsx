import { defineComponent, ref, watch, shallowReactive } from 'vue'
import * as echarts from 'echarts';
import 'echarts-gl'
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  }
} as const
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref()
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'
    // 配置项
    let options = {}
    watch(
        () => props.cdata,
        (val:any) => {
        options = {
            title: {
              text: 'geocenter',
              show: false
            },
          backgroundColor: '#000',
          globe: {
            baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
            heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.1,
            shading: 'lambert',
            environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
            light: {
              ambient: {
                intensity: 0.1
              },
              main: {
                intensity: 1.5
              }
            },
            layers: [
              {
                type: 'blend',
                blendTo: 'emission',
                texture: ROOT_PATH + '/data-gl/asset/night.jpg'
              },
              {
                type: 'overlay',
                texture: ROOT_PATH + '/data-gl/asset/clouds.png',
                shading: 'lambert',
                distance: 5
              }
            ]
          },
          series: []
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
      );

    return () => {
        const height = "690px"
        const width = "1000px"

        return <div>
            <echart ref={chartRef} options={options} height={height} width={width}/>
        </div>
    }
  }
}
)