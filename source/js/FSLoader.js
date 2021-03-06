/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {
    $.fn.FSLoader = function (args) {
        var settings = $.extend({
            textToDisplay: "Loading",
            timeToHide: 1200,
            pos: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "10000",
            bgColor: "#2ecc71",
            spinner: "spinner7",
            imagePath: "",
            opacity: 1,
            changeText: function (text) {
                var o = $(this).find(".loadingText").find("center");
                o.html(text);
            },
            appendText: function (text) {
                var o = $(".loadingText");
                o.append(text);
            },
            hide: function () {
                var o = $(this);
                $(o).fadeOut();
            },
            show: function () {
                var o = $(this);
                o.css({
                    display: "block"
                });
                $(o).fadeIn();
            }
        }, args);
        if (settings[args]) {
            return settings[args].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof args === "object" || !args) {
            } else {
                $.error("Method " + args + " does not exist on jQuery.tooltip")
            }
        }
        var spinner1 = $('<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');
        var spinner2 = $('<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>');
        var spinner3 = $('<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>');
        var spinner4 = $('<div class="fl spinner4"></div>');
        var spinner5 = $('<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>');
        var spinner6 = $('<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
        var spinner7 = $('<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>');
        var $element = $(this);
        var css = {
            position: settings.pos,
            width: settings.width,
            height: settings.height,
            top: settings.top,
            left: settings.left,
        };
        var l = {
            top: settings.top.replace("px", "") - 10 + "px",
            color: "white",
            "font-size": "50px"
        };
        $element.css(css);
        var m = $("<div class='row loadingText'><center>" + settings.textToDisplay + "</center></div>");
        if (!$element.find('.loadingText').length) {
            $element.append(m);
        }
        $element.each(function () {
            var o = settings.spinner;
            switch (o) {
                case "spinner1":
                    if (!$element.find('.spinner1').length)
                        $element.append(spinner1);

                    break;
                case "spinner2":
                    if (!$element.find('.spinner2').length)
                        $element.append(spinner2);
                    break;
                case "spinner3":
                    if (!$element.find('.spinner3').length)
                        $element.append(spinner3);
                    break;
                case "spinner4":
                    if (!$element.find('.spinner4').length)
                        $element.append(spinner4);
                    break;
                case "spinner5":
                    if (!$element.find('.spinner5').length)
                        $element.append(spinner5);
                    break;
                case "spinner6":
                    if (!$element.find('.spinner6').length)
                        $element.append(spinner6);
                    break;
                case "spinner7":
                    if (!$element.find('.spinner7').length)
                        $element.append(spinner7);
                    break;
                default:
                    $element.append(spinner1)
            }
            if (settings.imagePath != "") {
                if (!$element.find('div.fl img').length)
                    $element.append('<div class="fl"><img src="' + settings.imagePath + '"></div>')
            }
        });
        if (settings.timeToHide != "infinite") {
            setTimeout(function () {
                $($element).fadeOut()
            }, settings.timeToHide)
        } else {
            if (settings.timeToHide == "infinite") {
            }
        }
        return this.css({
            backgroundColor: settings.bgColor,
            opacity: settings.opacity,
            zIndex: settings.zIndex
        });
    };
}(jQuery));