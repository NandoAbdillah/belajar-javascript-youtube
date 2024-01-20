function coba() {
    a = document.querySelector('.isi');
    a.innerHTML ='Belajar eventlistener';
    console.log('coba eventlistener');
}

// judul.addEventListener('click', coba );
// judul.onmouseover = coba;
judul.onmouseover = ()=> {
    console.log('coba function anonymous');
}