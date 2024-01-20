// Belajar operator ternary untuk menggantikan if else

let nilai = 92;
//logika disimpan di variabel
let predikat = 
    nilai >= 90 
    ? 'A'
    :nilai >=80
    ? 'B'
    : 'C'

    //  Logika diatas sama dengan :

    // if(nilai>=90) {
    //     predikat = 'A';
    // }
    // else if (nilai >=80) {
    //     predikat = 'B';
    // }
    // else {
    //     predikat = 'C';
    // }

console.log(predikat);


let periksaNilai = (nilai)=> {
    let predikat = 
    nilai>=80 ?
    (nilai>=90 ?
        'A' : 'B')
    : nilai >= 65 ?
    (nilai >=70 ?
        'C' : 'C-')
    :'K';

    let status = 
    nilai>=80 ?
    'Melampaui'
    : nilai >=65 ?
    'Kurang Melampaui'
    :'Tidak Melampaui';

    return {predikat,status};
}

let hasil = periksaNilai(75);
console.log(hasil.predikat);
console.log(hasil.status);

// berasal dari kode

// if (nilai >= 80) {
//      if (nilai >=90) {
//           predikat='A';
//        }
//     else {
//          predikat='B';
//       }

//     status = 'Melampaui';
// }
// else if (nilai >= 65) {
//      if (nilai >=70) {
//           predikat='C';
//        }
//     else {
//          predikat='C-';
//       }

//     status = 'Kurang Melampaui';
// }

// else {
//     predikat= 'K';
//     status = 'Tidak Melampaui';
// }
