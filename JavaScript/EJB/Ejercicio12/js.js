function juegoPiedraPapelYTijera(){
    let puntosJugador = 0;
            let puntosMaquina = 0;

            for (let i = 0; i < 3; i++) {
                let eleccionJugador = prompt("Elige una opción (P para Piedra, Pa para Papel, T para Tijera):");
                if (!eleccionJugador) {
                    alert('FIN del juego');
                    return;
                }
                let eleccionOrdenador = ['P', 'Pa', 'T'][Math.floor(Math.random() * 3)];
                alert(`Ordenador elige: ${eleccionOrdenador}`);

                let ganador;
                if (eleccionJugador.toUpperCase() === eleccionOrdenador) {
                    ganador = 'Empate';
                } else if (
                    (eleccionJugador.toUpperCase() === 'P' && eleccionOrdenador === 'T') ||
                    (eleccionJugador.toUpperCase() === 'Pa' && eleccionOrdenador === 'P') ||
                    (eleccionJugador.toUpperCase() === 'T' && eleccionOrdenador === 'Pa')
                ) {
                    ganador = 'Usuario';
                    puntosJugador++;
                } else {
                    ganador = 'Ordenador';
                    puntosMaquina++;
                }
                alert(`Ganador de la ronda: ${ganador}`);

                if (puntosJugador === 2 || puntosMaquina === 2) {
                    break;
                }
            }

            if (puntosJugador > puntosMaquina) {
                alert('¡El usuario gana el mejor de tres!');
            } else if (puntosMaquina > puntosJugador) {
                alert('¡El ordenador gana el mejor de tres!');
            } else {
                alert('¡Empate!');
            }
}