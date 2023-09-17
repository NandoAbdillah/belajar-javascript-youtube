function coba() {
    let belajar = `Saya Belajar `;
    let bahasa = `JavaScript`;
    console.log(`${belajar} ${bahasa}`);
    console.log(`${bahasa} itu mudah`);
}

for(let i=0; i<4; i++) {
    console.log(i);
    coba();
    
}

function persegi(l,p) {
    console.log(l);
    console.log(p);
    console.log(`Luas persegi ${l}x${p} adalah ` + l*p);
} // output luas 18
persegi(7,15); // menyetor nilai variabel fungsi persegi secara berurutan

function out() {
    return console.log(`output function`);
}

function lingkaran(r) {
    luas = 3.14*r*r;
    return luas; //function dengan kembalian nilai
}
 console.log(lingkaran(10)); //untuk menampilkan konten kembalian diperlukan console.log saat memanggil fungsi
let tinggi = 5;
 let tabung = lingkaran(10)* tinggi;
 console.log(`Luas tabung dengan tinggi 5cm adalah ${tabung}`);

 
