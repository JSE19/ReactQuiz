import React from 'react';

class ClassComponent extends React.Component{
    render(){
        return(
            <p>Hello</p>
        );
    }
}

const FunctionalComponent = (props) => {
    return(
    <p>Hello {props.name}</p>

    );
};
export { FunctionalComponent, ClassComponent};
