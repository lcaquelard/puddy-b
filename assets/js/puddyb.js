/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../scss/puddyb.scss';
import '../scss/slick.scss';
import '../scss/slick-theme.scss';


import './jquery-3.5.1.js';
import './slick.js';

$(window).ready(function(){
    if ($('#content.discobus #bus_slider').length)
        $('#content.discobus #bus_slider').slick();

    if ($('#overtitle').length) {
        setTimeout(function () {
            $('#overtitle_bar').hide(250);
            $('#overtitle').hide(250);
            $('#shroud').hide(300);
        }, 3000);
    };

    $('#content.temps_a_bord #watches_row .watch').click(function(){
        let popin;
        popin = $('#temps_a_bord_popin_' + $(this).data('id'));
        if (popin.length){
            $('#shroud').show(300);
            popin.addClass('active').show(300);
        }
    });

    $('#bus_row .bus .inner').click(function(){
        let bus = $('#nos_discobus_popin .bus[data-id='+$(this).parent().data('id')+']');
        bus.addClass('active');
        $('#shroud').show(300);
        $('#nos_discobus_popin').addClass('active').show(300, function(){
            bus.children('.slider').slick();
        });
    });

    $('#shroud').click(function(){
        $('.popin.active').hide(300).removeClass('active');
        $('#shroud').hide(300);
    });

    $('.popin .close').click(function(){
        $('.popin.active').hide(300).removeClass('active');
        $('#shroud').hide(300);
    });

    $('#phone').click(function(){
        if ($(this).hasClass('active')) {
            $(this).children('div').hide(250);
            $(this).removeClass('active');
        } else {
            $(this).children('div').show(250);
            $(this).addClass('active');
        }
    });

    $('main.main div.alert .close').click(function(){
        $(this).parent().hide(300);
    });
});