const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const radius = (canvas.height / 2) * 0.9;

ctx.translate(canvas.height / 2, canvas.width / 2);

setInterval(() => {
    drawClock()
}, 1000);

const drawClock = () => {
    // drawFace(ctx, radius);
    // drawNumbers(ctx, radius);
    // drawTime(ctx, radius);
}

const drawFace = (ctx, radius) => {
    let grad;
    //draw white circle for the face
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();
    // create a radial gradient (inner, middle, and outer edge of clock)
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    //define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    //draw the center of the clock
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
