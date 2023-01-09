import { useContext } from "react";
import { Context} from "./context/CountContext";

export const SwitchCount=()=>{

const {fav}=useContext(Context)
    return(
        <>
            {fav.length}      
        </>
    );
}