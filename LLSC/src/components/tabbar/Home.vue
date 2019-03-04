<template>
  <div class="app-home">
   <!--顶部导航条 -->
   <div class="official">
      <img src="../../img/official.png" alt="图片" style="width: 100%; height: 100%;">
   </div>
   <!--轮播图-->
   <mt-swipe>
     <mt-swipe-item v-for="item in list" :key="item.id">
         <img :src="item.img_url" />
     </mt-swipe-item>
   </mt-swipe>
   <!--九宫格 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
  <router-link to="/NewsList"> 
   <img src="../../img/menu1.png" />
   <div class="mui-media-body">新闻咨讯</div>
  </router-link>
</li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
<router-link to="/GoodsList">
<img src="../../img/menu2.png" />
<div class="mui-media-body">商品</div>
</router-link>
</li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
<router-link to="/ShopCart">
<img src="../../img/menu3.png" />
<div class="mui-media-body">购物车</div>
</router-link>
</li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<img src="../../img/menu4.png" />
<div class="mui-media-body">支付</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
<a href="#">
<img src="../../img/menu5.png" />
<div class="mui-media-body">搜索</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<img src="../../img/menu6.png" />
<div class="mui-media-body">更多</div></a></li>
</ul>    
<!--tabbar -->
<div class="shouji">
  <ul class="shouji-ul">
    <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg" alt="">
    <li>
      <div class="list">
        <div data-v-0da06e04="" class="image">
          <img data-v-0da06e04="" alt="图片" data-src="https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1496689409434hd_530x530.png" src="https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1496689409434hd_530x530.png" lazy="loaded">
        </div>
        <p data-v-0da06e04="" class="name">X9Plus 全网通</p>
        <p data-v-0da06e04="" class="nametwo">优惠200元|限量促销</p>
        <p data-v-0da06e04="" class="Price">￥2798</p>
      </div>
    </li>
    <li>
      <div class="list">
        <div data-v-0da06e04="" class="image">
          <img data-v-0da06e04="" alt="图片" data-src="https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723830538hd_530x530.png" src="https://shopstatic.vivo.com.cn/vivoshop/commodity/40/4440_1508723830538hd_530x530.png" lazy="loaded">
        </div>
        <p data-v-0da06e04="" class="name">X20Plus 全面屏</p>
        <p data-v-0da06e04="" class="nametwo">6.43英寸大屏|0.1s快速解锁</p>
        <p data-v-0da06e04="" class="Price">￥3498</p>
      </div>
    </li>
      <li>
      <div class="list">
        <div data-v-0da06e04="" class="image">
          <img data-v-0da06e04="" alt="图片" data-src="https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454710945hd_530x530.png" src="https://shopstatic.vivo.com.cn/vivoshop/commodity/95/4495_1509454710945hd_530x530.png" lazy="loaded">
        </div>
        <p data-v-0da06e04="" class="name">Y69 全面屏手机</p>
        <p data-v-0da06e04="" class="nametwo">前置2400万像素</p>
        <p data-v-0da06e04="" class="Price">￥2798</p>
      </div>
    </li>
      <li>
      <div class="list">
        <div data-v-0da06e04="" class="image">
          <img data-v-0da06e04="" alt="图片" data-src="https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_530x530.png" src="https://shopstatic.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_530x530.png" lazy="loaded">
        </div>
        <p data-v-0da06e04="" class="name">Xplay6 128G版</p>
        <p data-v-0da06e04="" class="nametwo">后置双摄|免费镭射镌刻</p>
        <p data-v-0da06e04="" class="Price">￥3998</p>
      </div>
    </li>
     <li>
      <div class="list">
        <div data-v-0da06e04="" class="image">
          <img data-v-0da06e04="" alt="图片" data-src="https://shopstatic.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_530x530.png" src="https://shopstatic.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_530x530.png" lazy="loaded">
        </div>
        <p data-v-0da06e04="" class="name">Y55 全网通</p>
        <p data-v-0da06e04="" class="nametwo">大屏美颜自拍</p>
        <p data-v-0da06e04="" class="Price">￥1098</p>
      </div>
    </li>
     <li>
      <div class="list">
        <div data-v-0da06e04="" class="image">
          <img data-v-0da06e04="" alt="图片" data-src="https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1496689544465hd_530x530.png" src="https://shopstatic.vivo.com.cn/vivoshop/commodity/80/4180_1496689544465hd_530x530.png" lazy="loaded">
        </div>
        <p data-v-0da06e04="" class="name">Y66 全网通</p>
        <p data-v-0da06e04="" class="nametwo">5.5英寸大屏|支持花呗分期</p>
        <p data-v-0da06e04="" class="Price">￥1998</p>
      </div>
    </li>
  </ul>
</div>
  </div>
</template>
<script>
  export default {
     data(){
       return {
         list:[]
       }
     },
     methods:{
     handleImage(){
var url = "http://127.0.0.1:3000/imageList";
           this.axios.get(url).then(result=>{
               this.list = result.data;
           });
         }
     },
     created() {
        this.handleImage(); 
     },
  }
</script>
<style>
body, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, html, input, li, ol, p, select, td, textarea, th, ul {
    margin: 0;
    padding: 0;
}
li{
  list-style:none;
}
  /*轮播图*/
 .app-home .mint-swipe{
   height:200px;
 }
 .app-home .mint-swipe img{
   width:100%;
   height:200px;
 }
 /*九宫格  图片宽度*/
 .app-home .mui-grid-9 img{
    width:60px;
    height:60px;	 
 }
  /*九宫格  背景修改为白色*/
 .app-home .mui-grid-view.mui-grid-9{
    background-color:#fff; 
 }

/*手机*/
.shouji{
  margin-bottom:60px;
}
.shouji-ul{
    overflow: hidden;
    margin-bottom: 1.5rem;
}
.shouji-ul>img{
    border: 0;
    height:152px;
    width:100%;
    vertical-align: middle;
}
.list{
    height: 9.7rem;
    background: #fff;
    float: left;
    width: 50%;
    border-right: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
}
.list .image{
  width: 100%;
    background: #fff;
}
.image img[data-v-0da06e04] {
    width: 5.5rem;
    height: 5.3rem;
    display: block;
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
}
.name[data-v-0da06e04] {
    width: 80%;
    height: 1rem;
    line-height: 0.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.7rem;
    font-weight: 800;
    text-align: center;
}
.nametwo[data-v-0da06e04] {
    height: 0.48rem;
    font-size: 0.1rem;
    text-align: center;
}
.Price[data-v-0da06e04] {
    font-size: 0.33rem;
    color: #f00;
    margin: auto;
    text-align: center;
    font-size: 0.3rem;
}
</style>