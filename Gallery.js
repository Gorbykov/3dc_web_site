"use strict";
var f = function () {
    var containerWidth = $("#content").width();
    var tileWidth = 300;
    var n = Math.floor(containerWidth / (tileWidth + 23))
    var preferWidth = Math.floor(containerWidth / n - 23);
    console.log(preferWidth + ", " + containerWidth + "," + tileWidth);
    $(".tile").css("width", preferWidth);
}
f();
$(window).resize(f);