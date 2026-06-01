$("#btnPesquisar").click(function () {

    let termo = $("#pesquisa").val().toLowerCase();

    $("#lista").html("");

    ref.once("value", function (snapshot) {

        snapshot.forEach(function (item) {

            let chave = item.key;
            let categoria = item.val();

            if (
                categoria.nome.toLowerCase().includes(termo) ||
                categoria.info.toLowerCase().includes(termo)
            ) {

                $("#lista").append(`
                    <tr>
                        <td>${categoria.nome}</td>
                        <td>${categoria.info}</td>
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
