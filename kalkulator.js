let btn = document.querySelectorAll('.btn-angka > button');
let tampil = document.querySelector('#tampil');
let mat = document.querySelectorAll('.btn-mat > button');
let pilihan = null;
let x;
let y;

console.log(mat);

for (let i=0; i<btn.length; i++) {
    btn[i].onclick = function () {
    console.log(btn[i].innerHTML);
    if (tampil.value=='0') {
        tampil.value = btn[i].innerHTML;

    }
    else {
        tampil.value += btn[i].innerHTML;
    }
    }
}

function operator (pil) {
    if(!(pil.includes('sama'))) {
        x = tampil.value;
        tampil.value = '0';
        pilihan = pil;
        console.log(x);
        console.log(pilihan);
    }
    else {
        y= tampil.value;
        tampil.value = kalkulator(pilihan);
        console.log(y);

    }
}

function kalkulator (pilihan) {
    
    if (pilihan != null) {
        switch (pilihan) {
            case 'tambah':
                hasil = parseInt(x)+ parseInt(y);
                break;
            case 'kurang':
                hasil = parseInt(x) - parseInt(y);
                break;
            case 'bagi':
                hasil = parseInt(x)/ parseInt(y);
                break;
            case 'kali':
                hasil = parseInt(x)* parseInt(y);
                break;
        
             
        }
        pilihan=null;
        console.log(pilihan);
    }

    return hasil;
}

mat[0].onclick = ()=>{
    tampil.value = '0';
}

mat[1].onclick= ()=> operator('tambah');
mat[2].onclick= ()=> operator('kurang');
mat[3].onclick= ()=> operator('kali');
mat[4].onclick= ()=> operator('bagi');
mat[5].onclick= ()=> operator('sama');