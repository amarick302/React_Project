import './SelectItems.css'
import { useDispatch } from 'react-redux'
import { highToLow, lowToHigh } from '../../action';
const SelectItems = () => {
    const dispatch = useDispatch();
    const checkOption = (e) => {
        if (e.target.value === "2") {
            dispatch(highToLow());
        }
        else if (e.target.value === "3") {
            dispatch(lowToHigh());
        }
    }
    return (
        <div>
            <div className="text-black ms-4">Sort By : </div>
            <select className="form-select ms-3 mt-2" onChange={checkOption}>
                <option selected disabled>Select</option>
                <option value="1">Default</option>
                <option value="2">Price: High to Low</option>
                <option value="3">Price: Low to High</option>
                <option value="4">Newest</option>
            </select>
        </div>
    )
}
export default SelectItems