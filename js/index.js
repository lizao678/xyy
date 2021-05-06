window.onload = function() {
    // console.log($(window).width());
    // 当屏幕小于768时默认使用的是移动设备
    $(".icon-wechat").on({
        mouseenter:function() {
            if ($(window).width() > 767) {
               $(".icon-wechat > span").addClass('wechat');
            }
        },
        mouseleave:function() {
            if ($(window).width() > 767) {
               $(".icon-wechat > span").removeClass('wechat');
            }
        },
        touchstart:function() {
           $(".icon-wechat > span").toggleClass('wechat');
        }
    })
}