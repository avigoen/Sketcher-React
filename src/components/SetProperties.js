import React, { Component } from 'react'
import Rectangle from './classes/Rectangle'
import Point from './classes/Point'
import Traingle from './classes/Triangle'
import Ellipse from './classes/Ellipse'
import Circle from './classes/Circle'
import { Card, CardHeader, CardContent, TextField, withStyles, Button } from '@material-ui/core'
const style = theme => ({
    input: {
        marginTop: 10
    }
})

class SetProperties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: null
        }
        this.drawShape = this.drawShape.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    drawShape(values) {
        switch (this.props.selectedShape) {
            case 'rectangle':
                let points = new Point(values.x, values.y);
                let rect = new Rectangle(points, values.length, values.width);
                rect.drawRectangle();
                break;
            case 'circle':
                let center = new Point(values.x, values.y);
                let circle = new Circle(center, values.radius);
                circle.draw();
                break;
            case 'triangle':
                let p1 = new Point(values.x, values.y);
                let p2 = new Point(values.x1, values.y1);
                let p3 = new Point(values.x2, values.y2);
                let triangle = new Traingle(p1, p2, p3);
                triangle.draw();
                break;
            case 'ellipse':
                let point = new Point(values.x, values.y);
                let elipse = new Ellipse(point, values.minRadius, values.maxRadius);
                elipse.draw();
                break;
            case 'point':
                let dot = new Point(values.x, values.y);
                dot.drawPoint();
                break;
            default:
                break;
        }
    }

    setValue() {
        let selectedShape = this.props.selectedShape;
        let values = null;
        let xCoordinate = 0;
        let yCoordinate = 0;
        switch (selectedShape) {
            case 'rectangle':
                xCoordinate = document.getElementById('xCoordinate').value;
                yCoordinate = document.getElementById('yCoordinate').value;
                let length = document.getElementById('length').value;
                let width = document.getElementById('width').value;
                values = {
                    x: xCoordinate,
                    y: yCoordinate,
                    length: length,
                    width: width
                }
                this.drawShape(values);
                break;
            case 'circle':
                xCoordinate = document.getElementById('xCoordinate').value;
                yCoordinate = document.getElementById('yCoordinate').value;
                let radius = document.getElementById('radius').value;
                values = {
                    x: xCoordinate,
                    y: yCoordinate,
                    radius: radius
                }
                this.drawShape(values);
                break;
            case 'triangle':
                xCoordinate = document.getElementById('xCoordinate').value;
                yCoordinate = document.getElementById('yCoordinate').value;
                let x1Coordinate = document.getElementById('x1Coordinate').value;
                let y1Coordinate = document.getElementById('y1Coordinate').value;
                let x2Coordinate = document.getElementById('x2Coordinate').value;
                let y2Coordinate = document.getElementById('y2Coordinate').value;
                values = {
                    x: xCoordinate,
                    y: yCoordinate,
                    x1: x1Coordinate,
                    y1: y1Coordinate,
                    x2: x2Coordinate,
                    y2: y2Coordinate
                }
                this.drawShape(values);
                break;
            case 'ellipse':
                xCoordinate = document.getElementById('xCoordinate').value;
                yCoordinate = document.getElementById('yCoordinate').value;
                let minRadius = document.getElementById('minRadius').value;
                let maxRadius = document.getElementById('maxRadius').value;
                values = {
                    x: xCoordinate,
                    y: yCoordinate,
                    minRadius: minRadius,
                    maxRadius: maxRadius
                };
                this.drawShape(values)
                break;
            case 'point':
                xCoordinate = document.getElementById('xCoordinate').value;
                yCoordinate = document.getElementById('yCoordinate').value;
                values = {
                    x: xCoordinate,
                    y: yCoordinate
                };
                this.drawShape(values);
                break;
            default:
                break;
        }
    }

    render() {
        const { selectedShape, classes } = this.props
        let field1 = null;
        let field2 = null;
        switch (selectedShape) {
            case 'rectangle':
                field1 = <TextField className={classes.input} type="number" required id="length" label="Rectangle Length" defaultValue="0" />;
                field2 = <TextField className={classes.input} type="number" required id="width" label="Rectangle Width" defaultValue="0" />;
                break;
            case 'circle':
                field1 = <TextField className={classes.input} type="number" required id="radius" label="Circle Radius" defaultValue="0" />;
                field2 = null
                break;
            case 'triangle':
                field2 = null
                field1 = null
                break;
            case 'ellipse':
                field1 = <TextField className={classes.input} type="number" required id="minRadius" label="Ellipse Min-Radius" defaultValue="0" />;
                field2 = <TextField className={classes.input} type="number" required id="maxRadius" label="Ellipse Max-Radius" defaultValue="0" />;
                break;
            default:
                break;
        }
        return (
            <Card>
                <CardHeader title="Set Shape Properties" />
                <CardContent>
                    <form>
                        {selectedShape ?
                            <div>
                                <TextField className={classes.input} type="number" required id="xCoordinate" label="X-Coordinate" defaultValue="0" />
                                <TextField className={classes.input} type="number" required id="yCoordinate" label="Y-Coordinate" defaultValue="0" />
                                {selectedShape === 'triangle' ?
                                    <div id="triangle">
                                        <TextField className={classes.input} type="number" required id="x1Coordinate" label="X1-Coordinate" defaultValue="0" />
                                        <TextField className={classes.input} type="number" required id="y1Coordinate" label="Y1-Coordinate" defaultValue="0" />
                                        <TextField className={classes.input} type="number" required id="x2Coordinate" label="X2-Coordinate" defaultValue="0" />
                                        <TextField className={classes.input} type="number" required id="y2Coordinate" label="Y2-Coordinate" defaultValue="0" />
                                    </div>
                                    :
                                    <div>
                                        {field1}
                                        {field2}
                                    </div>
                                }
                                <Button variant="contained" className={classes.input} onClick={this.setValue}>Apply</Button>
                            </div>
                            : null}
                    </form>
                </CardContent>
            </Card>
        )
    }
}
export default withStyles(style)(SetProperties);