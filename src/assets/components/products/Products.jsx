import React,{useEffect, useState} from 'react'

function Products() {
let [products,setProducts]=useState([]);
const getproducts =async()=>{
    let response = await fetch("https://fakestoreapi.com/products");
    let data =await response.json();
    setProducts(data);
}
useEffect( ()=>{
    getproducts();
} , [])

  return (
    <div className='row'>
        { products.map( (ele) => {
              return <div className='col-md-4 w-25' key={ele.id}>
                                <h1 className='bold my-4 '>prodact{ele.id}</h1>

                        <h2>{ele.title}</h2>
                        <img src={ele.image} className='w-50 h-50'/>
                        
                        <h3>{ele.price}</h3>
                    </div>
            })}

</div>
  )
}

export default Products