import React from "react";
import { Link, Outlet } from 'react-router-dom';

const Product = () =>{
    return(
        <>
            <div>Product Page</div>
            <nav>
            <Link to="feature">Feature</Link>
            <Link to="new">New</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Product;