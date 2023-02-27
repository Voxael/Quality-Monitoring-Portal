<template>
  <div class="icons">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <div class="title">
            <span class="fs-xl text mx-2 mt-1">服务器概览</span>
          </div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500"
        rel="stylesheet"
      />
      <div class="sub-body">
        <div class="card">
          <div class="baidumaps" id="allmap">
            <!-- <img
              class="img1"
              src="../../../../assets/scss/img/map_case.png"
              alt="Your Image"
              width="300"
              height="250"
            /> -->
          </div>
          <div class="card-details">
            <div class="name">China GEOSS port 8056</div>
            <div class="occupation">服务器</div>

            <div class="card-about">
              <div class="item">
                <span class="value">FTP</span>
                <span class="label">服务器类型</span>
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
            <div class="occupation">最近一次检测数据</div>

            <div class="skills">
              <span class="value"> CPU占用:65.13% </span>
              <span class="value"> 内存占用:79.46% </span>
              <span class="value"> 硬盘占用:50.79% </span>
              <span class="value"> 虚拟机占用:80.79% </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
	data() {
		return {
			position_NKYYGS: {
				Name: '武汉大学(信息学部)',
				address: '湖北省武汉市洪山区珞喻路129号',
				phoneNumber: '(027)68779405',
				bdLNG: 114.365818,
				bdLAT: 30.534872,
			}
		};
	},
	mounted() {
		this.baiduMap();
	},
	methods: {
		baiduMap() {
			var map = new BMap.Map('allmap'); // 创建地图实例
			
			//map.addControl(new BMap.NavigationControl());
			// map.addControl(new BMap.ScaleControl());
			// map.addControl(new BMap.OverviewMapControl());
			// map.addControl(new BMap.MapTypeControl());
			// map.setMapStyle({ style: 'midnight' }) //地图风格
 
			map.clearOverlays();
			//将数据遍历
			//自定义信息窗口内容
			var sContent =
				'<div style="width:200px;"><p style="font-size:5px;font-weight:bold;margin-top: 5px;color:#D07852">' +
				this.position_NKYYGS.Name +
				'</p><p style="font-size:5px;margin: 0px 0;">地址：' +
				this.position_NKYYGS.address +
				'</p><p style="font-size:5px;margin: 0px 0;">电话：' +
				this.position_NKYYGS.phoneNumber +
				'</p><p style="font-size:5px;margin: 0px 0;">坐标：' +
				this.position_NKYYGS.bdLNG +
				',' +
				this.position_NKYYGS.bdLAT;
			('</div>');
			var point = new BMap.Point(this.position_NKYYGS.bdLNG, this.position_NKYYGS.bdLAT); // 创建点坐标
			

      // var icon =new Bmap.Icon("../../../../assets/scss/img/server.png",new BMap.Size(25,25));
       var marker = new BMap.Marker(point);
      // var marker = new BMap.Marker(point,{icon:icon});
      // // marker.setIcon(icon);
			map.addOverlay(marker);

			map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
			// //点击图标时候调用信息窗口
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

			var infoWindow = new BMap.InfoWindow(sContent);
			marker.addEventListener('click', function() {
				this.openInfoWindow(infoWindow);
			});
		}
	}
};
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
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
    display: grid;
    //place-items: center;
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
    color: white;

    align-items: center;

    will-change: transform;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 32px 80px 14px rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(0, 0, 0, 0.3);
    }
  }

  .baidumaps {
    display: grid;
    place-items: left;
    width: 250px;
    height: 250px;
    position: relative;
    border-radius: 5%;
    top: -3%;
    left: 5%;
    z-index: -1;

    .anchorBL {
      display: none;
    }

    // .img1 {
    //   object-fit: fill;
    //   width: 110%;
    //   height: 75%;
    //   display: inline-block;
    //   border: none;
    //   border-radius: 10px;
    // }
  }

  .card-details {
    padding: 1rem;
    position: relative;
    left: 10%;
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
