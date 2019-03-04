<template>
  <div class="app-login">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <div class="logo">
              <img src="../../img/琉璃社区.png" alt="">
            </div>
       <form>
         <input type="text" name="uname" v-model="uname" placeholder="请输入用户名"/>
          <input type="password" name="upwd" v-model="upwd" placeholder="请输入密码"/>
         <input id="deng" type="button" value="登录" @click="butLogin" />
       </form>			
					</div>
				</div>
			</div>
  </div>
</template>
<script>
  //单独引入 Toast
  import {Toast} from "mint-ui"
  export default {
    data(){
      return {uname:"",upwd:""}
    },
    methods:{
      butLogin(){
        //console.log(123);
        //0:为button按钮绑定点击事件
        //1:获取用户输入用户名和密码
        var u = this.uname;
        var p = this.upwd;
        //console.log(u+"-"+p);
        //2:验证不能为空
        var reg = /^[a-z0-9]{3,12}$/i;
        if(!reg.test(u)){
           Toast("用户名格式不正确，请检查");
           return;
        }
        //3:发送ajax请求
        var url = "http://127.0.0.1:3000/";
        url+="login?uname="+u+"&upwd="+p;
        this.axios.get(url).then(result=>{
          if(result.data.code==1){
            this.$router.push("/Myhome")
          }else{
            Toast("用户名或密码有误");
          }
        })
        //4:失败 显示提示框
        //5:成功 跳转home
      }
    }
  }
</script>
<style>
.logo{
  text-align: center;
}
.logo>img{
    width: 6rem;
    height: 1.84rem;
    margin: 0 auto;
    margin-top: 3.72rem;
    margin-bottom: 2rem;
}
input{
  font-size: 13px !important;
}
#deng{
    width: 100%;
    height: 2.2rem;
    text-align: center;
    line-height: 1.2rem;
    background-color: #46a1fa;
    background-image: linear-gradient(90deg,#46a1fa,#067df8);
    border-radius: .18rem;
    font-size: .45rem;
    color: #fff;
    margin-top: .75rem;
    border: none;
}
</style>