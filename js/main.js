$(document).ready(function () {
    $(window).on("scroll",function () {
        $(".progress").each(function (index, progress) {
            var progressBar = $(progress).find(".progress-bar");
            var progressPersent = parseInt($(progressBar).attr("data-progress"));
            if($(window).scrollTop() > $(progress).offset().top - 400){ $(progressBar).css("width",progressPersent + "%").text(progressPersent + "%");
            }
        });
    });
});