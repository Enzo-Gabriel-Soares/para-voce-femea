function enviarMensagem() {
    const opcoes = document.getElementsByName("opcao");
    let escolha = "";

    for (let opcao of opcoes) {
        if (opcao.checked) {
            escolha = opcao.parentElement.innerText;
            break;
        }
    }

    if (escolha === "") {
        alert("Escolhe uma opção primeiro 😒");
        return;
    }

    const mensagem = `Oi 😄 eu escolhi: ${escolha}`;

    // copia automaticamente
    navigator.clipboard.writeText(mensagem);

    alert("Mensagem copiada! Agora é só colar no Instagram!!!");

    // abre seu perfil
    window.open("https://www.instagram.com/srsxzr._/", "_blank");
}