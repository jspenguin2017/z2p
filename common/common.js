"use strict";

$(document).ready(function () {
    //Set footer
    $("#footer").html("Cat Chatter v1.7 by X01X012013 - Click to view license");
    //Set jump to top button animation
    $("#jumpToTop").click(function (e) {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        e.preventDefault();
    });
});