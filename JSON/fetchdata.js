let id = 1;


// klik.onclick = ()=> {
//     let  url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    
//     fetch(url) 
//     .then(res=> res.json())
//     .then(json=> 
//         //untuk array
//         // json.forEach(element => {
//         //     console.log(element.id+". "+element.title);
//         // })

//         console.log(json.id+". "+json.title)
//     )

//     id++;
// }

    let  url = `https://jsonplaceholder.typicode.com/todos`;

klik.onclick = () => {
    
    fetch(url) 
    .then(res=> res.json())
    .then(json=> {
            let list = `<ul>`
            json.forEach(element => {
                list+=`<li>${element.id}. ${element.title}</li>`
            })
            document.querySelector('#isi').innerHTML= list+='</ul>';
        })

    
   
}