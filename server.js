const WebSocket = require('ws');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const server = express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');
    
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
