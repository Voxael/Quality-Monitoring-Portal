import { defineComponent, reactive, onMounted, ref, onUnmounted } from "vue";
import Draw from "./draw";

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      category: [
        "1月1日",
        "1月2日",
        "1月3日",
        "1月4日",
        "1月5日",

        "1月6日",
        "1月7日",
        "1月8日",
        "1月9日",
        "1月10日",

        "1月11日",
        "1月12日",
        "1月13日",
        "1月14日",
        "1月15日",

        "1月16日",
        "1月17日",
        "1月18日",
        "1月19日",
        "1月20日",
      ],
      lineData: [
        983, 1000, 989, 964, 1000, 997, 1000, 995, 1000, 966, 986, 1002, 1000,
        1000, 999, 1000, 1000, 996, 1000, 1035,
      ],
      barData: [
        550, 252, 500, 550, 460,

        750, 650, 650, 500, 232, 244, 333, 460, 140, 215,

        850, 850, 660, 525, 750,
      ],
      rateData: [],
    });

    const setData = () => {
      for (let i = 0; i < cdata.barData.length - 1; i++) {
        const rate = cdata.barData[i] / cdata.lineData[i]*100;
        cdata.rateData.push(rate.toFixed(2));
      }
    };

    onMounted(() => {
      setData();
    });

    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      );
    };
  },
});
