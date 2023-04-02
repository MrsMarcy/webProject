for (let i=0; i < 15; i++){
 $('#container').append('<button class="boxes"></button>')
}
$('.boxes').on('click', function(){
    $(this).toggleClass('clicked')
})