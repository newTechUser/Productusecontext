import { useContext } from "react";
import { Context} from "./context/CountContext";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const Productid=()=>{

    const {fav,setfav}=useContext(Context)
    // console.log(fav)
    function HandleDelete(id){
        setfav(fav.filter((x) => x.id !== id))
    }
    function HandleRemoveAll(){
        setfav([])
    }
    return(
        <>
        {
            fav.map((elem)=> (
                <>
                    <TableRow key={elem.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{elem.title}</TableCell>
                        <TableCell>{elem.stock}</TableCell>
                        <TableCell>{elem.price}</TableCell>
                        <TableCell>
                                <button onClick={() => HandleDelete(elem.id)} className='btn' style={{background:'red',color:'white'}}>Delete from favorite</button>
                        </TableCell>
                    </TableRow>   
                </>
            ))
        }
            <button className="btn" onClick={HandleRemoveAll}>RemoveAll</button>
        </>
    );
}