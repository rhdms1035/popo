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
    $("#header").addClass("on")
   $("#gnb").show()
})

// 햄버거모양을 누르면 메뉴와 엑스버튼이 나오는데
// 엑스버튼을 누르면 메뉴창이 닫힘
$("#header .closeMOgnb").on("click", function(){
    $("#header").removeClass("on")
    $("#gnb").hide()
})

// 작은 메뉴창이 닫히고 창이 커지면 메뉴바가 안나오는걸 다시 불러옴
// 799사이즈 이상이 되면 메뉴를 다시 보여줌
$(window).resize(function(){
    var ww = $(this).width()
    if (ww > 799) {
        $("#header").removeClass("on")
        $("#gnb").show()
    } else {
        $("#gnb").hide()
    }
})