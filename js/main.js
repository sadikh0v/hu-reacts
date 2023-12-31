/* HUReacts Theme Scripts */

(function ($) {
    "use strict";

    $(window).on("load", function () {
        $("body").addClass("loaded");
    });

    /*=========================================================================
      Sticky Header
  =========================================================================*/

    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on("scroll", function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }
        });
    });

    /*=========================================================================
          Mobile Menu
  =========================================================================*/

    $(".menu-wrap ul.nav").slicknav({
        prependTo: ".header-section .navbar",
        label: "",
        allowParentLinks: true,
    });
})(jQuery);

/*=========================================================================
  Scroll To Top
=========================================================================*/

const scrollTop = document.querySelector('.scrollTop')
window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        scrollTop.style.display = 'flex'
    } else {
        scrollTop.style.display = 'none'
    }
}

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })
})


/*=========================================================================
  Example
=========================================================================*/

function changeItem(items) {
    const transformed = items.map((item) => {
        return '#circle' + item;
    })

    const circles = document.querySelectorAll(transformed.join(","))
    circles.forEach((circle) => {
        circle.style.transform = `scale(1.05)`
    });
}

function reChangeItem(items) {
    const transformed = items.map((item) => {
        return '#circle' + item;
    })

    const circles = document.querySelectorAll(transformed.join(","))
    circles.forEach(circle => {
        circle.style.transform = 'scale(1)';
    });
}

/*=========================================================================
  Mail
=========================================================================*/


// const link = document.getElementById("link");
// link.onclick = () => {
//     let recipient = "info";
//     let at = String.fromCharCode(64);
//     let dotcom = "hureacts.com";
//     let mail = "mailto:";
//     window.open(mail + recipient + at + dotcom);
// }


