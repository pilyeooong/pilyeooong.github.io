
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

var slideWrapper = document.querySelector('#projects .content');
// console.log(slideWrapper);
var slides = document.querySelectorAll('.item');
var totalSlides = slides.length;
console.log(totalSlides);
var sliderWidth = slideWrapper.clientWidth;
var slideIndex = 0;
var slider = document.querySelector('#slider');

slider.style.width = sliderWidth * totalSlides + 'px';
console.log(slider.style.width);

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    slider.style.left = -(sliderWidth * slideIndex) + 'px';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

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
        itemSelector: '.skills-item',
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

    $('.skills-item').magnificPopup({
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
  