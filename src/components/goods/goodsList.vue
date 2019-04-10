<template>
	<div class="goods-list">
		<!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
			<img :src="item.img_url" :alt="item.title">
			<h3 class="title">{{item.title}}</h3>
			<div class="info">
				<div class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</div>
				<div class="sale">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</div>
			</div>
		</router-link> -->
		<!-- 编程式导航  使用js跳转 -->
		<div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
			<img :src="item.img_url" :alt="item.title">
			<h3 class="title">{{item.title}}</h3>
			<div class="info">
				<div class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</div>
				<div class="sale">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
	data () {
		return {
			goodsList: [],
			pageIndex: 1,
		}
	},
	created() {
		this.getGoodsList()
 	},	
 	methods: {
		getGoodsList() {
			this.$http.get('api/getgoods?pageindex=' + this.pageIndex).then(result => {
				if(result.body.status === 0) {
					if (result.body.message && result.body.message.length > 0) {
						this.goodsList = this.goodsList.concat(result.body.message);
					} else {
						Toast('没有更多数据了！')
					}
				} else {
					Toast('获取商品数据失败！')
				}
            })
		},
		getMore() {
			this.pageIndex++;
			this.getGoodsList();
		},
		goDetail(id) {
			// this.$router.push('/home/goodsinfo/'+id)
			// this.$router.push({path: '/home/goodsinfo/'+id})
			this.$router.push({name: 'GoodsInfo', params:{id: id}})
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.goods-list {
	padding: 20px 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods-item {
		width: 49%;
		border: 1px solid #ddd;
		box-shadow: 0 0 8px #ddd;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 293px;
		img {
			width: 100%
		}
		.title {
			padding: 0 5px;
			font-size: 18px;
			word-break: break-all;
			line-height: 21px;
		}
		.info {
			background-color: #eee;
			color: #969696;
			font-size: 14px;
			padding: 8px 5px;
			.price {
				.now {
					font-size: 18px;
					color: #e4393c;
				}
				.old {
					text-decoration: line-through;
				}
			}
			.sale {
				display: flex;
				justify-content: space-between;
				margin-top: 4px;
			}
		}
	}
}
</style>
