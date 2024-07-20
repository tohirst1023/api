    let users = document.querySelector(".users")

fetch ("https://jsonplaceholder.typicode.com/users")
.then(function(res){
    return res.json()
}).then(function(data) {
    for (let user of data) {
        let name = user.name;
        let email = user.email;
        let phone = user.phone;

        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")

        h1.textContent = name;
        h2.textContent = email;
        h3.textContent = phone;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);

        users.appendChild(div);
    }    
})