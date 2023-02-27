<template>
  <div class="compa">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">服务器指标对比</span>
        </div>
      </div>
      <div class="charts">
        <chart ref="b_cha" />
      </div>
      <div class="group">
        <div class="inner">
          <button class="unique" @click="button1_click">CPU占用</button>
        </div>

        <div class="inner">
          <button class="unique" @click="button1_click">内存占用</button>
        </div>

        <div class="inner">
          <button class="unique" @click="button1_click">硬盘容量</button>
        </div>

        <div class="inner">
          <button class="unique" @click="button1_click">虚拟机内存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Chart from "./chart/index";
export default defineComponent({
  components: {
    Chart,
  },
  setup() {
    const b_cha = ref();

    const button1_click = () => {
      b_cha.value.changedata();
    };

    return {
      b_cha,
      button1_click,
    };
  },
});
</script>

<style lang="scss" class>
$box-height: 280px;
$box-width: 1200px;
.compa {
  //padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;

  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: bisque;
    font-size: 20px;
  }
  .chart {
    position: relative;
    top: -2px;
    left: -35px;
    .active-ring-name {
      padding-top: 10px;
    }
  }

  .group {
    display: vertical;
    position: relative;
    left: 1070px;
    top: -300px;
    .inner {
      margin: 20px;
    }
  }

  .unique {
    width: 9em;
    height: 3em;
    border-radius: 30em;
    font-size: 15px;
    font-family: inherit;
    border: none;
    position: relative;
    overflow: hidden;
    background-color: #6268bd;
    color: #fff;

    z-index: 1;
    box-shadow: 
    //0px 0px 2px 2px rgb(175, 175, 175);
      0px 0px 1.5px 1.5px #c5c5c5, 0px 0px 1.5px 1.5px #ffffff;
  }

  .unique::before {
    content: "";
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;

    background-image: linear-gradient(to right, #7d0fd8 0%, #504aa8 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  .unique:hover::before {
    width: 9em;
  }
}
</style>
