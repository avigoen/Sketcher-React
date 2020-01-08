export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    drawPoint() {
        let canvas = document.querySelector('canvas');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.fillRect(this.x, this.y, 5, 5);
        }
    }
}