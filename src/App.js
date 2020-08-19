import React from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters'
import Table from './components/Table'
import Input from './components/Input'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lettersArray: ["P", "L", "P", "T", "S", "A", "C", "E", "H", "D"],
      wordsArray: [],
      wordInProgress: ""
    };
  }  

  createWord = (index) => {
    var tempWord = this.state.wordInProgress
    console.log(tempWord, "before")
    tempWord = tempWord + this.state.lettersArray[index]
    console.log(tempWord, "after")
    this.setState({wordInProgress: tempWord}, () => console.log(this.state.wordInProgress))
  }

  addWord = () => {
    if (this.state.wordInProgress !== "") {
    let tempWordsArray = JSON.parse(JSON.stringify(this.state.wordsArray));
    tempWordsArray.push(this.state.wordInProgress)
    this.setState({wordsArray: tempWordsArray}, () => this.setState({wordInProgress: ""}))      
    }
    else{
      alert("Please click on letters to create a word!");
    }
  }

  render(){
    return (
      <div className="App">
        <Letters lettersArray={this.state.lettersArray} createWord={this.createWord} />
        <Input wordInProgress={this.state.wordInProgress} addWord={this.addWord} />
        <Table wordsArray={this.state.wordsArray} />
      </div>
    );
  }
}

export default App;
