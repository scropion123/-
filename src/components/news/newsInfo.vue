<template>
	<div class="news-info">
		<h3>{{newsInfo.title}}</h3>
        <div>发表时间：{{newsInfo.add_time | dateFormat}}</div>
        <div>点击：{{newsInfo.click}}</div>
        <div v-html="newsInfo.content"></div>
        <Comment :id="this.id"></Comment>
	</div>
</template>

<script>
import Comment from '../subcomponents/comment.vue';
import {Toast} from "mint-ui";
export default {
	data () {
		return {
            id: this.$route.params.id,
			newsInfo: {}
		}
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id).then(result => {
				if(result.body.status === 0) {
					this.newsInfo = result.body.message[0];
				} else {
					Toast('获取新闻数据失败！')
				}
            })
        }
    },
    components: {
        Comment,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.news-info {
    padding: 16px;
}
</style>
