var chamados = [];
fetch("https://pim-api.herokuapp.com/api/client/form/get/all").then((data)=>{
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
    let x=chamados.filter(chamado =>chamado.tb_pessoa.nm_pessoa.includes(texto));
    carregaTabela(x);
}