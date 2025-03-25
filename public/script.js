const socket = new WebSocket("ws://localhost:3000");

const imagenes = [
    "https://i.ibb.co/LXJb11dv/image.jpg",
    "https://i.ibb.co/S4V0Rg96/image.jpg",
    "https://i.ibb.co/mV0DdHRC/image.jpg",
    "https://i.ibb.co/fVCGsKV3/image.jpg",
    "https://i.ibb.co/qLBchGt5/image.jpg",
    "https://i.ibb.co/rKGfScxQ/image.jpg",
    "https://i.ibb.co/C5VZ3kfp/image.jpg",
    "https://i.ibb.co/pvXpCL1W/image.jpg",
    "https://i.ibb.co/1Yy7p4pZ/image.jpg",
    "https://i.ibb.co/prB26Ksp/image.jpg",
    "https://i.ibb.co/F4C5hjXp/image.jpg",
    "https://i.ibb.co/4ngWHd2K/image.jpg",
    "https://i.ibb.co/hFSqHNm9/image.jpg",
    "https://i.ibb.co/zVRxKKyb/image.jpg",
    "https://i.ibb.co/spmPGGCq/image.jpg",
    "https://i.ibb.co/sdLPTc6x/image.jpg",
    "https://i.ibb.co/jZBssRFX/image.jpg",
    "https://i.ibb.co/PqcFMDc/image.jpg",
    "https://i.ibb.co/Zsr5snb/image.jpg",
    "https://i.ibb.co/sdZh4TkG/image.jpg",
    "https://i.ibb.co/hRSBKYtr/image.jpg",
    "https://i.ibb.co/KcKj8f0T/image.jpg",
    "https://i.ibb.co/hxmCxJJZ/image.jpg",
    "https://i.ibb.co/4g2GdgCM/image.jpg",
    "https://i.ibb.co/xtBDXWCY/image.jpg",
    "https://i.ibb.co/67wLpS6m/image.jpg",
    "https://i.ibb.co/fVj1SkTB/image.jpg",
    "https://i.ibb.co/4wz6tqSv/image.jpg",
    "https://i.ibb.co/8D5smps9/image.jpg",
    "https://i.ibb.co/n44XX4s/image.jpg",
    "https://i.ibb.co/F4RX8H44/image.jpg",
    "https://i.ibb.co/23sJwgyq/image.jpg",
    "https://i.ibb.co/4ZpLKPxt/image.jpg",
    "https://i.ibb.co/GQcqZ0Ms/image.jpg",
    "https://i.ibb.co/gZKtwLfY/image.jpg",
    "https://i.ibb.co/JWTs9bDr/image.jpg",
    "https://i.ibb.co/nNB6zxpb/image.jpg",
    "https://i.ibb.co/KxrJNx8g/image.jpg",
    "https://i.ibb.co/KnJjtq1/image.jpg",
    "https://i.ibb.co/6cTnsHZf/image.jpg",
    "https://i.ibb.co/9HxxDrkF/image.jpg",
    "https://i.ibb.co/cKF4SJ0H/image.jpg",
    "https://i.ibb.co/35fpHJVC/image.jpg",
    "https://i.ibb.co/ksYKkmXd/image.jpg",
    "https://i.ibb.co/8DTpWqVY/image.jpg",
    "https://i.ibb.co/k6s1GrVx/image.jpg",
    "https://i.ibb.co/wFDwsNry/image.jpg",
    "https://i.ibb.co/d0tqhMv6/image.jpg",
    "https://i.ibb.co/JF0bWDQs/image.jpg",
    "https://i.ibb.co/b51GcgX0/image.jpg",
    "https://i.ibb.co/zHr653jX/image.jpg",
    "https://i.ibb.co/fz7DNKLr/image.jpg"
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
