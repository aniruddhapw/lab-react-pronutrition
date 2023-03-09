import React, { Component } from 'react'

export default class Practice extends Component {
  constructor(props) {
       super(props)
       console.log('constructor working')
       this.state={
        favColor:'red'
       }
  }
    componentDidMount(){
    console.log('Comoponent did mount working ');
   }
   shouldComponentUpdate(){
    return true;
   }
   getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBefore update==='+prevState.favColor);
    
   }
   changeColor=()=>{
    this.setState({favColor:'blue'})
   }
    render() {
    console.log('render working')
    return (
      <div>
        <h1>fav color {this.state.favColor}</h1>
        <button onClick={this.changeColor}>change color</button>
      </div>
    )
  }
}
