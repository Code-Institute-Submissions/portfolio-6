$(document).ready(function(){
    // NAVIGATION TOGGLE
    $('.nav-toggle').click(function(){
        $('.nav-toggle').toggleClass('active');
        $('.menu-list').toggleClass('menu-list-visible', 500);
        $('.menu-list-item').each(function(i) {
            setTimeout(function() {
              $('.menu-list-item').eq(i).toggleClass('slide-in');
            }, (700 * (Math.exp(i * 0.2))) - 700);
        });
    });

    // NAV LINK CLICK EVENT
    $('.nav-link').click(function() {
        $('.nav-toggle').removeClass('active');
        $('.menu-list').removeClass('menu-list-visible', 200);
        $('.menu-list-item').each(function(i) {
            setTimeout(function() {
              $('.menu-list-item').eq(i).removeClass('slide-in');
            }, (700 * (Math.exp(i * 0.2))) - 700);
        });
    });
    
    // SMOOTH SCROLLING
    var smoothScroll = $('.scroll');
    smoothScroll.click(function(e) {
        e.preventDefault(); // PREVENT PAGE FROM JUMPING TO EACH SECTION
        $('body,html').animate({ 
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

    $(window).scroll(function() {
        // NAV LINK ACTIVE SWITCHER
        var scrollBarLocation = $(this).scrollTop();
        smoothScroll.each(function() {
           var sectionOffset = $(this.hash).offset().top - 30;
           if (sectionOffset <= scrollBarLocation) {
               $(this).addClass('nav-link--active');
               $(this).parent().siblings().children().removeClass('nav-link--active');
           }
        });
        // PARALLAXING SUMMARY BOX
        $('.summary--parallax').each(function() {
            var currentWidth = $(window).width();

            if ( currentWidth <= 767 ) {
                console.log('Screen width < 768');
            } else if ( currentWidth >= 768 && currentWidth <= 959 ) {
                console.log('Screen width between 768 and 959');
            } else if ( currentWidth >= 960 ) {
                console.log('Screen width 960 or larger');
            }
        });
    });
});

// TYPEWRITER ES6
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const i = this.wordIndex % this.words.length;

        // Get full text of current word
        const fullTxt = this.words[i];

        // Check if deleting

        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into elem
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        // Initial Type Speed
        let typeSpeed = 200;

        if(this.isDeleting) {
            typeSpeed /= 2;         // same as typeSpeed = typeSpeed / 2
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Pause on text completion
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            //
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    };
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.rotator');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
