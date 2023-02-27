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

        <div class="body-box">
          <!-- b.监测指标 -->
          <dv-border-box-12>
            <div class="b-box">
              <div class="b-cpu">
                <cpu></cpu>
              </div>
              <div class="b-memory">
                <mem></mem>
              </div>
              <div class="b-disk">
                <disk></disk>
              </div>
              <div class="b-jvm">
                <jvm></jvm>
              </div>
            </div>
          </dv-border-box-12>

          <!-- c.指标对比/a.服务器概览 -->

          <div class="ac-box">
            <dv-border-box-12>
              <div class="c-box">
                <compare></compare>
              </div>
            </dv-border-box-12>
            <dv-border-box-12>
              <div class="a-box"></div>
            </dv-border-box-12>
          </div>

          <!-- d.服务器位置/e.监测历史 -->

          <div class="de-box">
            <div class="d-box">
              <dv-border-box-12> </dv-border-box-12>
            </div>
            <div class="e-box">
              <dv-border-box-12>
                <list></list>
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
import cpu from "../b-cpu/index.vue";
import disk from "../b-disk/index.vue";
import mem from "../b-memory/index.vue";
import jvm from "../b-jvm/index.vue";
import compare from "../c-compare/index.vue";
import list from "../e-list/index.vue"

import * as echarts from "echarts";
export default defineComponent({
  components: {
    cpu,
    disk,
    mem,
    jvm,
    compare,
    list
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
@import "@/assets/scss/monitor2.scss";
</style>
