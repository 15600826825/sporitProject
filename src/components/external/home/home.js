
export default {
    data () {
        return {
            total: 0,
            getDataUrl: this.envPath + '../../../../static/ajax/data.json'
        }
    },
    methods: {
        init(){
            this.addPostData(); 
        },
        
        // 食品选购按钮
        increase:function(event) { 
            this.total++;

            // 小球动画 
            var top = event.clientY, // 小球降落起点
                left = event.clientX,
                endTop = 0,  // 小球降落终点
                endLeft = window.innerWidth; 

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
        },

        addPostData(){
            let self = this;
            this.$ajax.get(this.getDataUrl)
                .then(function (res) {
                    console.log(res)
                });
        }
    },
    mounted() {
        this.init();
    },
}
