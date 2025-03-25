const ws = new WebSocket(`wss://${window.location.host}`);

ws.onmessage = (event) => {
    const mensajeDiv = document.getElementById('mensaje');
    if (mensajeDiv) {
        mensajeDiv.innerText = event.data;
    }
};

function enviarMensaje() {
    const input = document.getElementById('inputMensaje');
    ws.send(input.value);
    input.value = "";
}
