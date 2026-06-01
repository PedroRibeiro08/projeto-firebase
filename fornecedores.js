$("#btnPesquisar").click(function () {

    let termo = $("#pesquisa").val().toLowerCase();

    $("#lista").html("");

    ref.once("value", function (snapshot) {

        snapshot.forEach(function (item) {

            let chave = item.key;
            let fornecedor = item.val();

            if (
                fornecedor.nome.toLowerCase().includes(termo) ||
                fornecedor.email.toLowerCase().includes(termo)
            ) {

                $("#lista").append(`
                    <tr>
                        <td>${fornecedor.nome}</td>
                        <td>${fornecedor.cnpj}</td>
                        <td>${fornecedor.email}</td>
                        <td>${fornecedor.estado}</td>
                        <td>
                            <button class="btn btn-danger excluir"
                                data-id="${chave}">
                                Excluir
                            </button>
                        </td>
                    </tr>
                `);
            }

        });

    });

});
