let teclaQLiberada = false; // Começa bloqueada
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'q') {
        if (teclaQLiberada) {
            executarAnimacao();
        } else {
            console.log("A tecla Q ainda está bloqueada!");
        }
    }
});
