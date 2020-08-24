// 타입
var typed = new Typed('#typed', {
    strings: ["가나다라마바", "아기사자",
    "어흥!"],
    typeSpeed: 100,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
});

// 슬라이드
new Swiper("#main",{
    direction: "vertical",
    mousewheel:true,
    speed:1200,
    parallax:true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // }

})
$(".btnAll").on("mouseenter",function(){
    $(this).addClass("on");
});
$(".btnAll").on("mouseleave",function(){
    $(this).removeClass("on");
})
$(".btnAll").on("click",function(){
    $(this).toggleClass("btnAllClick");
});