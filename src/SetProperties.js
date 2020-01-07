import React, { Component } from 'react'

export default class SetProperties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: null
        }
    }

    componentDidUpdate() {
        let shapeSelected = this.props.shapeSelected;
        this.setState({ ...this.state, shape: shapeSelected });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
