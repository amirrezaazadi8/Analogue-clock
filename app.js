const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const radius = canvas.height / 2;

ctx.translate(radius, radius);

radius = radius * 0.9;

setInterval(() => {
    drawClock()
}, 1000);

const drawClock = () => {

}