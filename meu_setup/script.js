function testarSetup() {

    // Cria um som
    let som = new AudioContext();
    let oscilador = som.createOscillator();
    
    oscilador.connect(som.destination);
    
    oscilador.start();
    
    setTimeout(function() {
        oscilador.stop();
    }, 500);
    
    // Mostra a mensagem
    document.getElementById("mensagem").innerHTML =
        "✓ Setup iniciado com sucesso!";
    
    }