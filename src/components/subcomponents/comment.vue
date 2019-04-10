<template>
	<div class="comment">
		<h3>发表评论</h3>
        <textarea name="" id="" cols="30" rows="5" placeholder="请输入内容（最多20字）" v-model="cmtValue"></textarea>
        <mt-button type="primary" size="large" @click="submitCmt">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commentData" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp; &nbsp;用户:{{item.user_name}}&nbsp; &nbsp;发表时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMoreCmt" plain>加载更多</mt-button>
	</div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
	data () {
		return {
            commentData: [],
            pageindex: 1,
            cmtValue: '',
		}
    },
    props: ["id"],
    created() {
        this.getComments()
    },
    methods: {
        getComments() {
            this.$http.get('api/getcomments/'+ this.id +'?pageindex=' + this.pageindex).then(result => {
				if(result.body.status === 0) {
                    if (result.body.message.length > 0) {
                        this.commentData = this.commentData.concat(result.body.message);
                    } else {
                        Toast('没有更多数据啦！')
                    }
				} else {
					Toast('获取评论数据失败！')
				}
            })
        },
        getMoreCmt() {
            this.pageindex++;
            this.getComments()
        },
        submitCmt() {
            if (this.cmtValue.trim().length === 0) {
                return Toast('评论内容不能为空')
            }
            this.$http.post('api/postcomment/'+ this.$route.params.id,{content: this.cmtValue}).then(result => {
                if(result.body.status === 0) {
                   let cmt = {
                       user_name: '匿名用户',
                       add_time: Date.now(),
                       content: this.cmtValue.trim()
                   };
                   this.commentData.unshift(cmt);//将新提交的评论内容加入评论数据第一条，不刷新评论列表
                   this.cmtValue = '';
				} else {
					Toast('提交评论失败！')
				}
            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.comment {
    margin-top: 20px;
    h3 {
        font-size: 20px
    }
    .cmt-item {
        font-size: 14px;
        margin: 8px 0;
        .cmt-title {
            background-color: #ccc;
            padding: 3px 5px;
        }
        .cmt-body {
            padding:5px 10px;
        }
    };
}
</style>
