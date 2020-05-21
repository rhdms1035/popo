$(".depth1 > li").on("click", function(){

    $(this).toggleClass("on")
    $(this).siblings().removeClass("on")
    $(this).find(".depth2").stop().slideToggle(400)
    $(this).siblings().find(".depth2").stop().slideUp(400)

})

$(".tabmenu > li").on("click", function(){

    $(this).addClass("active")
    $(this).siblings().removeClass("active")
})