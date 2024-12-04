let correctas = [1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // Respuestas correctas para las 30 preguntas
let todasLasPreguntas = []; // Guardará las 30 secciones HTML
let seleccionadas = []; // Índices de las 5 preguntas seleccionadas
let opcion_elegida = [];
let cantidad_aciertos = 0;

// Función para inicializar las preguntas (cargar las 30 secciones en una lista)
function inicializarPreguntas() {
    for (let i = 0; i < 30; i++) {
        todasLasPreguntas.push(document.getElementById(`p${i}`));
    }
}

// Función para seleccionar 5 preguntas aleatorias y mostrarlas
function seleccionarPreguntasAleatorias() {
    seleccionadas = []; // Vaciar la selección
    opcion_elegida = []; // Vaciar respuestas elegidas
    cantidad_aciertos = 0;

    // Ocultar todas las preguntas
    todasLasPreguntas.forEach((pregunta) => (pregunta.style.display = "none"));

    // Seleccionar 5 índices únicos
    while (seleccionadas.length < 5) {
        let aleatorio = Math.floor(Math.random() * 30); // Índice entre 0 y 29
        if (!seleccionadas.includes(aleatorio)) {
            seleccionadas.push(aleatorio);
        }
    }

    // Mostrar solo las preguntas seleccionadas
    seleccionadas.forEach((indice) => {
        todasLasPreguntas[indice].style.display = "block";
    });
}

// Función para registrar la respuesta seleccionada
function respuesta(num_pregunta, seleccionada) {
    opcion_elegida[num_pregunta] = seleccionada.value;
}

// Función para evaluar las respuestas
function terminar() {
    cantidad_aciertos = 0;

    // Evaluar solo las preguntas seleccionadas
    seleccionadas.forEach((indice) => {
        if (correctas[indice] == opcion_elegida[indice]) {
            cantidad_aciertos++;
        }
    });

    document.getElementById("resultado").innerHTML = cantidad_aciertos;

    if (cantidad_aciertos === 5) {
        document.getElementById("terminar").innerHTML = "Excelente";
    } else if (cantidad_aciertos >= 4) {
        document.getElementById("terminar").innerHTML = "Muy Bueno";
    } else if (cantidad_aciertos >= 3) {
        document.getElementById("terminar").innerHTML = "Bueno";
    } else if (cantidad_aciertos >= 2) {
        document.getElementById("terminar").innerHTML = "Regular";
    } else {
        document.getElementById("terminar").innerHTML = "Malo";
    }
}

// Función para reiniciar con nuevas preguntas
function reintentar() {
    alert('Se reiniciara el quiz')
    seleccionarPreguntasAleatorias();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("terminar").innerHTML = "";
}

// Inicializar preguntas al cargar el documento
window.onload = function () {
    inicializarPreguntas();
    seleccionarPreguntasAleatorias();
};

function regresar(){
window.open('juegos.html')
    
}
