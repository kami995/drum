
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
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Heater 1" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">Q</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Heater 2" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">W</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Heater 3" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">E</Button>

                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Heater 4" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">A</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Heater 5" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">S</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Hihat valjda" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">D</Button>

                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Kick" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">Z</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Kick 2" zvuk="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">X</Button>
                <Button playSound={this.playSound} sendToParent={this.sendToParent} id="Hihat2" zvuk="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">C</Button>
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
        console.log(audio);
    }
});

ReactDOM.render(
    <Wrapper />, 
    document.getElementById('root')
);