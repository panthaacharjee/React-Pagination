import React from 'react'

const Product = ({val}) => {
    return (
        <div className="col-md-4 product">
            <div className="img">
                <img src={val.image} alt={val.image}/>
            </div>
            <h4>{val.title}</h4>
            <h5>${val.price}</h5>
            <button className="cart-btn">Add to cart</button>
        </div>
    )
}

export default Product
