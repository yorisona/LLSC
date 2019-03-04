<template>
    <div>
        
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{}
    },
    created(){
        var url="http://127.0.0.1:3000/logout"
        this.axios.get(url).then(res=>{
            Toast("已退出")
        })
    }
}
</script>