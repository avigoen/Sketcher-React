export default class Circle {
    constructor(center, radius) {
        this.center = center
        this.radius = radius;
    }
    draw() {
        let canvas = document.querySelector('canvas');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}