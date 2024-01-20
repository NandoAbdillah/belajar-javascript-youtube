//dijalankan ketika halaman terload
$( document ).ready(function() {
    console.log( "siap!" );
}); //dipersingkat menjadi
$(function(){
    console.log('siap!');
})

//document selector pengganti document.querySelector
$(function(){
    $('#isi').html('<h1>Belajar Jquery</h1>');

    $('#klik').click(function (e) { 
        e.preventDefault();
        alert('Belajar javascript');
    });

    $('#klik').mouseleave(function () { 
        alert('mouse leave');
    });

    //masih banyak event-event yang lainnya
})

