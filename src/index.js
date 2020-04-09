/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Button from './Button';

class Wrapper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

        this.callback = this.callback.bind(this);
    }

    callback(text){
        this.setState({text: text});
    }

    render(){
        return(
            <div id="drum-machine">
                <LeftContainer parentCallback={this.callback} />
                <RightContainer text={this.state.text} />
            </div>
        );
    }
}

class LeftContainer extends React.Component{
    constructor(props){
        super(props);       
        this.playSound = this.playSound.bind(this);
        this.sendToParent = this.sendToParent.bind(this);
    }

    playSound(src){
        src.current.play();
    }

    sendToParent(text){
        this.props.parentCallback(text);
    }

    render(){  
        return(
            <div id="left-container">
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Crash1" zvuk="/sounds/Crash1.wav">Q</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Crash2" zvuk="/sounds/Crash2.wav">W</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Crash3" zvuk="/sounds/Crash3.wav">E</Button>

                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Snare1" zvuk="/sounds/Snare1.wav">A</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Kick1" zvuk="/sounds/Kick1.wav">S</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Kick2" zvuk="/sounds/Kick2.wav">D</Button>

                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Electro" zvuk="/sounds/Electro.wav">Z</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Hihat1" zvuk="/sounds/Hihat1.wav">X</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Hihat2" zvuk="/sounds/Hihat2.wav">C</Button>
            </div>
        );
    }

}

class RightContainer extends React.Component{
    constructor(props){
        super(props);    
    }
    render(){
        return(
            <div id="right-container">
                <div id="display">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

document.addEventListener('keydown', (e) => {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);

    if(audio){
        audio.play();
        document.getElementById('display').innerText = (audio.title);
    }
});

ReactDOM.render(
    <Wrapper />, 
    document.getElementById('root')
);