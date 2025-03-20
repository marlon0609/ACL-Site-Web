(function ($) {
    "use strict";

    // Spinner
    // Cette fonction masque le spinner (élément avec l'ID #spinner) après un délai de 1 milliseconde.
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) { // Vérifie si l'élément #spinner existe
                $('#spinner').removeClass('show'); // Supprime la classe 'show' pour masquer le spinner
            }
        }, 1); // Délai de 1 milliseconde
    };
    spinner(); // Appelle la fonction pour exécuter le masquage du spinner

    // Initiate the wowjs
    // Initialise la bibliothèque WOW.js pour activer les animations au défilement.
    new WOW().init();

    // Sticky Navbar
    // Ajoute ou supprime une ombre et ajuste la position de la barre de navigation en fonction du défilement.
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { // Si l'utilisateur a défilé de plus de 300 pixels
            $('.sticky-top').addClass('shadow-sm').css('top', '0px'); // Ajoute une ombre et fixe la navbar en haut
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px'); // Supprime l'ombre et cache la navbar
        }
    });

    // Back to top button
    // Affiche ou masque le bouton "Retour en haut" en fonction du défilement.
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { // Si l'utilisateur a défilé de plus de 300 pixels
            $('.back-to-top').fadeIn('slow'); // Affiche le bouton avec une animation
        } else {
            $('.back-to-top').fadeOut('slow'); // Masque le bouton avec une animation
        }
    });
    $('.back-to-top').click(function () {
        // Lorsque l'utilisateur clique sur le bouton, fait défiler la page vers le haut avec une animation.
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false; // Empêche le comportement par défaut du clic
    });

    // Facts counter
    // Active le compteur animé pour les éléments ayant l'attribut data-toggle="counter-up".
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10, // Délai entre chaque incrémentation
        time: 2000 // Durée totale de l'animation
    });

    // Portfolio isotope and filter
    // Initialise Isotope pour organiser les éléments du portfolio et ajoute un filtre interactif.
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item', // Sélecteur des éléments du portfolio
        layoutMode: 'fitRows' // Mode d'agencement en lignes
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active'); // Supprime la classe 'active' de tous les filtres
        $(this).addClass('active'); // Ajoute la classe 'active' au filtre cliqué

        // Filtre les éléments du portfolio en fonction de l'attribut data-filter du filtre cliqué
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Testimonials carousel
    // Initialise OwlCarousel pour afficher les témoignages sous forme de carousel.
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, // Active la lecture automatique
        smartSpeed: 1000, // Vitesse de transition
        items: 1, // Nombre d'éléments visibles
        dots: false, // Désactive les points de navigation
        loop: true, // Active la boucle infinie
        nav: true, // Active les boutons de navigation
        navText : [
            '<i class="bi bi-chevron-left"></i>', // Icône pour le bouton précédent
            '<i class="bi bi-chevron-right"></i>' // Icône pour le bouton suivant
        ]
    });

})(jQuery);

