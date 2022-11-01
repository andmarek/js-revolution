const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height;
let dx = 0;
let dy = -2;

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
// Keys
window.addEventListener('keydown',this.check,false);
let int_score = 0;
let left_target = new Ball(ctx, canvas.width / 2, canvas.height - 350);
let right_target = new Ball(ctx, canvas.width / 3, canvas.height - 350);

let left_moving = new Ball(ctx, canvas.width / 2, y);
let right_moving = new Ball(ctx, canvas.width / 3, y);

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
    if ((left_moving.why - left_target.why < 50) && (left_moving.why - left_target.why > 0)) {

        let score = document.getElementById("score_number");
        score.innerHTML = '';
        int_score += 1;
        str_score = int_score + "";

        console.log(score.textContent);
        let updated_score_elem = document.createTextNode(str_score);
        score.appendChild(updated_score_elem);

        
        console.log("FUCK")
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    left_target.drawBall();
    right_target.drawBall();

    left_moving.drawBall()
    right_moving.drawBall()

    if (left_target.why == left_moving.why) {
        console.log("Erica is a baller ass b****")
    }

    x += dx;
    left_moving.why += dy;
    right_moving.why += dy;
    if (left_moving.why < 0) {
        left_moving.why = canvas.height;
    }
    if (right_moving.why < 0) {
        right_moving.why = canvas.height;
    }
}
setInterval(draw, 10);