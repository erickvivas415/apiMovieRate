import React, { Component }  from 'react';

class Footer extends Component {

    changed() {
        console.log("CHanged here")
    }

    render() {
        return(
            <div>
                <h2 onClick={this.props.myAlert}>
                    { this.props.trademark }
                </h2>
                <input onChange={this.changed} type="text"/>
            </div>
        )
    }

}
export { Footer };