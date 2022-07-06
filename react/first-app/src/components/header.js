import React from 'react';

function Header(props){
    return (
        <React.Fragment>
            <h1>{ props.info }</h1>
            <h3>{ props.myNumber}</h3>
        </React.Fragment>
        
    );
}

export { Header };

