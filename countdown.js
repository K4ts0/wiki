// Seleciona o elemento onde a contagem será exibida
const countdownElement = document.getElementById("countdown");

// Data para o fim do ano
const endOfYear = new Date(`December 31, ${new Date().getFullYear()} 23:59:59`).getTime();

// Atualiza a contagem a cada segundo
const interval = setInterval(() => {
    const now = new Date().getTime(); // Data e hora atual
    const timeLeft = endOfYear - now; // Diferença entre as datas

    if (timeLeft < 0) {
        // Quando o tempo acabar
        clearInterval(interval);
        countdownElement.innerHTML = "Feliz Ano Novo!";
        return;
    }

    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualiza o conteúdo do elemento
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
