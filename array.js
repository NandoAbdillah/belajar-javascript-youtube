let coba =()=> `Coba Function`;

let buah = [`Apel`,`Mangga`,`Jeruk`,10,coba(),
    tes= ()=>`Hasil return arrow function`,
    function nama(nama) {
        return `Nama Saya ${nama}`;
    }
];
console.log(buah); //Bakal Tampil semua array
console.log(buah[0]); //Menampilkan array buah di indeks ke 0

//untuk menampikan seluruh anggota array
for(let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]()); //buah[5] adalah bentuk string dengan syntaks function yang dapat kita konversikan kembali dan mengembalikan hanya nilai returnya 
console.log(buah[6](`Nando`)); //Kita juga bisa menyetor parameternya

//nb : array dalam js sangat unik karena dalam satu variabel dapat menampung segala jenis
// baik itu integer,string,fungsi,dll dapat ditampung dalam satu array

