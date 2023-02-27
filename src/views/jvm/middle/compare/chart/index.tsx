import { defineComponent, reactive, onMounted, ref, onUnmounted } from 'vue';
import Draw from './draw'

export default defineComponent({
  components: {
    Draw
  },
  setup(propos, {expose}) {
    
    const cdata = reactive({
      data1: null,
      data2: null,
      data3: null,
      data4: null,
      data5: null
    })
    const getdata = () => {
      var list = [];
      for (var i = 1; i <= 30; i++) {
        list.push(65-Math.round(Math.random() * 10));
      }
      return list;
    }
    const getdata2 = () => {
      var list = [];
      for (var i = 1; i <= 30; i++) {
        list.push(30-Math.round(Math.random() * 15));
      }
      return list;
    }
    const getdata3 = () => {
      var list = [];
      for (var i = 1; i <= 30; i++) {
        list.push(20-Math.round(Math.random() * 15));
      }
      return list;
    }
    const getdata4 = () => {
      var list = [];
      for (var i = 1; i <= 30; i++) {
        list.push(50-Math.round(Math.random() * 20));
      }
      return list;
    }
    const getdata5 = () => {
      var list = [];
      for (var i = 1; i <= 30; i++) {
        list.push(55-Math.round(Math.random() * 12));
      }
      return list;
    }
    onMounted(()=>{
      cdata.data1 = getdata()
      cdata.data2 = getdata2()
      cdata.data3 = getdata3()
      cdata.data4 = getdata4()
      cdata.data5 = getdata5()
    })

    const changedata = () => {
      cdata.data1 = getdata()
      cdata.data2 = getdata2()
      cdata.data3 = getdata3()
      cdata.data4 = getdata4()
      cdata.data5 = getdata5()
    }


    expose({
      changedata
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