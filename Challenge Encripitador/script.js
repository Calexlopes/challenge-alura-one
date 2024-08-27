// Função para criptografar o texto
function btnEncriptar() {
    let texto = document.querySelector('.digite_texto').value;
    let textoCriptografado = criptografar(texto);
    mostrarResultado(textoCriptografado);
}

// Função para descriptografar o texto
function btnDesencriptar() {
    let texto = document.querySelector('.digite_texto').value;
    let textoDescriptografado = descriptografar(texto);
    mostrarResultado(textoDescriptografado);
}

// Função para limpar os campos
function btnReset() {
    document.querySelector('.digite_texto').value = '';
    document.querySelector('.mensagem').textContent = 'Nenhuma mensagem encontrada';
    document.querySelector('.btn-copiar').classList.add('oculto');
}

// Função para copiar o texto para a área de transferência
function btnCopiar() {
    let textoCopiado = document.querySelector('.mensagem').textContent;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert('Texto copiado com sucesso!');
    }, function(err) {
        alert('Erro ao copiar texto: ', err);
    });
}

// Função de criptografia
function criptografar(texto) {
    let textoCriptografado = texto.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');
    return textoCriptografado;
}

// Função de descriptografia
function descriptografar(texto) {
    let textoDescriptografado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    return textoDescriptografado;
}

// Função para mostrar o resultado na interface
function mostrarResultado(texto) {
    let mensagem = document.querySelector('.mensagem');
    mensagem.textContent = texto;

    let btnCopiar = document.querySelector('.btn-copiar');
    if (texto) {
        btnCopiar.classList.remove('oculto');
    } else {
        btnCopiar.classList.add('oculto');
    }
}

// Restringir a digitação de letras maiúsculas e caracteres especiais
document.querySelector('.digite_texto').addEventListener('input', function(event) {
    // Remove caracteres que não sejam letras minúsculas ou espaços
    const valorFiltrado = event.target.value.replace(/[^a-z\s]/g, '');
    
    // Atualiza o valor do input com o valor filtrado
    event.target.value = valorFiltrado;
});

document.querySelector('.digite_texto').addEventListener('keypress', function(event) {
    const charCode = event.charCode || event.keyCode;
    const charStr = String.fromCharCode(charCode);
    
    // Impede a digitação de letras maiúsculas ou caracteres especiais
    if (!/^[a-z\s]+$/.test(charStr)) {
        event.preventDefault();
    }
});
