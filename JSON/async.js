
//lebih disarankan daripada fetch
//untuk menccari response kayak 401,404,100,200 ada di HTTP response status code

//async -- await
async function tampil() {
    const url = "https://jsonplaceholder.typicode.com/users"

    const res = await fetch(url);
    const data = await res.json();

    // console.log(dat(a);

    let out = '<ol>';
    data.forEach( el=> {
        // console.log(el.name);
        out += `<li>${el.name}</li>`;
    })

    document.querySelector('#isi').innerHTML = out+='</ol>';
}

klik.onclick = tampil;