function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const entrar = document.getElementById("entrar");
    let modalAviso = new bootstrap.Modal(document.getElementById('modalAviso'), {});
    
    if (email.length > 0 && password.length > 0) {
        entrar.disabled=true;
        connection.post("/public/login", { email:email, senha: password})
        .then(res => {
            window.location.href = "./src/pages/main.html";
            //console.log(res);
            entrar.disabled=false;
        })

        .catch(err =>{
            modalAviso.show();
            entrar.disabled=false;
        });
    }
    else {
        modalAviso.show();
    }
}