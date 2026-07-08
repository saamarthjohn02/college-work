/*import React from "react";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <p>Here are our available products.</p>
    </div>
  );
}

export default Products;*/
import react,{component} from 'react'
export class product extends component{
  render(){
    const{pName,price}=this.props
    return(
      <div>
        <h2>Product name</h2>
        <button>₹{price}</button>
      </div>
    )
  }
} 