<template>
	<div class="news">
		<ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
	</div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
	name: 'Member',
	data () {
		return {
			newsList: []
		}
    },
    created() {
		this.getNewsList()
	},
    methods: {
        getNewsList() {
            this.$http.get("api/getnewslist").then(result => {
				if(result.body.status === 0) {
					this.newsList = result.body.message;
				} else {
					Toast('获取列表数据失败！')
				}
			})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mui-table-view-cell {
    padding: 15px;
}
.mui-media-body {
    h4 {
        margin: 0 0 8px 0;
        white-space: normal;
        font-weight: 500;
        line-height: 22px;
        font-size: 16px;
    }
    .mui-ellipsis {
        color: #008ef1;
        display: flex;
        justify-content: space-between;
    }
}
.mui-table-view .mui-media-object {
    max-width: 100px;
    height: 70px
}
.mui-table-view:after {
    height: 0
}
</style>
