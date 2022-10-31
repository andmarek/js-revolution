// Keys
window.addEventListener('keydown',this.check,false);


const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const buttons = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
}

// left = 37
// up = 38
// right = 39
// down = 40 
function check(e) {
    alert(e.keyCode);
}

let x = canvas.width / 2;
let y = canvas.height;
let dx = 0;
let dy = -2;

function drawBall(start_x, start_y) {
    ctx.beginPath();
    ctx.arc(start_x, start_y, 10, 0, Math.PI * 2);  // circle, hence pi
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath;
}

class Ball {
    constructor(ctx, ex, why) {
        this.ctx = ctx
        this.ex = ex;
        this.why = why;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.ex, this.why, 10, 0, Math.PI * 2);  // circle, hence pi
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath;
    }

    
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let left_target = new Ball(ctx, canvas.width / 2, canvas.height - 350);
    let right_target = new Ball(ctx, canvas.width / 3, canvas.height - 350);

    left_target.drawBall();
    right_target.drawBall();

    /* Moving arrows */
    let left_moving = new Ball(ctx, canvas.width / 2, y);
    let right_moving = new Ball(ctx, canvas.width / 3, y);

    left_moving.drawBall()
    right_moving.drawBall()

    if (left_target.why == left_moving.why) {
        console.log("Erica is a baller ass b****")
    }

    x += dx;
    y += dy;
}
setInterval(draw, 10);