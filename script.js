function calcularComision() {
    // Obtener los valores de los inputs
    const tipoDeProducto = parseFloat(document.getElementById('tipoDeProducto').value) || 0;
    const consumo = parseFloat(document.getElementById('consumo').value) || 0;
    const feeEnergia = parseFloat(document.getElementById('feeEnergia').value) || 0;
    const sumPotencias = parseFloat(document.getElementById('sumatoriaPotencias').value) || 0;
    const feePotencia = parseFloat(document.getElementById('feePotencia').value) || 0;

    // Convertir fee de energía de €/MWh a €/kWh
    let resultado;
    if (tipoDeProducto === 12) {
        resultado = (((consumo / 1000) * feeEnergia + (sumPotencias * feePotencia))) * 0.70;
    } else if (tipoDeProducto === 24) {
        resultado = ((((consumo / 1000) * feeEnergia + (sumPotencias * feePotencia))) * 2) * 0.70;
    } else if (tipoDeProducto === 36) {
        resultado = ((((consumo / 1000) * feeEnergia + (sumPotencias * feePotencia))) * 3) * 0.70;
    }

    // Actualizar el resultado en la página
    document.getElementById('result').textContent = resultado.toFixed(2) + " €";
}
