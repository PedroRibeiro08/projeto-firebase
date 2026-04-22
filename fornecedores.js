$(document).ready(function () {

    const ref = db.ref("fornecedores");

    $("#salvar").click(function () {

        let nome = $("#nome").val();
        let cnpj = $("#cnpj").val();
        let email = $("#email").val();
        let estado = $("input[name='estado']:checked").val();

        if (nome === "" || cnpj === "" || email === "" || !estado) {
            alert('Preencha todos os campos');
            return;
        }

        ref.push({ nome, cnpj, email, estado });

        limpar();
    });

    function limpar() {
        $("#nome").val("");
        $("#cnpj").val("");
        $("#email").val("");
        $("input[name='estado']").prop("checked", false);
        $("#nome").focus();
    }

});