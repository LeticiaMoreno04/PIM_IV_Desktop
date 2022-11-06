const Rotas = {
    "tabelas": "./src/pages/tabelas.html",
    "chamados": "./src/pages/chamados.html",
    "relatorios": "./src/pages/relatorios.html",
 
}
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
        Loader.componentLoader("./src/pages/tabelas.html", "main");
        
    },
    criarRota: (rota) => {
        Loader.componentLoader(Rotas[rota], "main");
    }   
}
 Loader.homeLoader(); 