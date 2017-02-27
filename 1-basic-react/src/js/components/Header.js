import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor(){
  super();
  this.state={
    value: ""
  }
}
  handleChange=(e) => {
  if (e.key === 'Enter') {
       this.props.changelist(e.target.value);
       this.setState({value:""})
    }
  else{
    const title1 = e.target.value+e.key;
    this.setState({value:title1});
  }
  }
  
  
  render() {
    return (
      <div>
      <h1>TO -Do </h1>
     <input value={this.state.value} onKeyPress={this.handleChange.bind(this)} />
      </div>
    );
  }
}