<template>
  <div class="app-cart">
    <div class="mui-card">
				<div class="mui-card-header">
           <h3>购物车列表</h3>
           <h4>
           <!--allcb 全选状态true选中false清空-->
           全选 <input type="checkbox" @click="selectAll" :checked="allcb"/>
           </h4>
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">

			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,i) in list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" />
						<div class="mui-media-body">
							<p class='mui-ellipsis'>
                <!-- 购物车中商品项目 home/ShopCart.vue start-->
                <input type="checkbox" :checked="item.cb" :data-i="i" @click="modifyItem"/>
							  {{item.lname}}
                {{item.price}}
                <!--delItem处理删除商品函数-->
                <!--data-id 当前购物车id-->
                <!--data-idx 当前商品下标list-->
                <button @click="delItem" :data-id="item.id" :data-idx="i">删除</button> 
                <!-- 购物车中商品项目 end-->   
              </p>
						</div>
					</a>
				</li>
        </ul> 
					</div>
				</div>
				<div class="mui-card-footer">
          <button @click="removeItem">删除选中商品</button>
          小计:￥3.00
        </div>
			</div>
  </div>
</template>
<script>
  //ShopCart.vue 当组件创建成功发送 ajax请求
  //获取购物车列表
  import {Toast} from "mint-ui";
  export default {
    data(){
      return {
        list:[],
        cb:false,
        allcb:false //保存全选复选框状态
      }
    },
    methods:{ 
      delItem(e){
        //e事件对象 e.target 触发事件对象button
        //target.dataset 自定义属性集合 
        //1:获取当前购物车id
        var id =  e.target.dataset.id;
        var idx = e.target.dataset.idx; //下标
        //2:发送ajax请求
        var url = "http://127.0.0.1:3000/";
        url+="delCartItem?id="+id;
        this.axios.get(url).then(result=>{
            if(result.data.code == 1){
              //3:获取返回结果判断是否删除成功
              Toast("删除成功");
              //4:删除list对应购物车商品对象
              //将数组中对应下标商品删除
              //splice(数组下标,个数); 10:35
              this.list.splice(idx,1);
            }
        })
      },    
      loadMore(){
        //1:创建变量保存url
        var url = "http://127.0.0.1:3000/";
        url+="cartlist?uid=1";
        //2:发送ajax请求
        this.axios.get(url).then(result=>{
          //1:判断如果没有登录显示出错消息
          console.log(this)
          if(result.data.code== -1){
            Toast("请登录")
            return
          }

          //1:2 没有与 vue data双向绑定 
          //1:接收服务器程序返回数据  19
          var rows = result.data.data;
          //修改全局购物车数量
          this.$store.commit("updateCount",rows.length)
          //2:为每一个商品对象添加属性cb 选中状态
          for(var item of rows){
             item.cb = false;
          }
          //3:将最终数组赋值 list 列表    
          this.list = rows;  
        });
      },
      selectAll(e){//全选按钮点击事件
        //1:获取当前全选复选框状态
        var cb = e.target.checked;
        //2:修改全选状态
        this.allcb = cb;
        //2:依据全选状态修改数组中cb值
        for(var item of this.list){
          item.cb = cb;
        }
      },
      modifyItem(e){
        //修改
        //1:获取当前元素下标[其中一种方式]
        var idx = e.target.dataset.i;
        //2:将下标对象数组中元素cb修改当前复选状态
        var checked = e.target.checked;
        //3:将数组中对应cb状态修改
        this.list[idx].cb = checked;
        //4:统计购物车中商品选中数量 == list.length
        //5:将全选状态修改为true否则为 false
        var count = 0;
        for(var item of this.list){
              if(item.cb){
                count++;
              }
        }
        if(count==this.list.length){
           this.allcb = true;
        }else{
           this.allcb = false;
        }
      },
      removeItem(){
        //0:创建空字符串，为了后续接拼字符串
        var html = "";
        //1:遍历数组中元素
        for(var item of this.list){
         //2:判断cb==true
         if(item.cb){
          //3:保存id：拼字符串
          html+=item.id+",";
         }
        }
        //3.1:截取字符串  试一下  三 二 一
        html = html.substring(0,html.length-1);
        //4:发送ajax请求 删除多个商品
        var url = "http://127.0.0.1:3000/";
        url+="removeMItem?ids="+html;
        this.axios.get(url).then(result=>{
            if(result.data.code == 1){
              Toast("删除成功");
              this.loadMore();
            } 
        });
      }
    },
    created() {
      this.loadMore();
    },
  }
</script>
<style>
</style>