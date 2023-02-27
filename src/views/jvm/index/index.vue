<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColors" />
            <div class="title">
              <span class="title-text">{{ title }}</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColors"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
              </span>
            </div>
            <div class="react-left ml-3">
              <span class="text">{{ subtitle[1] }}</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-black mr-3">
              <span class="text fw-b">{{ subtitle[2] }}</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">
                {{ timeInfo.dateDay }}
              </span>
            </div>
          </div>
        </div>
        <!--        从这里开始看-->
        <div class="body-box">
          <div class="top-box">
            <div class="cpu">
              <dv-border-box-12>
                <cpu></cpu>
              </dv-border-box-12>
            </div>
            <div class="memory">
              <dv-border-box-12>
                <memory></memory>
              </dv-border-box-12>
            </div>
            <div class="disk">
              <dv-border-box-12>
                <disk></disk>
              </dv-border-box-12>
            </div>
            <div class="jmemory">
              <dv-border-box-12>
                <jmemory></jmemory>
              </dv-border-box-12>
            </div>
          </div>

          <div class="middle-box">
            <div class="map">
              <dv-border-box-12>
                <maps></maps>
              </dv-border-box-12>
            </div>
            <div class="compare">
              <dv-border-box-12>
                <comp></comp>
              </dv-border-box-12>
            </div>
          </div>

          <div class="bottom-box">
            <div class="detail">
              <dv-border-box-12>
                <detailss></detailss>
              </dv-border-box-12>
            </div>
            <div class="list">
              <dv-border-box-12>
                <lists></lists>
              </dv-border-box-12>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
  nextTick,
} from "vue";
import { formatTime } from "@/utils";
import { WEEK } from "@/constant/index";
import useDraw from "@/utils/useDraw";
import { title, subtitle, moduleInfo } from "@/constant/index";
import cpu from "../top/cpu/index.vue";
import memory from "../top/memory/index.vue";
import disk from "../top/disk/index.vue";
import jmemory from "../top/jmemory/index.vue";

import maps from "../middle/map/index.vue";
import comp from "../middle/compare/index.vue";
import lists from "../bottom/list/index.vue";
import detailss from "../bottom/detail/index.vue";

import * as echarts from "echarts";
export default defineComponent({
  components: {
    cpu,
    memory,
    disk,
    jmemory,

    maps,
    comp,
    detailss,
    lists,
  },
  setup() {
    const decorationColors = ["#568aea", "#000000"];
    // * 加载标识
    const loading = ref<boolean>(true);
    // * 时间内容
    const timeInfo = reactive({
      setInterval: 0,
      dateDay: "",
      dateYear: "",
      dateWeek: "",
    });

    // * 适配处理
    const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();

    // 生命周期
    onMounted(() => {
      cancelLoading();
      handleTime();
      // todo 屏幕适应
      windowDraw();
      calcRate();
      // getdom
    });

    onUpdated(() => {
      // getdom1()
    });

    onUnmounted(() => {
      unWindowDraw();
      clearInterval(timeInfo.setInterval);
    });

    // methods
    // todo 处理 loading 展示
    const cancelLoading = () => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    };

    // todo 处理时间监听
    const handleTime = () => {
      timeInfo.setInterval = setInterval(() => {
        const date = new Date();
        timeInfo.dateDay = formatTime(date, "HH: mm: ss");
        timeInfo.dateYear = formatTime(date, "yyyy-MM-dd");
        timeInfo.dateWeek = WEEK[date.getDay()];
      }, 1000);
    };

    // return
    return {
      loading,
      timeInfo,
      appRef,
      title,
      subtitle,
      moduleInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/jvm.scss";
</style>
