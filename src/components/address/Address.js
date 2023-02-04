import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import Context from '../../Context';
import './Address.css'
const Address = () => {
    const {address,setAddress}=useContext(Context)
    const currentId=address.length;
    const obj = {
        id:'',
        name: '',
        contact: '',
        street: '',
        city: '',
        state: '',
        landmark: '',
        zipcode: ''
    }
    const NewAddress = (e) => {
        obj[e.target.name] = e.target.value;
    }
    const UpdateAddress = () => {
        obj.id=currentId+1;
        const arr = [...address];
        arr.push(obj)
        setAddress(arr);
        console.log(address);
    }
    return (
        <div className='container-fluid mt-3 d-flex flex-column justify-content-center align-items-center'>
            <div className='dropdown'>
                <h1>Select Address</h1>
            </div>
            <select className='form-select mb-2 dropdown'>
                <option selected defaultValue='select' disabled>select</option>
                {
                    address.map((obj) => {
                        return (
                            <option key={obj.id}>Name-{obj.name},city-{obj.city},landmark-{obj.landmark},zipcode-{obj.zipcode}</option>
                        )
                    })
                }
            </select>
            <p>or</p>
            <h1 className='mb-3'>Add Address</h1>
            <div autoComplete='off' className='d-flex flex-column div-textField'>
                <TextField id='name' name='name' className='inputField' label='Name*' onChange={NewAddress} />
                <TextField id='contact' name='contact' className='inputField' label='Contact Number*' onChange={NewAddress} />
                <TextField id='street' name='street' className='inputField' label='Street*' onChange={NewAddress} />
                <TextField id='city' name='city' className='inputField' label='City*' onChange={NewAddress} />
                <TextField id='state' name='state' className='inputField' label='State*' onChange={NewAddress} />
                <TextField id='landmark' name='landmark' className='inputField' label='Landmark*' onChange={NewAddress} />
                <TextField id='zipcode' name='zipcode' className='inputField' label='Zip Code*' onChange={NewAddress} />
                <button className='btn btn-info save-address' type='submit' onClick={UpdateAddress}>Save Address</button>
            </div>
        </div>
    );
}
export default Address;