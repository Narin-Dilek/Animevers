function temaSec(temaAdi) {
  // Bu fonksiyon çalıştığında yapılacak işlemler
  console.log(temaAdi + " teması seçildi");
  
  // Seçilen temaya göre sayfayı yönlendirme
  if(temaAdi === "Akatsuki") {
    window.location.href = "Akatsuki.html";
  } else if(temaAdi === "Shinobi") {
    window.location.href = "Shinobi.html";
  } else {
    window.location.href = "Animevers.html";
  }
}
/*
function temaSec(temaAdi) {
  document.body.classList.add('fade-out');
  
  setTimeout(() => {
    window.location.href = temaAdi + '.html';
  }, 500); // CSS'deki transition süresiyle aynı olmalı
}*/
function temaSec(temaAdi) {
  anime({
    targets: 'body',
    opacity: 0,
    duration: 800,
    easing: 'easeInOutQuad',
    complete: function() {
      window.location.href = temaAdi + '.html';
    }
  });
}