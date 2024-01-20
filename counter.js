let a = 0;

naik.onclick = ()=> {
    a++;
    tampil(a);
    console.log('naik');
};

turun.onclick = ()=> {
    if (a>0) {
        a--;
        tampil(a);
        console.log('turun');
    }
    
};

function tampil (a) {
    document.querySelector('h1').innerText= a;
}