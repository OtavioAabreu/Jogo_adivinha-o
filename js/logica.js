document.addEventListener("DOMContentLoaded", function() {
    var numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    console.log("Número aleatório: " + numeroAleatorio);

    var palpiteInput = document.getElementById('palpiteInput');
    var enviarPalpiteBotao = document.getElementById('enviarPalpite');
    var tentativasRestantesDiv = document.getElementById("acertivasRestantes");
    
    var tentativasMaximas = 10;
    var tentativasFeitas = 0;
    
    tentativasRestantesDiv.innerHTML = `Número de <br>  Tentativas: ${tentativasMaximas - tentativasFeitas}`;

    enviarPalpiteBotao.addEventListener("click", function() {
        verificarPalpite();
    });

    palpiteInput.addEventListener("keyup", function(event) {

        if (event.keyCode === 13) {
            verificarPalpite();
        }
    });
   
    function verificarPalpite() {
        var palpiteUsuario = parseInt(palpiteInput.value);

        if (isNaN(palpiteUsuario)) {
            pega.innerHTML = `<b>Error; Campo vazio, insira um valor válido.</b>`;
        } else {
            tentativasFeitas++;

            tentativasRestantesDiv.innerHTML = ` Número de <br>  Tentativas: ${tentativasMaximas - tentativasFeitas}`;

            if (palpiteUsuario === numeroAleatorio) {
                window.location.href = "win.html";
            } else if (palpiteUsuario < numeroAleatorio) {
                pega.innerHTML = `<b>Tente um número maior.</b>`;
            } else {
                pega.innerHTML = `<b>Tente um número menor.</b>`;
            }

            // Verifica se o número máximo de tentativas foi atingido
            if (tentativasFeitas >= tentativasMaximas) {
                window.location.href = "lose.html";
            }

            palpiteInput.value = "";
        }
    }
});

// -------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log("Número aleatório: " + numeroAleatorio);

    var palpiteInput = document.getElementById('tentativaInput');
    var enviarPalpiteBotao = document.getElementById('enviarTentativa');
    var pega = document.getElementById("ogl");
    var tentativasRestantesDiv = document.getElementById("tentativasRestantes");
    
    var tentativasMaximas = 7;
    var tentativasFeitas = 0;

    
    tentativasRestantesDiv.innerHTML = `Número de <br>  Tentativas: ${tentativasMaximas - tentativasFeitas}`;

    enviarPalpiteBotao.addEventListener("click", function() {
        verificarPalpite();
    });

    palpiteInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            verificarPalpite();
        }
    });

    function verificarPalpite() {
        var palpiteUsuario = parseInt(palpiteInput.value);

        if (isNaN(palpiteUsuario)) {
            pega.innerHTML = `<b>Error; Campo vazio, insira um valor válido.</b>`;
        } else {
            tentativasFeitas++;

            tentativasRestantesDiv.innerHTML = ` Número de <br>  Tentativas: ${tentativasMaximas - tentativasFeitas}`;

            if (palpiteUsuario === numeroAleatorio) {
                window.location.href = "win.html";
            } else if (palpiteUsuario < numeroAleatorio) {
                pega.innerHTML = `<b>Tente um número maior.</b>`;
            } else {
                pega.innerHTML = `<b>Tente um número menor.</b>`;
            }

            // Verifica se o número máximo de tentativas foi atingido
            if (tentativasFeitas >= tentativasMaximas) {
                window.location.href = "lose.html";
            }

            palpiteInput.value = "";
        }
    }
});



//  ---------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    var numeroAleatorio = Math.floor(Math.random() * 200) + 1;
    console.log("Número aleatório: " + numeroAleatorio);

    var palpiteInput = document.getElementById('abcInput');
    var enviarPalpiteBotao = document.getElementById('enviarAbc');
    var tentativasRestantesDiv = document.getElementById("mentivasRestantes");
    
    var tentativasMaximas = 4;
    var tentativasFeitas = 0;

    
    tentativasRestantesDiv.innerHTML = `Número de <br>  Tentativas: ${tentativasMaximas - tentativasFeitas}`;

    
    enviarPalpiteBotao.addEventListener("click", function() {
        verificarPalpite();
    });

    palpiteInput.addEventListener("keyup", function(event) {

        if (event.keyCode === 13) {
            verificarPalpite();
        }
    });
   
    function verificarPalpite() {
        var palpiteUsuario = parseInt(palpiteInput.value);

        if (isNaN(palpiteUsuario)) {
            pega.innerHTML = `<b>Error; Campo vazio, insira um valor válido.</b>`;
        } else {
            tentativasFeitas++;

            tentativasRestantesDiv.innerHTML = ` Número de <br>  Tentativas: ${tentativasMaximas - tentativasFeitas}`;

            if (palpiteUsuario === numeroAleatorio) {
                window.location.href = "win.html";
            } else if (palpiteUsuario < numeroAleatorio) {
                pega.innerHTML = `<b>Tente um número maior.</b>`;
            } else {
                pega.innerHTML = `<b>Tente um número menor.</b>`;
            }

            // Verifica se o número máximo de tentativas foi atingido
            if (tentativasFeitas >= tentativasMaximas) {
                window.location.href = "lose.html";
            }

            palpiteInput.value = "";
        }
    }
});



function guiaPagina() {
    window.location.href = "mobile3.html";
}

let selectedButton = null;

function selectButton(buttonNumber) {

document.querySelectorAll("#buttonContainer button").forEach((button) => {
   button.classList.remove("selected");
});

const button = document.getElementById(`button${buttonNumber}`);
button.classList.add("selected");

selectedButton = buttonNumber;

document.getElementById("startButton").disabled = false;
}

function start() {
if (selectedButton === 1) {
   window.location.href = "levelEasy.html";
} else if (selectedButton === 2) {
   window.location.href = "levelMedium.html";
} else if (selectedButton === 3) {
   window.location.href = "levelHard.html";
}
}

function retorna(){
    window.location.href = "mobile3.html"
}