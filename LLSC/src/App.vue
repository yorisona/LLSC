<template>
 <div class="app-container">
    <!--  src/App.vue -->   
    <!-- 1:添加公共组件 Home.vue/Header-->
    <mt-header fixed title="琉璃商城">
    
    </mt-header>
    <!-- 2:占位符用来显示其它的组 55-->
    <router-view></router-view>
    <!-- 3:添加公共组件 Home.vue/tabbar-->
<nav class="mui-bar mui-bar-tab">
<a class="mui-tab-item mui-active" href="#tabbar">
<span class="mui-icon mui-icon-home"></span>
<router-link to="/Home">
<span class="mui-tab-label">首页</span>
</router-link>
</a>
<a class="mui-tab-item" href="#tabbar-with-chat">
<span class="mui-icon mui-icon-starhalf">
</span>
<span class="mui-tab-label">会员</span>
</a>
<a class="mui-tab-item" href="#tabbar-with-contact">
<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
<span class="mui-badge">{{$store.getters.optCartCount}}</span>
</span>
<router-link to="/ShopCart">
<span class="mui-tab-label">购物车</span>
</router-link>
</a>
<a class="mui-tab-item" href="#tabbar-with-map">
<span class="mui-icon mui-icon-person"></span>
<router-link to="/Login">
<span class="mui-tab-label">我的</span>
</router-link>
</a>
</nav>
 </div>
</template>
<style>
body{
   background:#fff !important;
}

.app-container{
   padding-top:40px;
   padding-bottom:50px;
   overflow-x:hidden;
}

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
