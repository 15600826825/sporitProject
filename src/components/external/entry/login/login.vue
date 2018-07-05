<template>
<div class="container">
	<p>购物清单</p>
	<div id="app">
		<table class="table" >
				<tr>
					<td>
					<span v-if="isSelectAll==false"  @click="selectAll(),select=!select"></span>
					<span v-else  @click="selectNone(),select=!select"></span>
					</td>
					<td>商品</td>
					<td>数量</td>
					<td>单价(元)</td>
					<td>金额(元)</td>
					<td>操作</td>
				</tr>
				<tr v-for="(goods,index) in goodsList" :key="index">
					<td>
						<span v-if="goods.select==false"  @click="goods.select=!goods.select"></span>
						<span v-else  @click="goods.select=!goods.select"></span>
					</td>
					<td>
							<div class="left">
                                <h5>{{goods.name}}</h5>
                            </div>
					</td>
					<td>
						<a class="btn" @click="goods.num--">-</a>
						<input type="text" class="number" v-model="goods.num" style="text-align: center;"/>
						<a class="btn" @click="increase(goods, $event)">+</a>
					</td>
					<td>${{goods.price}}</td>
					<td>${{goods.num*goods.price}}</td>
					<td><a class="btn btn-danger" @click="deleteOne(index)">删除</a></td>
				</tr>
		</table>
        <!-- 小球运动 -->
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
		<p style="float: left;"><button class="btn" @click="deleteGoods()">删除选中商品</button></p>
		<p style="float: right;">您挑选了{{getTotal.totalNum}}商品，共计{{getTotal.totalPrice}}元</p>
    </div>
</div>
</template>

<script>
export default {
    
  data(){
      return {
        select:false,
        goodsList:[
        {
            name:'可乐',
            number:10,
            price:3,
            num:2,
        },
        {
            name:'雪碧',
            number:10,
            price:3,
            num:1,
        },
        {
            name:'芬达',
            number:20,
            price:4,
            num:4,
        },
        {
            name:'美年达',
            number:16,
            price:2,
            num:3,
        },
        ]
      }
  },
   methods:{
   	selectAll(){
   		for(var i=0;i<this.goodsList.length;i++){
   			this.goodsList[i].select=true;
   		}
   	},
   	selectNone(){
   		for(var i=0;i<this.goodsList.length;i++){
   			this.goodsList[i].select=false;
   		}
   	},
   	deleteOne(index){
   		//选中之后删除
   		//this.goodsList=this.goodsList.filter(function (item) {return !item.select});
   		//点击删除按钮后直接删除
   		this.goodsList.splice(index,1);
   	},
   	deleteGoods(){
   		this.goodsList=this.goodsList.filter(function (item) {return !item.select});
    },
    // 食品选购按钮
    increase(goods,event) { 
        goods.num++;
        console.log(goods);
        // 小球动画 
        var top = event.clientY, // 小球降落起点
            left = event.clientX,
            endTop = window.innerHeight - 30,  // 小球降落终点
            endLeft = 20; 

        // // 小球到达起点
        var outer = $('#points .pointPre').first().removeClass("pointPre").css({
            left: left + 'px',
            top: top + 'px'
        });
        var inner = outer.find(".point-inner"); 

        setTimeout(function() { 
            // 将jquery对象转换为DOM对象
            outer[0].style.webkitTransform = 'translate3d(0,' + (endTop - top) + 'px,0)';
            inner[0].style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)';
            
            // 小球运动完毕恢复到原点
            setTimeout(function() {
                outer.removeAttr("style").addClass("pointPre");
                inner.removeAttr("style");
            }, 1000);  //这里的延迟值和小球的运动时间相关
        }, 1);
     }
   },
   computed: {
    isSelectAll:function(){
        //如果每一条数据的select都为true，返回true，否则返回false;
        return this.goodsList.every(function (val) { return val.select});
    },
    getTotal:function(){
        //获取goodsList中select为true的数据。
        var _proList=this.goodsList.filter(function (val) { return val.select}),totalPrice=0;
        for(var i=0,len=_proList.length;i<len;i++){
            //总价累加
            totalPrice+=_proList[i].num*_proList[i].price;
        }
        //选择产品的件数就是_proList.length，总价就是totalPrice
        return {totalNum:_proList.length,totalPrice:totalPrice}
    },
  },
  mounted:function () {
        var _this=this;
        this.goodsList.map(function (goods) {
            _this.$set(goods, 'select', false);
        })
  }
}

</script>

<style scoped>
   .left{
		display: block;
		float: left;
		width: 80px;
        height: 100px;
        line-height: 104px;
	}
	.right{
		display: block;
		margin-left: 90px;
		height: 100px;
	}
	.number{
		width: 40px;
    }

    /* 运动小球 */
    .pointPre {  /* 动画的小球 */
        display: none;
    }
    .pointOuter {
        position: absolute;  
        z-index: 114;  
        /* 当小球抛出时遵循贝塞尔曲线过渡 */
        -webkit-transition: all 1s cubic-bezier(0.39,-0.4,0.83,0.23) 0s;
        transition: all 1s cubic-bezier(0.39,-0.4,0.83,0.23) 0s; 
    }

    .point-inner {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #00a0dc;
        /* 过渡属性名称 过渡时间 过渡曲线 延迟时间 */
        transition: all 1s ease 0s;
        -webkit-transition: all 1s ease 0s;     
    }
    

</style>
