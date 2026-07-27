import React,{Component} from 'react';

class CountPeople extends Component{
  constructor(props){
    super(props);
    this.state={entrycount:0,exitcount:0};
  }

  UpdateEntry=()=>{
    this.setState({entrycount:this.state.entrycount+1});
  }

  UpdateExit=()=>{
    this.setState({exitcount:this.state.exitcount+1});
  }

  render(){
    return(
      <div style={{padding:'20px'}}>
        <h2>Mall Counter</h2>
        <p>People Entered: {this.state.entrycount}</p>
        <button onClick={this.UpdateEntry}>Login</button>
        <br/><br/>
        <p>People Exited: {this.state.exitcount}</p>
        <button onClick={this.UpdateExit}>Exit</button>
      </div>
    );
  }
}
export default CountPeople;
