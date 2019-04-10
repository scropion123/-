<template>
	<div class="home">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in bannerList" :key="item.img">
				<img :src="item.img" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/newslist">
					<img src="../images/menu1.png" alt="">
					<div class="mui-media-body">新闻资讯</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/photolist">
					<img src="../images/menu2.png" alt="">
					<div class="mui-media-body">图片分享</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/goodsList">
					<img src="../images/menu3.png" alt="">
					<div class="mui-media-body">商品购买</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="#">
					<img src="../images/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="#">
					<img src="../images/menu5.png" alt="">
					<div class="mui-media-body">视频专区</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="#">
					<img src="../images/menu6.png" alt="">
					<div class="mui-media-body">联系我们</div></router-link></li>
		</ul>
	</div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
	name: 'Home',
	data () {
		return {
			bannerList: []
		}
	},
	created() {
		this.getBanner()
	},
	methods: {
		getBanner() {
			this.$http.get("api/getlunbo").then(result => {
				if(result.body.status === 0) {
					this.bannerList = result.body.message;
				} else {
					Toast('加载轮播图失败！')
				}
			})
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.mint-swipe {
		height: 200px;
		.mint-swipe-item {
			img {
				width: 100%;
				height: 100%;
			}
		};
	}
	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border: none
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border:none;
		.mui-media-body {
			font-size: 14px;
		}
		img {
			width: 60px;
			height: 60px;
		}
	}
</style>
