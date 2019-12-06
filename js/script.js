$(function() {
    $('#header-include').load('https://codrkai.github.io/header.html');
    $('#footer-include').load('https://codrkai.github.io/footer.html');

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 50 ) {
            $('.navbar').addClass('solid bg-dark');
        } else {
            $('.navbar').removeClass('solid bg-dark');
        }
    });

    // This script has been moved to footer.html because since I'm
    // using the javascript load() function above, this now needs to 
    // run after everthing is loaded.
    // If you are not using the load() function above, then uncomment 
    // the function below and it will work the same way.
    /*
    $('.dropdown-item, .nav-item').on('click', function(e) {
        if ( this.hash !== "" ) {
            e.preventDefault();
            var anchor = this.hash;

            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 800, function() {
                window.location.hash = anchor;
            });
        }
    });
    */
});