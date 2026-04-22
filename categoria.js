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

    function limpar() {
        $("#nome").val("");
        $("#info").val("");
        $("#nome").focus();
    }

});