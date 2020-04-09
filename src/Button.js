/* eslint-disable no-useless-constructor */
import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.audio = React.createRef();
    }

    render(){
        return(
            <button 
                onClick = {() => {
                    this.props.playSound(this.audio);
                    this.props.sendToParent(this.props.id);
                }}
                id = {this.props.id} 
                className = "drum-pad">
                    <audio ref={this.audio} title={this.props.id} id={this.props.children} src={this.props.zvuk} className='clip'></audio>
                    {this.props.children}
            </button>
        );
    }
}

export default Button;