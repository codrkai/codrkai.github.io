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

    $('.dropdown-item').on('click', function(e) {
        if ( this.hash !== "" ) {
            e.preventDefault();
            var anchor = this.hash; // #projectAnchor

            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 800, function() {
                window.location.hash = anchor;
            });
        }
    });
});