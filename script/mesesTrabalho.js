function calcularMeses() {
    // Data de início do trabalho
    const dataInicio = new Date("2024-06-03"); // Substitua pela data real de início
    const dataAtual = new Date();

    // Calcula a diferença de anos e meses
    let anos = dataAtual.getFullYear() - dataInicio.getFullYear();
    let meses = dataAtual.getMonth() - dataInicio.getMonth();

    // Ajusta a contagem caso o mês atual seja anterior ao mês de início
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Total de meses desde o início do trabalho
    const totalMeses = anos * 12 + meses;

    // Atualiza o HTML com o total de meses
    document.getElementById("meses-trabalho").textContent = totalMeses;
}

// Executa a função quando a página carrega
window.onload = calcularMeses;