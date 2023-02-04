import { useContext } from "react";
import Context from "../../Context";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './ConfirmOrder.css'
const ConfirmOrder = () => {
    const { product, quantity, address } = useContext(Context);
    const selectedAddress = [...address][address.length - 1];
    return (
        <div className="container">
            <div className="row body-order">
            <div className="col-2"></div>
                <div className="col-4">
                    <div className="row">
                        <h1 className="fs-5">{product.name}</h1>
                    </div>
                    <div className="row">
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className="row">
                        <p>{product.desc}</p>
                    </div>
                    <div className="row">
                        <span className="text-danger fs-5">Total Price: </span>
                        <span className="text-danger fs-5"><CurrencyRupeeIcon /> {product.totalPrice}</span>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <h1 className="row fs-5">Address Details :</h1>
                    <div className="row fs-5">Name: {selectedAddress.name}</div>
                    <div className="row fs-5">Contact Number: {selectedAddress.contact}</div>
                    <div className="row fs-5">{selectedAddress.state}</div>
                    <div className="row fs-5">{selectedAddress.zipcode}</div>
                </div>
            </div>
        </div>
    )
}
export default ConfirmOrder;