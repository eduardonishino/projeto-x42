//Scroll
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});

//Menu Responsivo
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
