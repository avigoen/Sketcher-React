export default class Ellipse {
    constructor(point, radiusX, radiusY) {
        this.point = point
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }
    draw() {
        let canvas = document.querySelector('canvas');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.ellipse(this.point.x, this.point.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}