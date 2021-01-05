import './App.css';
import React from 'react';
import Journal from "./components/Journal"
import dreams from "./dreams"

class App extends React.Component{
  state = {
    dreams: {},
    isHeaderOn: true,
  };

  componentDidMount(){
    this.setState({dreams})
  }

  handleClick = () => {
    //copy current state;
    let isHeaderOn = this.state.isHeaderOn;
    //change value;
    isHeaderOn = !isHeaderOn
    //update state with new value;
    this.setState({ isHeaderOn })
  }

  renderJournal = () => {
    if(this.state.isHeaderOn === false){
      return <Journal dreams={this.state.dreams}></Journal>
    } else {
      return null;
    }
  }



  render(){
    return <div className="App">
      <header className="header">
        <button className="header-button" onClick={this.handleClick}>dreams</button>
      </header>
      <div>
        {this.renderJournal()}
      </div>
    </div>
  ;
}
}

export default App;
