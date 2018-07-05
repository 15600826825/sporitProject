<template>
    <div class="shopping-car">
         <p class="car" ref="car"> 购物车 </p>
        <dl>
            <dt>
                <img src="" alt="">
            </dt>
            <dd class="product-list-info">
                <p class="name">课程名字</p>
                <p class="text">合作方</p>
                <p class="text">课程简介</p> 
            </dd>
            <dd class="product-list-buy"> 
                <p class="learn">365个人学过</p>
                <mu-button color="primary">立即查看</mu-button>
                <mu-button @click="increase($event)">加入购物车</mu-button>
                <div id="points">
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>  
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>  
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>  
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>  
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>  
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>  
                    <div class="pointOuter pointPre">
                        <div class="point-inner"></div>
                    </div>
                </div>   
            </dd>
        </dl>
        
    </div>
</template>

<script src="./home.js"></script>

<style lang="scss" scoped>
@import "./home.scss";
</style>