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
