export default class Rectangle {
    constructor(startPoint, length, width) {
        this.startPoint = startPoint;
        this.length = length;
        this.width = width;
    }
    drawRectangle() {
        let canvas = document.querySelector('canvas');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.fillRect(this.startPoint.x, this.startPoint.y, this.width, this.length);
        }
    }
}