console.log(localStorage.getItem("belajar"));
//localStorage masih ada walapun kita sudah tidak menghubungkan ke javascript localStorage lagi
//karena localStorage itu absolut

//session storage adalah kebalikan dari localStorage
//jadi kalau halaman webnya direstart ya hilang

sessionStorage.setItem("coba",100);
console.log(sessionStorage.getItem('coba'));
//fungsi-fungsi sessionStorage sama seperti localStorage seperti remove,clear dll

