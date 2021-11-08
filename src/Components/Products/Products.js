import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setProducts} from '../Redux/Action/Action'
import Product from './Product'

const Products = () => {
    const products = useSelector(state =>state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>dispatch(setProducts(json)))
    }, []);


    /* Pagination */
    const pagination = [];
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(5)
    const best5 = products.slice(firstIndex, lastIndex);

    for(var i=1; i<=(products.length/5); i++){
        pagination.push(i);
    }
    const previous=()=>{
        setFirstIndex(firstIndex-5);
        setLastIndex(lastIndex-5);
    }
    const next=()=>{
        setFirstIndex(firstIndex+5);
        setLastIndex(lastIndex+5);        
    }
    const pageNumb=(val)=>{
        setFirstIndex((val-1)*5);
        setLastIndex(val*5);
    }
    /*  Pagination */
    return (
        <div className="container">
            <div className="row" style={{padding: "150px 10px"}}>
                {best5.map((val, ind)=>   {return<Product val={val} key={ind}/>})}
                <div className="col-12">
                    <ul className="pagination">
                       {(firstIndex<=0 && lastIndex<=5)? <li className="page-item"><a className="page-link disabled" href="#!">Previous</a></li>: <li className="page-item"><a onClick={previous} className="page-link" href="#!">Previous</a></li>}
                        {pagination.map((val, ind)=>{
                            return(
                                <li key={ind} className="page-item"><a onClick={()=>pageNumb(val)} className="page-link" href="#!">{val}</a></li>
                            )
                        })}
                        {(lastIndex>products.length-1)?<li className="page-item"><a className="page-link disabled" href="#!">Next</a></li>:<li className="page-item"><a onClick={next} className="page-link" href="#!">Next</a></li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products
