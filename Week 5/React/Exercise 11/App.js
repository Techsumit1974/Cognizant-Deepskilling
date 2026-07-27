import React,{Component} from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component{
 state={count:0};
 increment=()=>this.setState({count:this.state.count+1});
 decrement=()=>this.setState({count:this.state.count-1});
 sayHello=()=>alert('Hello! Static Message');
 increase=()=>{this.increment();this.sayHello();}
 welcome=(msg)=>alert(msg);
 onPress=()=>alert('I was clicked');
 render(){
  return(<div>
   <h2>Counter: {this.state.count}</h2>
   <button onClick={this.increase}>Increment</button>
   <button onClick={this.decrement}>Decrement</button><br/><br/>
   <button onClick={()=>this.welcome('Welcome')}>Say Welcome</button><br/><br/>
   <button onClick={this.onPress}>OnPress</button>
   <hr/>
   <CurrencyConvertor/>
  </div>);
 }
}
export default App;
