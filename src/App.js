import logo from './logo.svg';
import './App.css';
import {Component} from "react";


class App extends Component {
    subjects= [ "FSST", "BMSV", "M"]
  state = {
      buddies: [{
          name: "Anna",
          knows_subject: [0, 1]
      },... "Günther", "Paul"]
  }
    person: ["Thomas"]

  }
  /*class handleAddPerson extends React.Component (person){
    this.setState({person: [(this.state.person, { name: name})]})

  }
  class handleAddBuddies extends React.Component(){
      this.setState({person: [(this.state.buddies, { name: name, subject: "FSST"})]})
 }*/

  render(){

    console.log(App);

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );

}
ReactDOM.render();
export default App;


//add to L1
//add to L2
//remove from L1
//edit L2
