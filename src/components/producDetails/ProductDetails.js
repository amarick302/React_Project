import CreateToggleButton from "../toggleButton/CreateToggleButton";
import { Fragment, useContext } from "react";
import Context from "../../Context";
import Navbar from "../navBar/Navbar";
import './ProductDetails.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
export function Product() {
    const { product, setProduct } = useContext(Context);
    const checkTotalPrice = () => {
        console.log(product.price)
        if (product.totalPrice === '') {
            return (
                <span className="text-danger fs-4">
                    {product.price}
                </span>
            )
        }
        else {
            return (
                <span className="text-danger fs-4">
                    Total Price :{product.totalPrice}
                </span>

            )
        }
    }

    return (
        <div>
            <div className="row product-row">
                <div className="image-col col-3">
                    <img src={product.image}></img>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col">
                            <p className="product-name">{product.name}</p>
                        </div>
                        <div className="col">
                            <p className="bg-info rounded-pill d-flex justify-content-center align-items-center">Available Quantity: 148</p>
                        </div>
                    </div>
                    <div className="row">
                        <span className="text-dark">Category:<span className="text-dark fw-bold fs-5">Electronics</span></span>
                    </div>
                    <div className="row mt-3">
                        <p>{product.desc}</p>
                    </div>
                    <div className="row">
                        <p className="text-dark text-danger">
                            <CurrencyRupeeIcon className="fs-4 text-danger" />
                            {checkTotalPrice()}
                        </p>
                    </div>
                </div>
            </div >
        </div>
    )
}
const ProductDetails = () => {
    // const [quantity, setQuantity] = React.useState(1);
    const {quantity,setQuantity}=useContext(Context);

    const modifyQuantity = (e) => {
        let val = e.target.value;
        // setProduct({...product,totalPrice:30});
        // console.log(product.totalPrice);
        setQuantity(val)
    }
    const { product, setProduct } = useContext(Context);
    return (
        <Fragment>
            <Navbar />
            <div className="d-flex justify-content-center">
                <CreateToggleButton />
            </div>
            {Product()}
            <div className="row">
                <div className="col-4" />
                <div className="col-8">
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="text-field" label="Enter Quantity*" color="primary" defaultValue='1' onChange={modifyQuantity} />
                        </Box>
                    </div>
                    <div>
                        <Link to="/placeOrder">
                            <button className="btn btn-outline-info mt-2 border border-info" onClick={() => { setProduct({ ...product, totalPrice: product.price * quantity }) }}> Place Order</button>
                        </Link>
                    </div>
                </div>

            </div>
        </Fragment >
    );
}
export default ProductDetails;