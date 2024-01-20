const objek = {
    nama : "smk revit",
    telp : 12345678,
    buah : ['apel','jeruk','mangga'],
    coba : function () {
        return 'Coba function dalam objek';
    },
    boleh : true,
    'tulis aja' : 1234,
};
//untuk memanggil atribut objek harus => namaObjek.atribut
console.log(objek.nama);
console.log(objek.telp);
//for biasa
for (let i=0; i<objek.buah.length; i++) {
console.log(objek.buah[i]);
}
// for khusus array
console.log(`============`);
for (let element of objek.buah) {
    console.log(element);
}
//menggunakan for each
console.log(`============`);
objek.buah.forEach(function(element) {
    console.log(element);
});
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"]);