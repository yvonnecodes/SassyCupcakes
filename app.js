//Jumbotron 

$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

//Navigation
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});