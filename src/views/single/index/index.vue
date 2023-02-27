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
          <div class="left-box">
            <div class="overall">
              <dv-border-box-12>
                <overall></overall>
              </dv-border-box-12>
            </div>
            <div class="icon">
              <dv-border-box-12>
                <icons></icons>
              </dv-border-box-12>
            </div>
            <div class="detail">
              <dv-border-box-12>
                <detailed></detailed>
              </dv-border-box-12>
            </div>
          </div>

          <div class="center-box">
            <!-- <div class="button">
              <dv-border-box-12>
                <buttons></buttons>
              </dv-border-box-12>
            </div> -->

            <div class="assess">
              <dv-border-box-12>
                <assess></assess>
              </dv-border-box-12>
            </div>

            <div class="inner">
              <div class="test">
                <dv-border-box-12>
                  <test></test>
                </dv-border-box-12>
              </div>
              <div class="error">
                <dv-border-box-12>
                  <error></error>
                </dv-border-box-12>
              </div>
            </div>

            <div class="history">
              <dv-border-box-12>
                <history></history>
              </dv-border-box-12>
            </div>
          </div>

          <div class="right-box">
            <div class="recom">
              <dv-border-box-12>
                <recom></recom>
              </dv-border-box-12>
            </div>

            <div class="option">
              <dv-border-box-12>
                <optionhh></optionhh>
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

//import buttons from "../center/button/index.vue";
import assess from "../center/assess/index.vue";
import error from "../center/error/index.vue";
import test from "../center/test/index.vue";
import history from "../center/history/index.vue";

import overall from "../left/overall/index.vue";
import icons from "../left/icon/index.vue";
import detailed from "../left/detail/index.vue";

import recom from "../right/recom/index.vue";
import optionhh from "../right/option/index.vue";

import * as echarts from "echarts";
export default defineComponent({
  components: {
    //buttons,
    assess,
    error,
    test,
    history,

    icons,
    overall,
    detailed,

    recom,
    optionhh,
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
@import "@/assets/scss/single.scss";
</style>
