$(document).ready(function () {

    const ref = db.ref("categorias");

    $("#salvar").click(function () {

        let nome = $("#nome").val();
        let info = $("#info").val();

        if (nome === "" || info === "") {
            alert('Preencha todos os campos');
            return;
        }

        ref.push({ nome, info });

        limpar();
    });

    ref.on("value", dados_tabela => {
    $("#lista").empty();

    $("#lista").append(`
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th colspan="2">Opções</th>
        </tr>
        `);

    dados_tabela.forEach(registro => {
        let reg = registro.val();
        let id = registro.key;

        $("#lista").append(`
            <tr>
                <td>${id}</td>
                <td>${reg.nome}</td>
                <td>${reg.email}</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-outline-warning btn-sm">        
                        <i class="bi bi-pencil"></i>
                    </button>
                </td>
            </tr>
            `);
    });
});

    function limpar() {
        $("#nome").val("");
        $("#info").val("");
        $("#nome").focus();
    }

});
