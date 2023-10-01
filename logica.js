document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem");
    const voltarbuttom = document.getElementById("voltarbuttom");        

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const valorDigitado = parseInt(document.getElementById("flexões").value);

        if (!isNaN(valorDigitado)) {
            let msg = "";
            if (valorDigitado <=10) {
            msg = "Zé Punheta";
            } else if (valorDigitado>10 && valorDigitado<=20) {
                msg = "Bob Esponja";
            } else if (valorDigitado>20 && valorDigitado<=30) {
                msg = "Iniciante";
            } else if (valorDigitado>30 && valorDigitado<=40) {
                msg = "Frango Graúdo";
            } else if (valorDigitado>40 && valorDigitado<=50) {
                msg = "Amador";
            } else if (valorDigitado>50 && valorDigitado<=60) {
                msg = "Tá potente";
            } else if (valorDigitado>60 && valorDigitado<=70) {
                msg = "Viking";
            } else if (valorDigitado>70 && valorDigitado<=80) {
                msg = "Sigma";
            } else if (valorDigitado>80 && valorDigitado<=90) {
                msg = "Gorila das Montanhas";
            } else {
                msg = "Lenda";
            }
            mensagem.textContent = msg;
            mensagem.style.display = "block";
            voltarbuttom.style.display = "block";
            formulario.style.display = "none";            
        } else {
            mensagem.textContent = "Digite um número válido.";
            mensagem.style.display = "block";
            voltarbuttom.style.display = "block";
            formulario.style.display = "none";
        }
    });
    voltarbuttom.addEventListener("click", function() {
        location.reload(); 
    });
});