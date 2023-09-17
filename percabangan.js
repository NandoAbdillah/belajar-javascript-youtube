if (true) {
    console.log("dijalankan jika benar");
}
else {
    console.log("dijalankan jika salah");
}

let nilai = 5000, standar=60, baik="LULUS", gagal="TIDAK LULUS",peringatan="Nilai Salah",batasatas=100, batasbawah=0;
if (nilai >= batasbawah && nilai <= batasatas) {
    if (nilai>=standar) {
        console.log(baik);
    }
    else {
        console.log(gagal);
    }
}
else {
    console.log(peringatan);
}


