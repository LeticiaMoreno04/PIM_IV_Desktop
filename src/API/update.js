function atualizarChamado(id) {
    const data={
        nm_pessoa: document.getElementById("nome").value,
        num_rg: document.getElementById("rg").value,
        num_cpf_cnpj: document.getElementById("cpf").value,
        genero: document.querySelector('input[name="genero"]:checked').value,
        num_contato: document.getElementById("numero_de_contato").value,
        estado_civil: document.getElementById("estado_civil").value,
        nacionalidade: document.getElementById("nacionalidade").value,
        profissao: document.getElementById("trabalho").value,
        reside_brasil: Boolean(document.querySelector('input[name="reside"]:checked').value),
        dt_nascimento: document.getElementById("data_de_nascimento").value,
        hobbies: document.getElementById("hobbies").value,
        fuma: Boolean(document.querySelector('input[name="fuma"]:checked').value),
        registro_conducao: document.getElementById("registro_conducao").value,
        faixa_renda: parseFloat(document.getElementById("faixa_mensal").value),
        risco_profissao: document.querySelector('input[name="risco_trabalho"]:checked').value,
        politicamente_exposto: Boolean(document.querySelector('input[name="politico"]:checked').value),
        status: document.getElementById("status").value,
        
    }
    fetch(`https://pim-api.herokuapp.com/api/client/pessoa/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

}