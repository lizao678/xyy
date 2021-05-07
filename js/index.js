window.onload = function() {
    // console.log($(window).width());
    // 当屏幕小于768时默认使用的是移动设备
    $('.wechat').hide();

    function tog() {
        $(".wechat").toggle();
    }
    $(".icon-wechat").on({
        mouseenter:function() {
            if ($(window).width() > 767) {
               $(".wechat").show();
            }
        },
        mouseleave:function() {
            if ($(window).width() > 767) {
               $(".wechat").hide();
            }
        },
        touchstart:tog
    });
    $('.wechat').on('touchstart',function(e) {
        e.stopPropagation();
    });

}