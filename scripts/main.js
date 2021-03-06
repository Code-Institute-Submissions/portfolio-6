$(document).ready(function(){
    // NAVIGATION TOGGLE
    $('.nav-toggle').click(function(){
        // EXECUTE FOLLOWING COMMANDS WHEN NAV TOGGLE IS CLICKED
        $('.nav-toggle').toggleClass('active');
        $('.menu-list').toggleClass('menu-list-visible', 500);
        // SLIDE IN EACH LIST ITEM INDEPENDENTLY
        $('.menu-list-item').each(function(i) {
            setTimeout(function() {
              $('.menu-list-item').eq(i).toggleClass('slide-in');
            }, (700 * (Math.exp(i * 0.2))) - 700);
        });
    });

    // NAV LINK CLICK EVENT
    $('.nav-link').click(function() {
        // EXECUTE FOLLOWING COMMANDS WHEN NAV LINK IS CLICKED
        $('.nav-toggle').removeClass('active');
        $('.menu-list').removeClass('menu-list-visible', 200);
        // SLIDE OUT LIST ITEMS WHEN A LINK IS CLICKED
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
            // SET VARIABLES
            var currentWidth = $(window).width();
            var wScroll = $(window).scrollTop();
            var elemPos = $(this).parent().offset().top - 450;
            var scrollOffset = wScroll - elemPos;
            var offsetInEm = scrollOffset * 0.01;

            if ( currentWidth <= 767 ) {
                // NO PARALLAX ON SMALL SCREENS
                $(this).css('top', 0+'em');
            } else if ( currentWidth >= 768 && currentWidth <= 959 ) {
                // SET STARTING POINT/END POINT OF PARALLAX MOTION ON MD SCREENS
                var limitedOffsetInEm = Math.max(Math.min(offsetInEm, 4), -8);
                $(this).css('top', limitedOffsetInEm+'em');
            } else if ( currentWidth >= 960 ) {
                // SET STARTING POINT/END POINT OF PARALLAX MOTION ON LG SCREENS
                var limitedOffsetInEm = Math.max(Math.min(offsetInEm, 4), -6);
                $(this).css('top', limitedOffsetInEm+'em');
            }
        });
    });

    // Firebase Connection - Credit Brad Traversy  https://youtu.be/PP4Tr0l08NE
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD3LYuxK3bB1Upjjl7vq7QnoS8DpNzdlyE",
        authDomain: "mk-github-portfolio.firebaseapp.com",
        databaseURL: "https://mk-github-portfolio.firebaseio.com",
        projectId: "mk-github-portfolio",
        storageBucket: "mk-github-portfolio.appspot.com",
        messagingSenderId: "1009925714765"
    };
    firebase.initializeApp(config);

    // REFERENCE MESSAGES COLLECTION
    var messagesRef = firebase.database().ref('messages');

    // ON FORM SUBMIT
    $('.contact-form').submit(function(e) {
        e.preventDefault();
        
        // GET VALUES
        var name = getInputVal('form-name');
        var email = getInputVal('form-email');
        var message = getInputVal('form-message');

        // SAVE MESSAGE
        saveMessage(name, email, message);

        // SHOW ALERT
        $('.form-alert').addClass('alert-animation');

        // HIDE ALERT AFTER FIVE SECONDS
        setTimeout(function() {
            $('.form-alert').removeClass('alert-animation');
        }, 5000);

        // CLEAR FORM VALUES
        document.getElementById('contact-form').reset();
    });

    // FUNCTION TO GET FORM VALUES
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    // SAVE MESSAGE TO FIREBASE
    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          email: email,
          message: message
        });
    }
});
