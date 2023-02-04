import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Context from '../../Context';
export default function ProductItems() {
    const { product, setProduct } = React.useContext(Context);
    const items = useSelector(state => state.items)
    // React.useEffect(()=>{
    //     console.log(items);
    // })
    return (
        <div className='row container-fluid mt-3'>
            {
                items.map((item) => {
                    return (
                        <Card className='col-4 container-fluid' key={item.id} sx={{ minWidth: 200, maxWidth: 230, ml: 2, mt: 2 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.image}
                                title="green iguana"
                            />
                            <CardContent>
                                <div className='row d-flex'>
                                    <Typography className='col-6'>
                                        {item.brand}
                                    </Typography>
                                    <Typography className='col-6 d-flex justify-content-end align-items-center' >
                                        <CurrencyRupeeIcon />{item.price}
                                    </Typography>
                                </div>
                                <Typography >
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to='/productDetails'>
                                    <Button size="small" className='bg-success text-white' onClick={() => {
                                        setProduct({
                                            ...product,
                                            image: item.image,
                                            name: item.name,
                                            desc: item.desc,
                                            price: item.price,
                                            totalPrice: ''
                                        })
                                    }}>Buy</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </div>
    )
    // console.log(items)
}