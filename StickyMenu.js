"use strict";

$(window).scroll(function() {
    var $block = $('#menu'); // ID шапки
    var headHeight = $("#head").outerHeight() + 13;
    var margin = $block.css("margin");
    if($(window).scrollTop() > headHeight + 10) {
        $block.css({"position":"fixed", "top":"10px"});
    } else {
        $block.css({"position":"absolute", "top":""});
    }
});