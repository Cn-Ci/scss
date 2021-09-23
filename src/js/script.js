/**** Compteur de postes et années */
// quand on clique sur la class cardAnim
$('.cardAnim').on('click', function(){
    // on active la classe active sur la div rowAnimate
    $('.rowAnimate').toggleClass('active');
})


/**** Compteur de postes et années */
var a = 0;
// quand l'user scroll la fenetre
$(window).scroll(function() {
    // oTop correspond a la taille de la fenetre au niveau de la div .count 
    var oTop = $('.count').offset().top - window.innerHeight;
    // si le scroll est superieur a la taille de la div .count
    if (a == 0 && $(window).scrollTop() > oTop) {
        // Pour chaque class .count
        $('.count').each(function () {
            // on ajoute la propriété counter qui part de zero avec une animation
            $(this).prop('Counter',0).animate({
                // on définit le nombre n ecrit dans le span que le compteur doit atteindre
                Counter: $(this).text()
            }, {
                // temps 4 secondes
                duration: 4000,
                // type d'animation 
                easing: 'swing',
                // a chaque incrementation de counter
                step: function (now) {
                    // on modifie le texte en incrementant au fur et a mesure de l'animation 
                    $(this).text(Math.ceil(now));
                }
            });
        });
        a = 1;
    };
});


