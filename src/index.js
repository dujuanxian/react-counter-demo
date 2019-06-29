import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <section>
          <div>I have clicked {this.state.counter} times!</div>
          <button onClick={this.handleClick}>Add</button>
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
