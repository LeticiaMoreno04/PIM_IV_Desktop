function carregaChamado(id){
    fetch(`https://pim-api.herokuapp.com/api/client/form/unity/${id}`).then((data)=>{
        //console.log(data);
        return data.json();
    }).then((objectData)=>{
        let chamadoData="";
        console.log(document.getElementById("chamado"));
            chamadoData += `
            <div class="row mb-3">
            <div class="col-4">
                <label for="nome" class="form-label">Nome:</label>
                <input type="text" class="form-control" id="nome" value="${objectData.tb_pessoa.nm_pessoa}" >
            </div>
            <div class="col-4">
                <label for="rg" class="form-label">RG:</label>
                <input type="text" class="form-control" id="rg" value="${objectData.tb_pessoa.num_rg}" >
            </div>
            <div class="col-4">
                <label for="cpf" class="form-label">CPF:</label>
                <input type="text" class="form-control" id="cpf" value="${objectData.tb_pessoa.num_cpf_cnpj}" >
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4">
                <label for="genero" class="form-label">Gênero</label>
                <div class="row-fluid">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="genero" id="masc" value="Masc" ${objectData.tb_pessoa.genero.at(0)=="M"?"checked":""}>
                        <label class="form-check-label" for="masc">Masculino</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="genero" id="fem" value="Fem" ${objectData.tb_pessoa.genero.at(0)=="F"?"checked":""}>
                        <label class="form-check-label" for="fem">Feminino</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="genero" id="outros" value="Outros" ${objectData.tb_pessoa.genero.at(0)=="O"?"checked":""}>
                        <label class="form-check-label" for="outros">Outros</label>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <label for="numero_de_contato" class="form-label">Número de contato:</label>
                <input type="text" class="form-control" id="numero_de_contato" value="${objectData.tb_pessoa.num_contato}" >
            </div>
            <div class="col-4">
                <label for="estado_civil" class="form-label">Estado Civil:</label>
                <input type="text" class="form-control" id="estado_civil" value="${objectData.tb_pessoa.estado_civil}" >
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4">
                <label for="nacionalidade" class="form-label">Nacionalidade:</label>
                <input type="text" class="form-control" id="nacionalidade" value="${objectData.tb_pessoa.nacionalidade}" >
            </div>
            <div class="col-4">
                <label for="trabalho" class="form-label">Trabalho:</label>
                <input type="text" class="form-control" id="trabalho" value="${objectData.profissao}" >
            </div>
            <div class="col-4">
                <label for="reside" class="form-label">Reside no Brasil?</label>
                <div class="row-fluid">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="reside" id="sim" value="true" ${objectData.tb_pessoa.reside_brasil ==true?"checked":""}>
                        <label class="form-check-label" for="sim">Sim</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="reside" id="nao" value="false" ${objectData.tb_pessoa.reside_brasil ==false?"checked":""}>
                        <label class="form-check-label" for="nao">Não</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4">
                <label for="data_de_nascimento" class="form-label">Data de Nascimento:</label>
                <input type="text" class="form-control" id="data_de_nascimento" value="${objectData.tb_pessoa.dt_nascimento}" >
            </div>
            <div class="col-4">
                <label for="hobbies" class="form-label">Hobbies:</label>
                <input type="text" class="form-control" id="hobbies" value="${objectData.hobbies}" >
            </div>
            <div class="col-4">
                <label for="fuma" class="form-label">Fuma?</label>
                <div class="row-fluid">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="fuma" id="sim" value="true" ${objectData.fuma ==true?"checked":""}>
                        <label class="form-check-label" for="sim">Sim</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="fuma" id="nao" value="false" ${objectData.fuma ==false?"checked":""}>
                        <label class="form-check-label" for="nao">Não</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4">
                <label for="registro_conducao" class="form-label">Registro de Condução:</label>
                <input type="text" class="form-control" id="registro_conducao" value="${objectData.registro_conducao}" >
            </div>
            <div class="col-4">
                <label for="faixa_mensal" class="form-label">Faixa de Renda Mensal:</label>
                <input type="text" class="form-control" id="faixa_mensal" value="${objectData.faixa_renda}" >
            </div>
            <div class="col-4">
                <label for="politico" class="form-label">Politicamente exposto?</label>
                <div class="row-fluid">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="politico" id="sim" value="true" ${objectData.politicamente_exposto ==true?"checked":""}>
                        <label class="form-check-label" for="sim">Sim</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="politico" id="nao" value="false" ${objectData.politicamente_exposto ==false?"checked":""}>
                        <label class="form-check-label" for="nao">Não</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-4">
                <label for="risco_trabalho" class="form-label">Risco de Trabalho:</label>
                <div class="row-fluid">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="risco_trabalho" id="extremo" value="EXTREMO" ${objectData.risco_profissao.at(0)=="E"?"checked":""}>
                        <label class="form-check-label" for="extremo">Extremo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="risco_trabalho" id="alto" value="ALTO" ${objectData.risco_profissao.at(0)=="A"?"checked":""}>
                        <label class="form-check-label" for="alto">Alto</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="risco_trabalho" id="medio" value="MEDIO" ${objectData.risco_profissao.at(0)=="M"?"checked":""}>
                        <label class="form-check-label" for="medio">Médio</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="risco_trabalho" id="baixo" value="BAIXO" ${objectData.risco_profissao.at(0)=="B"?"checked":""}>
                        <label class="form-check-label" for="baixo">Baixo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="risco_trabalho" id="nulo" value="NULO" ${objectData.risco_profissao.at(0)=="N"?"checked":""}>
                        <label class="form-check-label" for="nulo">Nulo</label>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <label for="status" class="form-label">Status</label>
                <select class="form-select" id="status">
                  <option value="PENDENTE">Pendente</option>
                  <option value="EM ANDAMENTO">Em Andamento</option>
                  <option value="CONCLUÍDO">Concluído</option>
                </select>
              </div>
          </div>              
         <div class="text-center">
            <input type="button" class="btn btn-lg botao" onclick="atualizarChamado(${objectData.tb_pessoa.id})" id="btnEnviar" type="button"value="Enviar"></input>
        </div>
            `;
            Loader.criarRota('chamados');
            setTimeout(() => {
                document.getElementById("chamado").innerHTML=chamadoData;
               }, 1500)
    })
}