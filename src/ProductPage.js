import ProductItems from "./components/productItems/ProductItems";
import SelectItems from "./components/selectItems/SelectItems";
import CreateToggleButton from "./components/toggleButton/CreateToggleButton";
import Navbar from "./components/navBar/Navbar";
import Context from "./Context";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductPage = () => {
    const { activeStep,setActiveStep } = useContext(Context);
    const info = () => {
        if (activeStep === 3) {
            setActiveStep(0);
            toast.info("Successfully Placed Order", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div onLoad={info()}>
            <ToastContainer />
            <Navbar />
            <div className="mt-3 d-flex justify-content-center">
                <CreateToggleButton />
            </div>
            <SelectItems />
            <ProductItems />
        </div>
    )
}
export default ProductPage;