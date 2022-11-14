//Rotas para redirecionamento das páginas
const Rotas = {
    "tabelas": "./tabelas.html",
    "chamados": "./chamados.html",
    "relatorios": "./relatorios.html"
 
}

//Função para redirecionamento das páginas
const Loader = {
    componentLoader: (componente, elemento) => {
        fetch(componente)
            .then((response) => {
                return response.text();
            })
            .then((html) => { 
                document.getElementById(elemento).innerHTML = html;
            });
    },
    homeLoader: () => {
        Loader.componentLoader("./tabelas.html", "main");
        
    },
    criarRota: (rota) => {
        Loader.componentLoader(Rotas[rota], "main");
    } 
}
 Loader.homeLoader(); 