$("#btnPesquisar").click(function () {

    let termo = $("#pesquisa").val().toLowerCase();

    $("#lista").html("");

    ref.once("value", function (snapshot) {

        snapshot.forEach(function (item) {

            let chave = item.key;
            let funcionario = item.val();

            if (
                funcionario.nome.toLowerCase().includes(termo) ||
                funcionario.email.toLowerCase().includes(termo)
            ) {

                $("#lista").append(`
                    <tr>
                        <td>${funcionario.id}</td>
                        <td>${funcionario.nome}</td>
                        <td>${funcionario.email}</td>
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
