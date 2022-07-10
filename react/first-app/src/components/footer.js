import React, { Component }  from 'react';

class Footer extends Component {

    state = {
        name: 'Erick',
        age: 42
    }

    componentDidMount() {
        this.setState({name: 'MyName'});
    }

    changed = evt => {
        this.setState({name: evt.target.value});
        console.log(this.state.name)
    }

    render() {
        return(
            <div>
                <h2 onClick={this.props.myAlert}>
                    { this.props.trademark }
                </h2>
                <input value={this.state.name}
                    onChange={this.changed} type="text"/>
            </div>
        )
    }

}
export { Footer };