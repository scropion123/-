<template>
	<div class="photoInfo">
		<h3>{{imgInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{imgInfo.add_time | dateFormat}}</span>
            <span>点击：{{imgInfo.click}}次</span>
        </p>
        <hr>
        <div class="thumImg">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>
        <div class="content" v-html="imgInfo.content"></div>
        <!-- 评论组件 -->
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
            imgInfo: {},
            list: [],
		}
    },
    created() {
        this.getImgInfo();
        this.getImgList();
    },
    methods: {
        getImgInfo() {
            this.$http.get('api/getimageInfo/' + this.id).then(result => {
				if(result.body.status === 0) {
					this.imgInfo = result.body.message[0];
				} else {
					Toast('获取图片详情数据失败！')
				}
            })
        },
        getImgList() {
            this.$http.get('api/getthumimages/' + this.id).then(result => {
				if(result.body.status === 0) {
                    for (let item of result.body.message) {
                        item.w = 400;
                        item.h = 400;
                        item.msrc = item.src;
                        item.title = item.src;
                        item.alt = item.src;
                    }
                    this.list = result.body.message;
				} else {
					Toast('获取图片详情数据失败！')
				}
            })
        },
        handleClose () {
            console.log('close event')
        }
    },
    components: {
        Comment,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.photoInfo {
    padding: 16px;
    h3 {
        color: #26a2ff;
        font-size: 18px;
        text-align: center;
        margin:15px 0;
        line-height: 22px;
    }
    .subtitle {
        display: flex;
        justify-content: space-between
    }
    .content {
        font-size: 14px;
        line-height: 20px;
    }
    img {
        width: 100px !important;
        height: 80px !important;
    }
}
.my-gallery {
    figure {
        margin: 0 !important;
    }
}
</style>
