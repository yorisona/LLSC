<template>
    <div>
        <div class="container">
            <div class="bj">
                <img data-v-5481b2f8="" src="../../img/tou.jpg">
                <span data-v-5481b2f8="">折纸</span>
                <p data-v-5481b2f8="">不要被人言左右，要相信自己的判断</p>
            </div>
            <div class="container-integral">
                <p data-v-5481b2f8="">
                    <span data-v-5481b2f8="">0</span> 
                    <span data-v-5481b2f8="">优惠券</span>
                </p>
                <p data-v-5481b2f8="">
                    <span data-v-5481b2f8="">0</span> 
                    <span data-v-5481b2f8="">优惠券</span>
                </p>
                <p data-v-5481b2f8="">
                    <span data-v-5481b2f8="">0</span> 
                    <span data-v-5481b2f8="">优惠券</span>
                </p>
            </div>
            <div class="container-order">
                <div data-v-5481b2f8="" class="container-order-1">
                    <p data-v-5481b2f8="" class="left">我的订单</p> 
                    <p data-v-5481b2f8="" class="right">全部订单 &gt;</p>
                </div>
                <div class="container-order-2">
                    <p data-v-5481b2f8=""><img data-v-5481b2f8="" src="../../img/111.png"> <span data-v-5481b2f8="">待付款</span></p>
                    <p data-v-5481b2f8=""><img data-v-5481b2f8="" src="../../img/222.png"> <span data-v-5481b2f8="">待付款</span></p>
                    <p data-v-5481b2f8=""><img data-v-5481b2f8="" src="../../img/333.png"> <span data-v-5481b2f8="">待付款</span></p>
                    <p data-v-5481b2f8=""><img data-v-5481b2f8="" src="../../img/444.png"> <span data-v-5481b2f8="">待付款</span></p>
                </div>
            </div>
            <div class="container-con">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>

.container{
    width: 100%;
    height: 10rem;
    position: absolute;
    top: 2.5rem;
} 
.container .bj{
    width: 100%;
    height: 100%;
    background: url(../../img/bj.png) no-repeat;
    background-size: 100% 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.container .bj img{
    width: 5.3rem;
    height: 5.3rem;
    border-radius: 50%;
}
.container .bj span[data-v-5481b2f8] {
    color: #fff;
    font-size: 1rem;
}
.container .bj p[data-v-5481b2f8] {
    font-size: 0.5rem;
    color: #fff;
}
.container .container-integral{
    width: 100%;
    height: 3rem;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.container .container-integral p[data-v-5481b2f8] {
    width: 33%;
    height: 100%;
    font-size: 0.8rem;
    line-height: 1.4rem;
    font-weight: 500;
    color:#333;
    float: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.container-order{
    width: 100%;
    height: 3.5rem;
    background: #fff;
    display: block;
    margin-bottom: 0.15rem;
    margin-top: 0.15rem;
    font-size: 0.35rem;
}
.container-order .container-order-1[data-v-5481b2f8] {
    width: 100%;
    height: 2.5rem;
    padding-top: 10px;
    border-top:5px solid #efeff4;
}
.container-order .container-order-1 .left[data-v-5481b2f8] {
    float: left;
    display: block;
    line-height: 1.5rem;
    margin-left: 0.5rem;
    font-size: 15px;
}
.container-order .container-order-1 .right[data-v-5481b2f8] {
    float: right;
    line-height: 1.5rem;
    margin-right: 0.6rem;
    font-size: 15px;
}
.container-order-2{
    width: 100%;
    height: 4.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.container-order-2 p{
    width: 25%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 0.3rem;
}
.container-order-2 p img{
    width: 1.8rem;
    height: 1.8rem;
    margin: auto;
    border: 0;
    vertical-align: middle;
}
.container-order-2 p span{
    text-align: center;
    padding-top: 0.3rem;
}
</style>