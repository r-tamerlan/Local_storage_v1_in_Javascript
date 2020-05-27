let ad = document.getElementById("name");
let email = document.getElementById("email");
let mesaj = document.getElementById("message");
let btn = document.querySelectorAll("button")[0];

btn.addEventListener("click",function(e){
    e.preventDefault();

    // let client = {
    //     "name": ad.value,
    //     "email": email.value
    // };

    // let clientMesaj =  {
    //     "content": mesaj.value
    // }

    localStorage.setItem("ad", JSON.stringify(ad.value));
    localStorage.setItem("email", JSON.stringify(email.value));
    localStorage.setItem("mesaj", JSON.stringify(mesaj.value));

    // localStorage.setItem("client", JSON.stringify(client));
    // localStorage.setItem("mesaj", JSON.stringify(clientMesaj));
})

// console.log(JSON.parse(localStorage.getItem("mesaj")));
console.log(JSON.parse(localStorage.getItem("mesaj")));

