import React, { Component }  from 'react';

class Footer extends Component {

    state = {
        name: 'Erick',
        age: 42,
        isLoging: false
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
                { this.state.isLoging === true ? (
                    <React.Fragment>
                        <h2 onClick={this.props.myAlert}>
                        { this.props.trademark }
                        </h2>
                        <input value={this.state.name}
                        onChange={this.changed} type="text"/>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2>You can't see this content</h2>
                        <h2>You must be login</h2>
                        <input value={this.state.name}
                        onChange={this.changed} type="text"/>
                    </React.Fragment>
                ) }
            </div>
        )
    }

}
export { Footer };