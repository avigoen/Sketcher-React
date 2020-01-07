export default class Traingle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2
        this.point3 = point3
    }
    draw() {
        let canvas = document.querySelector('canvas');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(this.point1.x, this.point1.y);
            ctx.lineTo(this.point2.x, this.point2.y);
            ctx.lineTo(this.point3.x, this.point3.y);
            ctx.closePath();

            ctx.lineWidth = 1;
            ctx.strokeStyle = '#666666';
            ctx.stroke();

            // the fill color
            ctx.fillStyle = "#FFCC00";
            ctx.fill();
        }
    }
}