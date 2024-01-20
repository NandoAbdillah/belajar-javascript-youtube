//ketika kita mendefinisikan local storage maka ia akan menempe terus pada dokumen kit
//walaupun kita merefresh halaman web atau membuka ulang dokumen, ia akan tetap ada
//kecuali kalau kita sudah removeItem/localStorage
localStorage.setItem("coba",100);

localStorage.setItem("tes", "Saya belajar javascript");

localStorage.setItem("belajar", "Saya Belajar LocalStorage");

//syntaks localStrorage.item bisa kita lihat di console.log //aplikasi//penyimpanan
//localStorage.item(key,value)

console.log(localStorage.getItem("coba"));
//get untuk menampilkan value
console.log(localStorage.getItem('tes'));

//remove untuk menghapus localStorage 
//nilai dihapus
// localStorage.removeItem("coba");
console.log(localStorage.getItem("coba")); //output null
//mengapa console.log yang paling atas itu masih menampilkan value coba
//itu karena kode javascript selalu dimulai dari atas ke bawah

//clear berfungsi menghapus semua localStorage
// localStorage.clear();

//key berfungsi menampilkan key lalu dilanjutkan dengan urutan
//disini urutannya menggunakan index jadi dimulai dari 0
console.log(localStorage.key(1)); //coba 0 , tes 1

//menampilkan jumlah local storage yang sudah dibuat
console.log(localStorage.length); //output 2


