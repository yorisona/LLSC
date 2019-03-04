<template>
    <div class="app-newlist">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/Newsinfo?nid='+item.id">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url" @click="jumpinfo" :data-lid="item.lid">
                        <div class="mui-media-body">
                            {{item.title}}
                            <p class='mui-ellipsis'><span>{{item.ctime | datetimeFilter}}</span><span>{{item.point}}</span> </p>
                        </div>
                </router-link>    
            </li>
        </ul>
        <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            pno:1,
            pageSize:7
        }
    },
    methods:{
        jumpinfo(e){
            var pid=e.target.dataset.lid
            this.$route.push("/Goodinfo?pid="+pid)
        },
        getnewlist(){
            var url="http://127.0.0.1:3000/newslist"
            this.axios.get(url).then(result=>{
                //console.log(result)
                this.list=result.data.data
            })
        },
        // 加载下一页
        getMore(){
            // 1:修改当前的页码
            this.pno++
            //2：发送请求get
            var url="http://127.0.0.1:3000"
            url+="/newslist?pno="+this.pno
            url+="&pageSize="+this.pageSize
            //3：获取数据,发送请求
            this.axios.get(url).then(result=>{
                //this.list=result.data.data
                //拼接两个数组
                var rows=this.list.concat(result.data.data)
                this.list=rows

            })
        }
    },
    created(){
        console.log(this.$route.query.nid)
        this.getnewlist()
    }
}
</script>
<style>
    .app-newlist li .mui-ellipsis{
        display:flex;
        font-size:12px;
        color:#226aff;
        justify-content:space-between;
    }
</style>