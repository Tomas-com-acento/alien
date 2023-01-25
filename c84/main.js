//reconhecer o canvas
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");


alienWidth = 100;
alienHeight = 90;


backgroundImage = "mateplanodefundo.webp";
alienImage = "alien2.png";


alienX = 10;
alienY = 10;

function add() {
    backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
    backgroundImgTag.onload = uploadBackground; // definindo uma função, ao carregar esta variável
    backgroundImgTag.src = backgroundImage;   // carregando a imagem

    alienImgTag = new Image(); //definindo uma variável com uma nova imagem
    alienImgTag.onload = uploadAlien; // definindo uma função, ao carregar esta variável
    alienImgTag.src = alienImage;   // carregando a imagem
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadAlien() {
    ctx.drawImage(alienImgTag, alienX, alienY, alienWidth, alienHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '98') {
        down();
        console.log("down");
    }
    if (keyPressed == '104') {
        up();
        console.log("up");
    }
    if (keyPressed == '100') {
        left();
        console.log("left");
    }
    if (keyPressed == '102') {
        right();
        console.log("right");
    }






}

function down() {
    if (alienY <= 500) {
        alienY = alienY + 10;
        console.log("Quando a seta para baixo é pressionada,  x = " + alienX + " | y = " + alienY);
        uploadBackground();
        uploadAlien();
    }
}
function up() {
    if (alienY >= 0) {
        alienY = alienY - 10;
        console.log("Quando a seta para cima é pressionada,  x = " + alienX + " | y = " + alienY);
        uploadBackground();
        uploadAlien();
    }
}
function right() {
    if (alienX <= 700) {
        alienX = alienX + 10;
        console.log("Quando a seta para direita é pressionada,  x = " + alienX + " | y = " + alienY);
        uploadBackground();
        uploadAlien();
    }
}
function left() {
    if (alienX >= 0) {
        alienX = alienX - 10;
        console.log("Quando a seta para esquerda é pressionada,  x = " + alienX + " | y = " + alienY);
        uploadBackground();
        uploadAlien();
    }
}




















