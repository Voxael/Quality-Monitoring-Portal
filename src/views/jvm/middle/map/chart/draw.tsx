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
        
          // options = {
          //   // 加载 bmap 组件
          //   bmap: {
          //     // 百度地图中心经纬度。默认为 [104.114129, 37.550339]。
          //     center: [120.13066322374, 30.240018034923],
          //     // 百度地图缩放级别。默认为 5。
          //     zoom: 14,
          //     // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'。默认关闭。
          //     roam: true,
          //     // 百度地图的旧版自定义样式，见 https://lbsyun.baidu.com/custom/index.htm
          //     mapStyle: {},
          //     // 百度地图 3.0 之后的新版自定义样式，见 https://lbsyun.baidu.com/index.php?title=open/custom
          //     mapStyleV2: {},
          //     // 百度地图的初始化配置，见 https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a0b1
          //     mapOptions: {
          //       // 禁用百度地图自带的底图可点功能
          //       enableMapClick: false,
          //     },
          //   },
          //   series: [
          //     {
          //       type: "scatter",
          //       // 使用百度地图坐标系
          //       coordinateSystem: "bmap",
          //       // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
          //       data: [[120, 30, 1]],
          //       // 编码数据项中第三个元素作为 value 维度
          //       encode: {
          //         value: 2,
          //       },
          //     },
          //   ],
          // },
        
      
      // {
      //   immediate: true,
      //   deep: true,
      // }
  });
    return () => {
      const height = "280px";
      const width = "620px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
