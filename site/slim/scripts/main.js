
$(document).ready(function(){
$('.content').hide();
$('.diagram-tv').hide();
$('.tv-party').click(function(){
    $('.tv-section').addClass('animate__animated animate__fadeOut')
    $('.content').addClass('animate__animated animate__fadeIn')
    initSlide('object')
    setTimeout(function(){
        $('.tv-section').hide();
        $('.content').show();
    }, 1000);
})
function initSlide(itemMenu){
    if(itemMenu === 'object') {
        $('#characters').hide();
        $('#objects').show();
        setTimeout(function(){
            $('.s-obj').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
              });
        }, 1000);
    }
    if (itemMenu === 'character') {
        $('#characters').show();
        $('#objects').hide();
        setTimeout(function(){
            $('.s-char').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
              });
        }, 1000);
    }
}
$('#showCharacters').click(function(){
    initSlide('character')
})
$('#showObjects').click(function(){
    initSlide('object')
})

$('.item-related').addClass('dN');
$('#itemid-0').addClass('dF');
$('.item-slide').click(function(){
    $('.item-related').addClass('dN');
    $('.item-related').removeClass('dF');
    var id = $(this).attr("data-id");
    $('#'+id).addClass('dF');
})

$('#showDiagram').click(function(){
    $('.content-tv').hide();
    $('.diagram-tv').show();
    $('.tv-section').removeClass('animate__animated animate__fadeOut')
    $('.content').removeClass('animate__animated animate__fadeIn')
    $('.content').addClass('animate__animated animate__fadeOut')
    $('.tv-section').addClass('animate__animated animate__fadeIn')
    setTimeout(function(){
        $('.content').hide();
        $('.tv-section').show();
    }, 1000);
})


});