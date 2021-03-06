// Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../service-worker.js')
        .then(reg => {
            console.log("Service worker esta listo!");
        });
}
else {
    console.log("Service worker no soportado.");
}


// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
    document.querySelector('body').classList.add('alert-danger');
    var main = document.querySelector('.main > div');
    window.location.href = "offline.html";
});

window.addEventListener('online', event => {
    document.querySelector('body').classList.remove('alert-danger');
    location.href = 'index.html';
});

// A veces este evento falla, ojo!
// Sirve para saber si el navegador esta offline, cuando entramos offline. 
// Es decir, no se disparo los eventos de arriba aun, y necesito conocer el estado.
// 

if (!navigator.onLine) {
  document.querySelector('body').classList.add('alert-danger');
  main.innerHTML = "Lá aplicacion esta OFF-ONLINE, por favor conecte de nuevo su internet!."
}
