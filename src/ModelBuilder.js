import React, { Component } from 'react'
import Konva from 'konva'
import { Grid, Button, Menu, MenuItem, Divider } from '@material-ui/core'
import Rectangle from './Rectangle'
import Point from './Point'
import Traingle from './Triangle'
import Ellipse from './Ellipse'
import Circle from './Circle'
// import SetProperties from './SetProperties'

export default class ModelBuilder extends Component {
    constructor(props) {
        super(props);
        this.stage = null
        this.state = {
            width: window.innerWidth * 0.95,
            height: window.innerHeight * 0.8,
            anchorEl: null,
            shapeSelected: null
        }
        this.updateCanvas = this.updateCanvas.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createShape = this.createShape.bind(this);
        this.drawShape = this.drawShape.bind(this);
    }

    componentDidMount() {
        let stage = new Konva.Stage({
            container: 'builderCanvas',
            width: this.state.width,
            height: this.state.height
        })
        let layer = new Konva.Layer({
            id: 'canvasLayer'
        });
        stage.add(layer);
        this.stage = stage;
        window.addEventListener('resize', this.updateCanvas);
    }

    updateCanvas() {
        if (this.stage)
            this.stage.destroy();

        let stage = new Konva.Stage({
            width: this.state.width,
            height: this.state.height,
            container: 'builderCanvas'
        })
        stage.add(new Konva.Layer({
            id: 'canvasLayer'
        }));
        this.stage = stage;
    }

    drawShape(selectedShape) {
        switch (selectedShape) {
            case 'rectangle':
                let points = new Point(25, 25);
                let rect = new Rectangle(points, 100, 300);
                rect.drawRectangle();
                break;
            case 'circle':
                let center = new Point(100, 75);
                let circle = new Circle(center, 50);
                circle.draw();
                break;
            case 'triangle':
                let p1 = new Point(100, 100);
                let p2 = new Point(100, 300);
                let p3 = new Point(300, 300);
                let triangle = new Traingle(p1.getPoint(), p2.getPoint(), p3.getPoint());
                triangle.draw();
                break;
            case 'ellipse':
                let elipse = new Ellipse(100, 100, 50, 75);
                elipse.draw();
                break;
            default:
                break;
        }
    }

    handleClick(event) {
        this.setState({ ...this.state, anchorEl: event.currentTarget })
    }

    handleClose() {
        this.setState({ ...this.state, anchorEl: null })
    }

    createShape(event) {
        let shapeSelected = event.target.id;
        this.drawShape(shapeSelected);
        this.handleClose();
    }

    render() {
        // const { rectangle, circle, elipse, triangle } = this.state;
        return (
            <Grid container style={{ marginTop: 10 }}>
                <Grid item xs={10}>
                    <div id="builderCanvas"></div>
                </Grid>
                <Grid item xs={2}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                        Select Shape
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem id="rectangle" onClick={this.createShape}>Rectangle</MenuItem>
                        <MenuItem id="circle" onClick={this.createShape}>Circle</MenuItem>
                        <MenuItem id="ellipse" onClick={this.createShape}>Ellipse</MenuItem>
                        <MenuItem id="triangle" onClick={this.createShape}>Triangle</MenuItem>
                    </Menu>
                    <Divider />
                    {/* <SetProperties /> */}
                </Grid>
            </Grid>
        )
    }
}
