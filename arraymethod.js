//Array bisa berisi :
// String,number,objek,function,campuran

let nilai = [
    {
        nama : 'daniel',
        ipa : 90,
        bahasa : 70,
        matematika : 85
    } ,
    {
        nama : 'iselin',
        ipa : 85,
        bahasa : 75,
        matematika : 80
    } ,
    {
        nama : 'mark',
        ipa : 80,
        bahasa : 70,
        matematika : 88
    } ,
    {
        nama : 'victor',
        ipa : 95,
        bahasa : 97,
        matematika : 99
    } ,
];

let nama = [
    'daniel', 'iselin', 'mark', 'victor'
];

let tampil = ()=> {console.log(nama); 
console.log(nama.length); }

console.log(nilai[0].nama);
console.log(nama[2]);
tampil();
console.log('elemen pop : ' + nama.pop()); //mengambil elemen paling belakang
// elemen terakhir otomatis tidak lagi menjadi bagian array / otomatis hilang
tampil();

nama.push('diana','justin')
// push digunakan untuk menambahkan elemen array dari paling belakang
console.log('tambahkan elemen : '+ `${nama[3]} dan ${nama[4]}`);
tampil();

console.log('elemen pop : ' + nama.pop()); //mengambil elemen paling belakang
tampil();


// shift digunakan mengambil elemen paling depan
console.log('elemen shift : ' + nama.shift());
tampil();

//unshift digunakan untuk menambahkan elemen array dari paling depan
nama.unshift('fernando','mia', 'abdula','paul','flo');
console.log(`tambahkan elemen : ${nama[0]} dan ${nama[1]}`);
tampil();

//splice digunakan untuk mengambil elemen array dengan syntaks nama.splice(indeks awal(dihitung dari 0), berapa elemen yang ingin dipindah)
// console.log(`split content : ${nama.splice(3,3)}`);
//dapat di assgn ke array baru
// let namaBaru = nama.splice(3,3); // otomatis indeks 3 dan elemen setelahnya pada array nama dipindah ke let baru
console.log(nama.splice(3,3));
tampil();
console.log(`Array baru hasil splice` );
// console.log(namaBaru);

//slice digunakan ntuk mengambil elemen sebuah array dengan syntaks elemen.slice(indeks el awal dihitung dri 0 (sampai), length el akhir(dimulai/dihitung dari 1))
console.log(nama.slice(1,4));
//tambahan jika slice(2) itu artinya kamu mengambil seluruh array yang mana dimulai dari indeks 2-akhir

//nb : splice itu menghilangkan/mengambil elemen sehingga langsung hilang,sedangkan slice tidak

let mapel = ['ipa','bahasa', 'matematika'];

//concat digunakan unuk menggabungkan ke 2 array dan kalau mau buat array baru harus buat variabel baru juga
console.log(mapel);

// console.log(nama.concat(mapel));
// bisa juga dengan cara :
console.log(nama.concat(['ips','pkn','sejarah']));

//cara memanggil elemen array menggunakan for
nama.forEach((a)=>
    console.log(a)
);

// atau :
console.log('==================');
for (let index = 0; index < nama.length; index++) {
    console.log(nama[index]);
}

console.log('==================');

// filter digunakan untuk membuat array baru dengan semua elemen melewati tes yang dibuat
nilai.filter(function(a){
    if(a.ipa >= 90) {
        console.log(a.nama);
    }
})
// nb : bisa di masukkan ke dalam sebuah variabel buat array baru
// 

console.log('==================');
nilai.filter((a) => (a.ipa >=90 && a.matematika >= 80 ? console.log(a.nama) : null));

// map digunakan untuk mengambil array lalu membuat duplikannya yang kemudian elemennya bisa kita modifikasi
// nb : variabel baru yang menyimpan map jika elemennya diubah tidak mempengaruhi elemen asli yang di copy
// let siswa = nilai.map( function (a) {
//     return a.nama;
// });
// atau
// let siswa = nilai.map(a=> a.ipa);

// membuat array baru dengan 2 dimensi variabel siswa memiliki 4 elemen setiap elemennya ada 3 elemen terdiri dari nama,ipa,dan bahasa maka dimensi arraynya yaitu [4][3]
let siswa = nilai.map( a => [a.nama, a.ipa, a.bahasa]);
console.log(siswa);
//contoh jika kita mengeluarkan siswa[0][2] maka outputnya adlah 70 karena 0 mewakili Daniel dan 2 mewakili pengambilan array bahasa yang nilainya 70



// let hasil = nilai.reduce(function(a,b) {
//     return (a+=b.ipa);
// },0);
// atau
let hasil = nilai.reduce((a,b)=>a+=b.ipa,0); //maksud dari n0l adalah penjumlahan dimulai dari angka 0
//disini a disebut dengan akumulator , dan akumulatornya bervalue 0
//yang kemudian terus diincrement dengan b yang merupakan value dari objek kita sendiri

console.log(hasil);



