const windowWidth = document.body.clientWidth;
const windowHeight = document.body.clientHeight;
let str = ""
let count = 0;
let snowCount = (windowWidth * windowHeight / 10000)

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let container = document.createElement("div")
container.className = "snow-container"
document.body.appendChild(container)

function randINRange(min, max) {
    const rand = Math.random()
    return min + Math.floor(rand * (max - min + 1))
}

function createSnow() {
    this.html = document.createElement("div");
    this.html.className = "snow";
    this.html.style.opacity = Math.random()
    this.html.style.transform = `scale(${Math.random()*3})`
    this.html.style.animationName = `fall-${count}`
    this.html.style.animationDelay = `${Math.random()*-30}s`;
    this.html.style.animationDuration = `${randINRange(10,30)}s`
    container.appendChild(this.html);
}

function createFrames() {
    const y = Math.floor(randINRange(30000, 80000) / 100000)
    str += ` @keyframes fall-${count} {
        ${y}% {
            transform: translate(${(Math.random() * 100)}vw, ${y}vh);
        }
        100% {
            transform: translate( ${Math.floor(Math.random() * 100)}vw, 100vh);
        }
    }
    `
}



for (let i = 0; i < snowCount; i++) {
    createSnow()
    createFrames()
    count++;
}

const style = document.createElement("style");
style.innerHTML += str
style.innerHTML += `
body {
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);
}

.snow {
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}`
document.head.appendChild(style)