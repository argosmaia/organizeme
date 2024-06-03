const validarEntradas = (receita, despesa) => {
    if (!receita || !despesa || isNaN(Number(receita)) || isNaN(Number(despesa))) {
        throw new Error("Por favor, insira valores válidos para receita e despesa.");
    }
    return true;
};

const calcularTotais = (receitaTotal, despesaTotal, novaReceita, novaDespesa) => {
    const totalReceita = receitaTotal + parseFloat(novaReceita);
    const totalDespesa = despesaTotal + parseFloat(novaDespesa);
    return { totalReceita, totalDespesa };
};

export { validarEntradas, calcularTotais };