<template>
  <div class="icons">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <div class="title">
            <span class="fs-xl text mx-2 mt-1">资源概览</span>
          </div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500"
        rel="stylesheet"
      />
      <div class="sub-body">
        <div class="card">
          <div class="card-avatar">
            <img
              class="img1"
              src="../../../../assets/scss/img/data.jpg"
              alt="Your Image"
              width="300"
              height="300"
            />
          </div>
          <div class="card-details">
            <div class="name">2018年5月山东寿光10米洪水受淹耕地数据集</div>
            <div class="occupation">数字资产对象</div>

            <div class="card-about">
              <div class="item">
                <span class="value">数据</span>
                <span class="label">资源类型</span>
              </div>
              <div class="item">
                <span class="value">98.13% </span>
                <span class="label">综合得分</span>
              </div>
              <div class="item">
                <span class="value">2022/02/03</span>
                <span class="label">更新时间</span>
              </div>
            </div>
            <div class="skills">
              <span class="value">
                2018年5月山东寿光10米洪水受淹耕地数据是利用清华大学宫鹏团队研制的全球10m的高分辨率土地覆被/利用类型数据提取的耕地...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [];
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 450px;
.icons {
  //padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  position: relative;
  left: 10px;
  border-radius: 5px;

  .title {
    z-index: 99;
  }

  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: bisque;
    font-size: 20px;
  }
  

  .sub-body {
    height: 100vh;
    margin: 0;
    // place-items: center;
    padding: 1rem;

    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .card {
    width: calc(var(--card-size) * 1.586);
    height: 200px;

    border-radius: 0.75rem;
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);

    background: black;

    display: grid;
    grid-template-columns: 40% auto;

    position: relative;
    top: 20px;

    color: white;

    align-items: center;

    will-change: transform;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.05);
      // box-shadow: 0 32px 80px 14px rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(0, 0, 0, 0.3);
    }
  }

  .card-avatar {
    display: grid;
    place-items: center;
    width: 240px;
    height: 260px;
    position: relative;
    top: -10%;
    left: -15%;
    z-index: -1;

    .img1 {
      object-fit: fill;
      width: 80%;
      height: 100%;
      display: inline-block;
      border: none;
      border-radius: 10px;
    }
  }

  .card-details {
    padding: 1rem;
    object-fit: fill;
    width: 100%;
    height: 100%;

    position: relative;
    left:8%;
  }

  .name {
    font-size: 1.25rem;
  }

  .occupation {
    margin-top: 0.3rem;
    font-weight: 600;
    color: #2196f3;
  }

  .card-about {
    margin-top: 1rem;
    display: grid;
    grid-auto-flow: column;
  }

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;

    .value {
      font-size: 1rem;
    }

    .label {
      margin-top: 0.1rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: #2196f3;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    margin-top: 0.1rem;

    .label {
      font-size: 1rem;
      font-weight: 800;
      color: #2196f3;
    }

    .value {
      margin-top: 0.15rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
  }
}
</style>
