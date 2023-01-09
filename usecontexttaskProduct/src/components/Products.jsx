import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import './Products.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Context } from '../context/CountContext';


function Products() {
    const [data,setdata] = useState([])
    // const {count,setCount}=useContext(Context)
    const {count,setCount,fav,setfav}=useContext(Context)

    useEffect(() => {
        // axios.get("https://northwind.vercel.app/api/orders")
        axios.get("https://dummyjson.com/products")
        .then(res => {
            // console.log(res.data.products);
            setdata(res.data.products)
        })
        .catch((error) =>{
            console.log(error);
        })
    },[])


    function handlebtn(element) {
        if(fav.find(x=>x.id == element.id)){
            alert("This product already favorite!")
        }
        else{
            setfav([...fav, element])
        }
    }
  return (
    <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Function</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((element) => (
                        <TableRow key={element.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {/* <TableCell component="th" scope="row">{element.shipName}</TableCell> */}
                            <TableCell component="th" scope="row">{element.title}</TableCell>
                            {/* <TableCell>{element.details[0]?.quantity}</TableCell> */}
                            <TableCell>{element.stock}</TableCell>
                            {/* <TableCell>{element.details[0].unitPrice}</TableCell> */}
                            <TableCell>{element.price}</TableCell>
                            <TableCell>
                                    <button className='btn' onClick={()=>handlebtn(element)} data-id={element.id}>Add to favorite</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}

export default Products