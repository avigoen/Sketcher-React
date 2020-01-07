import Rectangle from './Rectangle'
import Point from './Point'
import Traingle from './Triangle'
export default class Shape {

    constructor(shape) {
        this.selectedShape = shape
    }

    drawShape() {
        switch (this.selectedShape) {
            case 'rectangle':
                let points = new Point(25, 25);
                let rect = new Rectangle(points.getPoint(), 100, 100);
                rect.drawRectangle();
                break;
            case 'circle':
                break;
            case 'triangle':
                let p1 = new Point(100, 100);
                let p2 = new Point(100, 300);
                let p3 = new Point(300, 300);
                let triangle = new Traingle(p1.getPoint(), p2.getPoint(), p3.getPoint());
                triangle.draw();
                break;
            case 'elipse':
                break;
            default:
                break;
        }
    }
}