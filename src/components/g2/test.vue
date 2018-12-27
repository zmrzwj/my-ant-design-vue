<template>
    <div style="position: relative;width: 100%;height: 100%;">
        <div id="c1" style="width: 100%;height: 100%;"></div>
    </div>
</template>

<script>
    import G2 from "g2"

    G2.track(false);

    export default {
        name: "g2",
        data(){
            return {
            }
        },
        mounted:function () {
            this.$nextTick(function(){  //页面加载完成后执行
                this.$nextTick(function () {
                    this.draw()
                })
            });

        },
        watch: {

        },
        methods:{
            getDocumentWidthHeight:function (id) {
                var dom = document.getElementById(id);
                var w = dom.clientWidth;
                var h = dom.clientHeight;

                var sw = dom.scrollWidth;

                console.log({
                    width:w,
                    height:h,
                    sw:sw
                });

                console.log(dom);

                return {
                    width:w,
                    height:h
                }
            },
            draw:function () {
                var _this = this;

                var data = [
                    {genre: 'Sports', sold: 275},
                    {genre: 'Strategy', sold: 115},
                    {genre: 'Action', sold: 120},
                    {genre: 'Shooter', sold: 350},
                    {genre: 'Other', sold: 150},
                ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
                // Step 1: 创建 Chart 对象
                var chart = new G2.Chart({
                    id: 'c1', // 指定图表容器 ID
                    //container: document.getElementById('c1'),
                    //forceFit: true,//自适应
                    forceFit: true,
                    height:_this.getDocumentWidthHeight('c1').height
                });
                chart.forceFit();
                //
                chart.axis('sold', {
                    line: {
                        lineWidth: 0, // 设置线的宽度
                        stroke: 'red', // 设置线的颜色
                        lineDash: [3, 3] // 设置虚线
                    },
                    tickLine: null
                });


                // Step 2: 载入数据源,定义列信息
                chart.source(data, {
                    genre: {
                        alias: '游戏种类' // 列定义，定义该属性显示的别名
                    },
                    sold: {
                        alias: '销售量'
                    }
                });
                chart.forceFit(); // 手动调用自适应函数
                // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
                chart.interval().position('genre*sold').color('genre').label('sold')
                // Step 4: 渲染图表
                chart.render();

            }
        }
    }


</script>

<style scoped>

</style>