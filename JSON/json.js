document.querySelector('#klik').addEventListener('click', tampil)

function tampil () {
    //CONTOH JSON DARI WEB JSONPLACEHOLDER
    // let url = 'https://jsonplaceholder.typicode.com/todos/1';
    let url = 'tblmenu.json'; //pengambilan data
    fetch(url)
      .then(res=> res.json()) //diambil kemuidan ubah bentuknya menjadi json
    //   .then(json=> console.log(json)) //kemudian di tampilkan
      .then(data => {
            let output = "<h1>DATA MENU</h1> <table> <tr> <th>Menu</th> <th>Harga</th> <th>Warna</th></tr>";
            data.forEach(element => {
                output+= `<tr>
                    <td >${element.menu}</td>               
                    <td>${element.harga}</td>
                    <td>${element.warna[0]}</td>
                </tr>`;               
            });

            output+='</table>';
            document.querySelector('#isi').innerHTML = output;
            
        })

}








// //contoh penulisan json
// //untuk memeriksa json kita ke web bernama jsonlint.com
//             //Bentuk Objek
// //satu objek
//         // let tblmenu = {
//         //     "idmenu" : 1,
//         //     "idkategori" :1,
//         //     "menu" : "Apel Manalagi",
//         //     "harga" : 3000,
//         //     "warna" : ["merah", "kuning","hijau"],
//         //     "stok" : true,
//         //     "keterangan" : null //tidk boleh ada koma
//         // }

// //array, lebih dari satu objek
// let tblmenu = [
//     {
//     "idmenu" : 1,
//     "idkategori" :1,
//     "menu" : "Apel Manalagi",
//     "harga" : 3000,
//     "warna" : ["merah", "kuning","hijau"],
//     "stok" : true,
//     "keterangan" : null //tidk boleh ada koma
//     },
//     {
//     "idmenu" : 2,
//     "idkategori" :1,
//     "menu" : "Pisang Raja",
//     "harga" : 5000,
//     "warna" : ["merah", "kuning"],
//     "stok" : true,
//     "keterangan" : null //tidk boleh ada koma
//     }
// ]

// console.log(tblmenu);
// console.log(tblmenu[0].menu)