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

// 작은화면에서 햄버거모양 누르면 메뉴가나옴
$("#header .openMOgnb").on("click", function(){
   $("#gnb").show()
})

$("#header .closeMOgnb").on("click", function(){
    $(this).parents("#header").removeClass("on")
})