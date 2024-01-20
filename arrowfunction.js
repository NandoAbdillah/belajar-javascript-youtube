let fungsi = function (nama) {
    console.log(`Belajar function ${nama}`);
};

fungsi(`Nando`);

//Fungsi di atas dapat di sederhanakan dengan fugsi arrow di bawah ini 
let contoh = nama => {
    console.log(`Belajar function ${nama}`);
}
contoh(`Yogi`);

let tambah = function (a,b) {
    return a+b;
}; // dapat disederhanakan dengan fungsi arrow dibawah
console.log(tambah(2,3));

let plus = (a,b) => a+b; //a+b adalah bnetuk return 
console.log(plus(2,3));
//nb : bentuk return dalam arrow fuction tidak ditulis melainkan otomatis mengembalikan nilai yang kita didefinisikan di dalamnya


let hasil = a=> a*2; //cara penulisan a bisa (a) atau tanpa kurung, berlaku jika hanya ada 1 parameter
console.log(hasil(5));

let lagi =()=> console.log(`Coba Lagi`); //tanpa parameter
lagi();

let Belajar =()=> { //tanpa parameter
    console.log(`Baris Satu`);
    console.log(`Baris Dua`);
    console.log(`Baris Tiga`);
    console.log(`Baris Selanjutnya`);
};
Belajar();

let nilai = 10; // syntaks if(pengujian) jika ditaruh pada fungsi yaitu (nilai yang diuji simbollogika syarat) ? ()=> jika hasil true : ()=> jika hassil false;
let uji = (nilai<7) ? () => console.log(`gagal`) : ()=> console.log(`Lulus`);
uji();

let skor = 7;//variabel predikat otomatis menjadi return/nilai kembalian dalam fungsi
let diuji = skor<7 ? ()=>predikat=`GAGAL`:()=>predikat=`LULUS`;
console.log(diuji());


