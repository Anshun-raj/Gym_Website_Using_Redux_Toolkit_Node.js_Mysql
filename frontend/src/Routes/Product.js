import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { add } from "../Redux/CartSlice";
import "../Style/Product.css";
function Product() {
  const dispatch = useDispatch();
  const [count,setCount]=useState(0);
  const data = [
    {
      id: 1,
      img:"https://www.fitlineindia.com/cdn/shop/products/Recombent_Bike3.jpg",
      title:"Recumbent Bike",
      price:'50000/-',
    },
    {
      id: 2,
      img:"https://www.fitlineindia.com/cdn/shop/products/fitlinebikegrip.jpg",
      title:"Spin Bike",
      price:'30000/-',
    },
    {
      id: 3,
      img:"https://www.fitlineindia.com/cdn/shop/products/E6-STRECH.jpg?",
      title:"Stretch",
      price:'600000/-'
    },
    
  ];

  const handleadd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className='product'>
      <h2>Our Products</h2>
      <div className='productInfo'>
      {data.map((product) => (
        <div key={product.id} className="productCard">
          <img src={product.img} alt="" className='productImg'/>
          <h4>{product.title}</h4>
          <h5>Price:{product.price}</h5>
          <h6>Buy:{count}</h6>
          <button className='btn1' onClick={()=>setCount(count+1)}>Buy</button>
          <button className="btn" onClick={() => handleadd(product)}>
            Add to cart
          </button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Product
