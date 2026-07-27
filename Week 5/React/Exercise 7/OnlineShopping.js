import React,{Component} from 'react';
import Cart from './Cart';

class OnlineShopping extends Component{
  carts=[
    new Cart('Laptop',65000),
    new Cart('Mouse',500),
    new Cart('Keyboard',1200),
    new Cart('Headphones',2500),
    new Cart('Monitor',15000)
  ];

  render(){
    return(
      <div>
        <h2>Shopping Cart</h2>
        <table border="1">
          <thead>
            <tr><th>Item Name</th><th>Price</th></tr>
          </thead>
          <tbody>
            {this.carts.map((item,index)=>(
              <tr key={index}>
                <td>{item.Itemname}</td>
                <td>{item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default OnlineShopping;
