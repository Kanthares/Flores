// Animación para las letras
anime.timeline({loop: false})
    .add({
        targets: '.greetings .text',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 100 * i // Ajusta el valor para controlar el tiempo de aparición de cada letra
    })
    // Animación para mostrar la descripción lentamente después
    .add({
        targets: '.description',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        offset: '+=500' // Esto añade un retraso de 500ms después de que las letras terminen de aparecer
    })
    // Animación para mostrar el botón lentamente después
    .add({
        targets: '.button',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
        offset: '+=200' // Esto añade un retraso de 200ms después de que la descripción aparezca
    });

