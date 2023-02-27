<template>
  <div class="buttons">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">按钮</span>
        </div>
      </div>

      <div class="group">
        <div class="inner">
          <button class="unique">下载速度</button>
        </div>

        <div class="inner">
          <button class="unique">响应时间</button>
        </div>

        <div class="inner">
          <button class="unique">FGDC打分</button>
        </div>

        <div class="inner">
          <button class="unique">FGDC测速</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Chart from "./chart/index";
export default defineComponent({
  components: {
    Chart,
  },
});
</script>

<style lang="scss" class>
$box-height: 130px;
$box-width: 950px;
.buttons {
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
  .group {
    display: flex;
    position: relative;
    left:15px;
    top:5px;
    .inner {
      margin: 5px;
    }
  }
  .unique {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    font-weight: 400;
    height: 70px;
    width: 220px;
    border: 0px solid;
    background-image: linear-gradient(45deg, blue, #00f0a0, blue);
    background-size: 500% 400%;
    color: white;
    border-radius: 50px;
    transition: 0.6s all;
  }

  .unique:hover {
    background-position: 75% 50%;
    transform: perspective(100px);
  }

  .unique:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
}
</style>
