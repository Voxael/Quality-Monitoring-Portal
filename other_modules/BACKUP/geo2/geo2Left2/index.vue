<template>
  <div class="geo2Left2">
    <div class="bg-color-black">
      <div>
        <p class="item0">数据推荐</p>>
        <dv-scroll-ranking-board :config="config" style="width:480px;height:180px" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const config = reactive({
      data: [
        {
          name: 'Webservice-energy CSW Catalogue',
          value: 80
        },
        {
          name: 'Webservice-energy CSW Catalogue',
          value: 80
        },
        {
          name: 'Webservice-energy CSW Catalogue',
          value: 80
        },
        {
          name: 'Webservice-energy CSW Catalogue',
          value: 80
        },
        {
          name: 'Webservice-energy CSW Catalogue',
          value: 80
        },
        {
          name: 'Webservice-energy CSW Catalogue',
          value: 80
        },
      ],
      unit: '分'
      // rowNum: 4, //表格行数
      // headerHeight: 35,
      // headerBGC: '#0f1325', //表头
      // oddRowBGC: '#0f1325', //奇数行
      // evenRowBGC: '#171c33', //偶数行
      // index: true,
      // columnWidth: [200,200,300,200,200,200],
      // align: ['center']
    })
    return { config }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 260px;
$box-width: 520px;
.geo2Left2 {
  padding: 16px;
  //padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
    .item0 {
      position: relative;
      font-size: 20px;
      color: bisque;
    }
  }
}
</style>
