//Mostra os clientes
var chamados = [];
fetch("https://api-pim.vercel.app/api/client/form/get/all").then((data)=>{
    //console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    chamados=objectData;
    carregaTabela(objectData);
})

function carregaTabela(data){
    let tableData="";
    data.map((values)=>{
        if (values.tb_cliente.tb_pessoa != null){
            return tableData += ` 
            <tr>
                <td>${values.id}</td>
                <td>${values.tb_cliente.tb_pessoa.nm_pessoa}</td>
                <td>${values.status}</td>
                <td>${values.funcionario_resp != null ? values.funcionario_resp : "Não Atribuído"}</td>
                <td>
                <a class=" btn btn-md botao" href="#" onclick="carregaChamado(${values.tb_cliente.id})">Visualizar</a>
                </td>
            </tr>`;
        }
    });
    return document.getElementById("table_body").innerHTML=tableData;
}

function pesquisar(){
    let texto = document.getElementById("busca").value;
    let x;
    
    if(texto == "" || texto == null){
        x = chamados
    }
    else{
        x = chamados.filter(chamado => chamado.funcionario_resp?.includes(texto));
    }
    carregaTabela(x);
}