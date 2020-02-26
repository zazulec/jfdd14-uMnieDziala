const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 50;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

class Enemy {
    constructor () {
        this.create();
    }
    width = scale;
    height = scale;
    color = ctx.createPattern(document.getElementById("seagull"), "repeat");
    x = (Math.floor(Math.random()*columns - 1) + 1)*scale;
    y = 0;
    velY = scale;
    create = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    update = () => {
        this.y += this.velY;
    };
}

const enemies = [];

function newEnemies () {
    window.setInterval ( () => {
        enemies.push(new Enemy);
        enemies.push(new Enemy);
    }, 3000 );
}

function moving () {
    window.setInterval ( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        enemies.forEach( el => {
            el.create();
            el.update();
        } )
    }, 1000 );
}

newEnemies();
moving();