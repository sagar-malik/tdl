import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [],
      todo: 0
    }
  }

  changelist(text){
    this.setState({history: this.state.history.concat([text]),todo: (this.state.todo +1)});
  }

  Mark(step){
    const element=this.state.history[step]
    const h1=(this.state.history).filter(id => id !== element);
    this.setState({history: h1,todo:this.state.todo-1});
    }
  render() {
    const history = this.state.history;
    const moves = history.map((step, move) => {
      const desc = step
      return (
        <li key={move}>
          <a>{desc}</a>
          <button type="button" onClick={this.Mark.bind(this,move)}>Delete </button> 
        </li>
      );
    });
    return (
      <div>
        <Header changelist={this.changelist.bind(this)}  />
        <ol>{moves}</ol>
        <h1>Pending={this.state.todo}</h1>
      </div>
    );
  }
}
