$(function () {
    $("span.menu").click(function(){
        $(".top-nav ul").slideToggle("slow" , function(){
        });
    });
    //ps作品轮播
    $(document).ready(function() {
        $("#owl-demo1").owlCarousel({
            items : 3,
            lazyLoad : true,
            autoPlay : true,
            navigation : true,
            navigationText :  true,
            pagination : false,
        });
    });

    $(document).ready(function() {
        $("#owl-demo").owlCarousel({
            items : 1,
            lazyLoad : true,
            autoPlay : true,
            navigation : false,
            navigationText :  false,
            pagination : true,
        });
    });

    //web点击作品分类转换
    var filterList = {
        init: function () {

            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function () {
            $('#portfoliolist .portfolio').hover(
                function () {
                    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                },
                function () {
                    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                }
            );
        }
    };

    filterList.init();
    $(document).ready(function() {
        $().UItoTop({ easingType: 'easeOutQuart' });

    });
// 导航固定
    var navoffeset=$("nav").offset().top;
    $(window).scroll(function(){
        var scrollpos=$(window).scrollTop();
        if(scrollpos >=navoffeset){
            $("nav").addClass("fixed");
        }else{
            $("nav").removeClass("fixed");
        }
    });

});
//点击导航栏跳转楼层
$(document).ready(function(){
    $("nav ul li a").click(function(){
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
    });
  /*遮罩*/
    var mask=$(".mask");
    for (var i = 0; i <mask.length; i++) {
        mask[i].onmouseenter=function(){
            var bt=$(".bt");
            var bl=$(".bl");
            var br=$(".br");
            var bb=$(".bb");
            bt.animate({width:200},"liner");
            bl.animate({height:100},"liner");
            br.animate({height:100},"liner");
            bb.animate({width:200},"liner");
        }
        mask[i].onmouseleave=function(){
            var bt=$(".bt");
            var bl=$(".bl");
            var br=$(".br");
            var bb=$(".bb");
            bt.animate({width:0},"liner");
            bl.animate({height:0},"liner");
            br.animate({height:0},"liner");
            bb.animate({width:0},"liner");

        }

    };

})