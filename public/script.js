const socket = new WebSocket("ws://localhost:3000");

const imagenes = [
    "https://i.ibb.co/4nY9ppRJ/2S.png",
    "https://i.ibb.co/7drV2D6S/3S.png",
    "https://i.ibb.co/xtYCwM2S/4S.png",
    "https://i.ibb.co/dsQJR3sN/5S.png",
    "https://i.ibb.co/zWhHY7Xm/7S.png",
    "https://i.ibb.co/PsxPJp7Q/6S.png",
    "https://i.ibb.co/GvCL4Kqf/8S.png",
    "https://i.ibb.co/XZJTmCWy/9S.png",
    "https://i.ibb.co/5XpGzJzT/10S.png",
    "https://i.ibb.co/tPTBw2N5/AS.png",
    "https://i.ibb.co/ks6Kt1J5/KS.png",
    "https://i.ibb.co/4R38F52k/JS.png",
    "https://i.ibb.co/1GkSKNmQ/QS.png",
    "https://i.ibb.co/Wvy5SSbF/1OH.png",
    "https://i.ibb.co/FkxWMMXz/2C.png",
    "https://i.ibb.co/LX4PTBJj/2D.png",
    "https://i.ibb.co/Nc9trT9/3D.png",
    "https://i.ibb.co/CdygdkS/4C.png",
    "https://i.ibb.co/Z1t77mCD/3C.png",
    "https://i.ibb.co/67k2SKVx/4D.png",
    "https://i.ibb.co/tM9qbLWn/5C.png",
    "https://i.ibb.co/xKFSrBCx/5D.png",
    "https://i.ibb.co/TDgrDxxb/6C.png",
    "https://i.ibb.co/7NQ54NBV/6D.png",
    "https://i.ibb.co/7dCLTD7X/7C.png",
    "https://i.ibb.co/XrKbj12D/6H.png",
    "https://i.ibb.co/GfzxJWrB/7D.png",
    "https://i.ibb.co/zWpyxM29/7H.png",
    "https://i.ibb.co/WWy5Hw5f/8C.png",
    "https://i.ibb.co/VbbFFbW/8D.png",
    "https://i.ibb.co/MkFfPBkk/8H.png",
    "https://i.ibb.co/JjyZN5Kn/9C.png",
    "https://i.ibb.co/ynqCdWJP/9D.png",
    "https://i.ibb.co/v4ZSNHds/9H.png",
    "https://i.ibb.co/chn2tSZq/10C.png",
    "https://i.ibb.co/zWg4zLqP/10D.png",
    "https://i.ibb.co/7dQj2shX/AC.png",
    "https://i.ibb.co/gZRxvZc8/AD.png",
    "https://i.ibb.co/LK3zTtG/JC.png",
    "https://i.ibb.co/dsVWKPcz/JD.png",
    "https://i.ibb.co/yFzz9Qcw/JH.png",
    "https://i.ibb.co/7xWsdvP5/KC.png",
    "https://i.ibb.co/gbvSCnQR/KD.png",
    "https://i.ibb.co/fzmMBDHc/KH.png",
    "https://i.ibb.co/wN3X9V1c/QC.png",
    "https://i.ibb.co/Qj3dJq7f/QD.png",
    "https://i.ibb.co/sdL6HvJj/QH.png",
    "https://i.ibb.co/bgFZfmVL/2H.png",
    "https://i.ibb.co/Dgs6P0pR/3H.png",
    "https://i.ibb.co/hFsT3RV6/4H.png",
    "https://i.ibb.co/3Y7RsxGp/5H.png",
    "https://i.ibb.co/cSdY8pV2/AH.png"
];

socket.onmessage = (event) => {
    if (event.data === "mostrar-imagen") {
        mostrarImagen();
    }
};

function mostrarImagen() {
    const randomIndex = Math.floor(Math.random() * imagenes.length);
    const imagenContainer = document.getElementById("imagen-container");
    const imagen = document.getElementById("imagen");

    imagen.src = imagenes[randomIndex];
    imagenContainer.style.display = "block";

    setTimeout(() => {
        imagenContainer.style.display = "none";
    }, 10000);
}
