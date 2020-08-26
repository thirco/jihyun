$(window).on("scroll", function (e) {

    if ($(window).scrollTop() > 0) {
        $("#header").addClass("scroll");
    } else {
        $("#header").removeClass("scroll");
    }

})
new Swiper("#mainVisual", {
    effect: "fade",
    autoplay: {
        delay: 9000,
    }
});

$(".btnCart").on("mouseenter focusin", function () {
    $(this).addClass("hover");
});
$(".btnCart").on("mouseleave focusout", function () {
    $(this).removeClass("hover");
});

$(window).on("scroll",function(e){
    if($(this).scrollTop()>=2859){
        $("#best .fixBanner .fixedItem").addClass("on");
    } else if($(this).scrollTop()>3509) {
        $("#best .fixBanner .fixedItem").removeClass("on");
    }else {
        $("#best .fixBanner .fixedItem").removeClass("on");
    }
})

$(window).on("scroll",function(e){
    console.log($(this).scrollTop())
})