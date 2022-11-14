function enviarEmail(){
    let corpo = "";
    let titulo = "";
    const enviaratendimento = document.getElementById("atendimento-tab-pane");
    const enviarfuncionario = document.getElementById("funcionario-tab-pane");
    const btnEnviar = document.getElementById("btnEnviar");
    const modalOK = new bootstrap.Modal(document.getElementById('modalOK'), {});
    const modalErro = new bootstrap.Modal(document.getElementById('modalErro'), {});
    document.getElementById('modalOK').addEventListener('hidden.bs.modal', function (event) {
        Loader.criarRota('relatorios');
    });
    btnEnviar.disabled=true;

    if(enviarfuncionario.classList.contains("active")) {
      titulo = "Relatório de Funcionário";
      corpo = `
      <div class="container my-3">
          <div class="card my-3">
              <div class="card-body borda-tabela">
                  <h3 class="text-center">Relatório de Funcionário</h3>
                  <div class="row mb-3">
                      <div class="col-12">
                          <label for="nome" class="form-label">Nome:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("fnome").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-12 col-md-4 col-12">
                          <label for="rg" class="form-label">N° do Documento:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("frg").value}">
                      </div>
                      <div class="col-sm-6 col-md-4 col-12">
                          <label for="nome" class="form-label">Identificação:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("fid").value}">
                      </div>
                      <div class="col-sm-6 col-md-4 col-12">
                          <label for="nome" class="form-label">Data de Nascimento:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("fdatanasc").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-6 col-12">
                          <label for="nome" class="form-label">Período:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("fperiodo").value}">
                      </div>
                      <div class="col-sm-6 col-12">
                          <label for="rg" class="form-label">Horário de Trabalho:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("fhorario").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-6 col-md-8 col-12">
                          <label for="nome" class="form-label">E-mail:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("femail").value}">
                      </div>
                      <div class="col-sm-6 col-md-4 col-12">
                          <label for="rg" class="form-label">Telefone:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("ftelefone").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-12">
                          <label for="observacoes" class="form-label">Observações</label>
                          <textarea class="form-control" placeholder="Escreva suas observações" disabled>${document.getElementById("fobservacoes").value}</textarea>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;
    }
    else if(enviaratendimento.classList.contains("active")) {
      titulo = "Relatório de Atendimento";
      corpo = `
      <div class="container my-3">
          <div class="card my-3">
              <div class="card-body borda-tabela">
                  <h3 class="text-center">Relatório de Atendimento</h3>
                  <div class="row mb-3">
                      <div class="col-12">
                          <label for="nome" class="form-label">Nome do funcionário:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("anome").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-12 col-md-4 col-12">
                          <label for="rg" class="form-label">N° do Documento:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("arg").value}">
                      </div>
                      <div class="col-sm-6 col-md-4 col-12">
                          <label for="nome" class="form-label">Identificação:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("aid").value}">
                      </div>
                      <div class="col-sm-6 col-md-4 col-12">
                          <label for="nome" class="form-label">Nome do Cliente:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("anomecliente").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-6 col-12">
                          <label for="nome" class="form-label">Horário de Atendimento:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("ahorario").value}">
                      </div>
                      <div class="col-sm-6 col-12">
                          <label for="rg" class="form-label">N: Ordem de Serviço</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("aos").value}">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col-sm-6 col-md-8 col-12">
                          <label for="nome" class="form-label">E-mail:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("aemail").value}">
                      </div>
                      <div class="col-sm-6 col-md-4 col-12">
                          <label for="rg" class="form-label">Telefone:</label>
                          <input type="text" class="form-control" disabled value="${document.getElementById("atelefone").value}">
                      </div>
                  </div>
              <div class="row mb-3">
                      <div class="col-12">
                          <label for="observacoes" class="form-label">Observações</label>
                          <textarea class="form-control" placeholder="Escreva suas observações" disabled>${document.getElementById("aobservacoes").value}</textarea>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;
    }
  
    if(corpo.length > 0) {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "digitalsafetylife.naoresponda@gmail.com",
        Password: "398CCE8636988B17D64ED80BD334E13C6356",
        To: 'safetylife.rh@gmail.com',
        From: "digitalsafetylife.naoresponda@gmail.com",
        Subject: titulo,
        Body: `
        <html>
          <head>
          <style>
          .borda-tabela{
            background-color:#c4defc !important;
         }
          </style>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
          </head>
          <body>
            ${corpo}
          </body>
        </html>
        `,
      })
      .then((message) => {
        console.log(message);
        modalOK.show();

      }).catch(error => {
        console.log(error);
        modalErro.show();
      });
    }
  }