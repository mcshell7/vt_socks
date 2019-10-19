
$(document).ready(function(){
    $('.slider_inner').slick({
        arrows:false,
        adaptiveHeight: false,
        dots:true});
    $('.prod_inner').slick({
        prevArrow:'<button type="button" class="slick-prev slick_btn-prev"></button>',
        nextArrow:'<button type="button" class="slick-next slick_btn-next"></button>',
        slidesToShow:4,
        dots:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 721,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    slidesPerRow: 2


                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,




                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    adaptiveHeight: true



                }
            }

        ]

    });
    $('.caard_slider_inner').slick({
        slidesToShow:5,
        dots:false,
        variableWidth: true,
        adaptiveHeight: true,
        arrows:false,
        slidesToScroll: 2


    });

});




if($(window).width() < 992 ) {
    $(function(){
        $('.service').slick({
            arrows:false,
            adaptiveHeight: false,
            dots:true});
        $('.service_items').slick({
            prevArrow:'<button type="button" class="slick-prev slick_btn-prev"></button>',
            nextArrow:'<button type="button" class="slick-next slick_btn-next"></button>',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            dots:true,
            responsive: [
                {
                    breakpoint: 721,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        variableWidth: true,
                        adaptiveHeight: true,


                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        variableWidth: true,
                        adaptiveHeight: true
  }
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        adaptiveHeight: true



                    }
                }

            ]
        });

    });
    $(".footer_top_title").on("click",function () {
        $(this).next("ul").slideToggle('slow');
    });
    $(".menu1").on("click",function () {
        $(this).find(".hidden_menu").slideToggle('slow');
    });


} else {

}



// hidden_menu_background

let overfl= document.querySelector(".button_before");
function on() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".hidden_menu_background").style.display = "block";
    document.body.style.overflow ="hidden";
}
function off() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".hidden_menu_background").style.display = "none";
        document.body.style.overflow = "scroll";
}
function off_basket() {

    document.querySelector(".product_item").style.display = "none";
    document.querySelector(".product_item_inner").style.display = "none";
    document.body.style.overflow = "scroll";
}
let sel_lang= document.querySelector(".select_lang");
let sel_currency= document.querySelector(".select_currency");

sel_lang.addEventListener("click",clickOn);
sel_currency.addEventListener("click",clickOn);
langLi.addEventListener("click",selectLang);
function clickOn(ev){
    if (ev.target.nextElementSibling.style.display == "block"){
        ev.target.nextElementSibling.style.display = "none";
    }
    else if(ev.target.nextElementSibling.style.display == "none"){
        ev.target.nextElementSibling.style.display = "block";
    }
};
//
// $(document).ready(function () {
//     $(".ul_menu > li > .link1").click(function () {
//             $(".sub1").slideToggle("slow");
//     });
// });
// $(document).ready(function () {
//     $(".ul_menu > li > .link2").click(function () {
//         $(".sub2").slideToggle("slow");
//     });
// });


function menu()
{
    var el = document.querySelector(".open");
    el.addEventListener('click',open);
    function open(ev)
    {
        console.log("open");

        document.querySelector(".menu_btn").classList.add("active");
        var menu_btn = document.querySelector(".menu_btn");
        console.log(menu_btn);
        menu_btn.addEventListener('click',close);

    }
    function close(ev)
    {
        console.log("close");
        if(ev.target.matches(".btn-exit"))
        {document.querySelector(".menu_btn").classList.remove("active");

        }
    }
}
$(".header_btn_menu").on("click",function () {
    $(".menu ul").slideToggle();
});

$(".button_before").on("click",function () {
    $(this).find(".product_item").hide('slow');
});

$(".link1").on("click",function () {
    $(this).find("ul").slideToggle('slow');
});
// $(document).ready(function () {
//     $(".our_prod").on("click",".togle",function () {
//         $(".our_prod").find(".active").removeClass("active");
//         $(this).addClass("active");
//         $(".prod_slider").eq($(this).index()).addClass(".active");
//     })
//
//
// })




// $(function () {
//     $("#btn2").click(function () {
//         $("#myModal2").modal('show');
//     });
// });