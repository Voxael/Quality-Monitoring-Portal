import { defineComponent, reactive, onMounted, ref, onUnmounted } from 'vue';
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup() {
    let base = +new Date(2016, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let valueBase = Math.random() * 300;
    let valueBase2 = Math.random() * 50;
    let data = [];
    let data2 = [];
    // console.log('..........',data2)
    const cdata = reactive({
      data1: data,
      data2: data2
    })

    const setDate = () => {
      for (var i = 1; i < 10; i++) {
        var now = new Date((base += oneDay));
        var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
        valueBase <= 0 && (valueBase = Math.random() * 300);
        cdata.data1.push([dayStr, valueBase]);
        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
        cdata.data2.push([dayStr, valueBase2]);
    }
    }


    onMounted(() => {
      setDate()
    })

    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      )
    }
  },
})