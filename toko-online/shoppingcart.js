let tblmenu = [
    {
     idmenu:1,
     idkategori:1,
     menu:"Apel Manalagi" , 
     gambar:"apel.jpg", 
     harga:3000
    },
    {
     idmenu:2,
     idkategori:1,
     menu:"Pisang Raja" , 
     gambar:"pisang.jpg", 
     harga:5000
    },
    {
     idmenu:3,
     idkategori:2,
     menu:"Nasi Padang" , 
     gambar:"nasipadang.jpeg", 
     harga:20000
    },
    {
     idmenu:4,
     idkategori:2,
     menu:"Nasi Ayam" , 
     gambar:"nasiayam.jpg", 
     harga:15000
    },
    {
     idmenu:5,
     idkategori:3,
     menu:"Es Teh" , 
     gambar:"esteh.jpg", 
     harga:7000
    },
    {
     idmenu:6,
     idkategori:3,
     menu:"Es Jeruk" , 
     gambar:"esjeruk.jpeg", 
     harga:7000
    },

]

//map berfungsi menduplikasi sebuah array
//map identik dengan return
let tampil = tblmenu.map((kolom)=> {
    return `<div class="produk-content">
    <div class="image">
        <img src="gambar/${kolom.gambar}" alt="">
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="deskripsi">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vitae!
        </p>
    </div>
    <div class="harga">
        <h2>
           Rp.${kolom.harga}
        </h2>
    </div>
    <div class="btn-beli">
            <button data-idmenu="${kolom.idmenu}">Beli</button>
    </div>
</div>`;
})

let isi = document.querySelector('.produk');
isi.innerHTML= tampil;

let chart = [];
let btnbeli = document.querySelectorAll("button");
btnbeli.forEach(element => {
    element.onclick = ()=> {
        // console.log(element.dataset["idmenu"]);
                //cara gwejh lebih simpel
                    // let data = tblmenu[element.dataset["idmenu"]-1];
                    // chart.push(data);
                    // console.log(chart);

                //cara pak isa
                tblmenu.filter((el)=> {
                    if(el.idmenu==element.dataset["idmenu"]) {
                        chart.push(el);
                        console.log(chart);
                    }

                })

    }
});

