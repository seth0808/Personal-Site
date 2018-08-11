$(function () {
    $("#zip").mouseenter(function () {
        $("body").after("<div id ='info' style='font-size: 10px;border-radius: 5px; background: linear-gradient(to bottom right, rgba(0, 128, 2, 0.3), rgba(0, 0, 0, 0));; height: 60px; width: 100px; text-align: center;'> <p>Set the weather to the current weather of the zip code</p></div>");
        $("#info").css("position", "absolute");
        $("#info").css("bottom", "2.5%");
        $("#info").css("left", "2.5%");
        $("#info").fadeOut(0);
        $("#info").fadeIn(1000);
    });
    $("#zip").mouseleave(function () {
        $("#info").fadeOut(1000);
    });

});

