
(function() {

    var menuBtn = document.querySelector('.header-menu-btn');

    menuBtn.addEventListener('click', function() {
        document.body.classList.toggle('menu-on');
    });
})();
// ----------------Menu scrolling-----------------
    function gototop(){
        var offset = $("#header").offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }

    function fnMove(seq){
        var offset = $(".section-" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }
// ---------------image sliding (header) ----------------------


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("imageslide");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     slides[slideIndex-1].style.display = "block";  
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// -----------------------portfolio isotope jquery func------------------------------


$(document).ready(function (){
    var $grid =$('.grid').isotope({
        // options
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    var filterFns = {
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    $('.portfolio-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
    });
});
  