import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { name, seller, img, price, ratings, ratingsCount, stock } = props.product;
    
    return (
        <div className="product">
            <img className="image" src={img} alt="" srcset="" />
            <div className="product-info">
                <p>{name.slice(0, 19)}</p>
                <small>seller: {seller}</small> <br />
                <small>price: {price}</small> <br />
                <small>ratings: {ratings}</small> <br />
                <small>ratings: {stock}</small> <br />
                <small>rating count: {ratingsCount}</small> <br />
                
                <button onClick={ () =>props.handleAddToCart(props.product)} className="btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;