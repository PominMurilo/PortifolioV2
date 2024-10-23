function calcularPeriodo() {
    // Data de início da faculdade
    const dataInicio = new Date("2023-01-01"); // Substitua pela data real de início
    const dataAtual = new Date();

    // Calcula a diferença de anos e meses
    let anos = dataAtual.getFullYear() - dataInicio.getFullYear();
    let meses = dataAtual.getMonth() - dataInicio.getMonth();

    // Ajusta a contagem caso o mês atual seja anterior ao mês de início
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Total de meses desde o início da faculdade
    const totalMeses = anos * 12 + meses;

    // Calcula o período atual (dividindo por 6 meses por período)
    const periodoAtual = Math.ceil(totalMeses / 6); // Arredonda para cima

    // Atualiza o HTML com o período atual
    document.getElementById("periodo-atual").textContent = periodoAtual;
}

// Executa a função quando a página carrega
window.onload = calcularPeriodo;