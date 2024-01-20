function tampil (b) {
    a= document.querySelector('p').innerText= 'Belajar event js '+b;
    // a.innerText = 'Belajar event js';
    console.log('Belajar event js');
}

judul.onclick = function() {
    console.log('Belajar event js menggunakan id');
    document.querySelector('.isi').innerText='Belajar event html menggunakan id';
}