const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const radius = (canvas.height / 2) * 0.9;

ctx.translate(canvas.height / 2, canvas.width / 2);

setInterval(() => {
    drawClock()
}, 1000);

const drawClock = () => {

}