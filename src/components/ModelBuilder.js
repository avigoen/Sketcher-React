import React, { Component } from 'react'
import { Grid, Button, Menu, MenuItem, Divider } from '@material-ui/core'
import SetProperties from './SetProperties'

export default class ModelBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth * 0.95,
            height: window.innerHeight * 0.8,
            anchorEl: null,
            shapeSelected: null
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createShape = this.createShape.bind(this);
    }

    handleClick(event) {
        this.setState({ ...this.state, anchorEl: event.currentTarget })
    }

    handleClose() {
        this.setState({ ...this.state, anchorEl: null })
    }

    createShape(event) {
        let shapeSelected = event.target.id;
        let oldState = this.state;
        oldState.shapeSelected = shapeSelected;
        this.setState(oldState);
        this.handleClose();
    }

    render() {
        return (
            <Grid container style={{ marginTop: 10 }}>
                <Grid item xs={10}>
                    <canvas width={this.state.width} height={this.state.height} id="builderCanvas"></canvas>
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
                        <MenuItem id="point" onClick={this.createShape}>Point</MenuItem>
                    </Menu>
                    <Divider />
                    <SetProperties selectedShape={this.state.shapeSelected} />
                </Grid>
            </Grid>
        )
    }
}
