(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      song = $('birthday-song'),
      cardInside = $('card-inside'),
      toBackCover = $('to-back-cover'),
      backToWishes = $('back-to-wishes'),
      timer = null;

  // Deshabilitar la apertura hasta que termine la animación del pastel (6s)
  if (openB) {
    openB.disabled = true;
    setTimeout(function() {
      openB.disabled = false;
    }, 6000);
  }

  if (openB) {
    openB.addEventListener('click', function () {
      // Reproducir la canción al abrir
      if (song) {
        song.play().catch(function (error) {
          console.log("Audio play failed: ", error);
        });
      }
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  }

  if (toBackCover && cardInside) {
    toBackCover.addEventListener('click', function () {
      cardInside.classList.add('flipped');
      card.classList.add('show-back');
    });
  }

  if (backToWishes && cardInside) {
    backToWishes.addEventListener('click', function () {
      // La contraportada cierra la carta
      // Resetear estados inmediatamente al iniciar el cierre para evitar glitch visual
      cardInside.classList.remove('flipped');
      card.classList.remove('show-back');
      
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  }

  if (closeB) {
    closeB.addEventListener('click', function () {
      // Resetear estados inmediatamente al iniciar el cierre para evitar glitch visual
      if (cardInside) cardInside.classList.remove('flipped');
      card.classList.remove('show-back');
      
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer); // Corregido el typo original clearTimerout
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  }

}());
