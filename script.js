    const valorRealInput = document.querySelector("#valor-real");
    const valorDolarInput = document.querySelector("#valor-dolar");

    const cotacaoDolar = 5.65;

    function atualizarConversao() {
      const valorTexto = valorRealInput.value.trim();

      // Se o campo estiver vazio, limpa o campo dólar
      if (valorTexto === "") {
        valorDolarInput.value = "";
        return;
      }

      const valorNumerico = parseFloat(valorTexto.replace(",", "."));

      // Se o valor for inválido, não faz nada
      if (isNaN(valorNumerico)) {
        valorDolarInput.value = "";
        return;
      }

      const valorConvertido = valorNumerico / cotacaoDolar;
      valorDolarInput.value = valorConvertido.toFixed(2);
    }

    // Executa a conversão sempre que o valor for alterado
    valorRealInput.addEventListener("input", atualizarConversao);