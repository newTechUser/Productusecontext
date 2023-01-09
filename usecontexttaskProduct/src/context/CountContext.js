import { createContext, useState } from "react";

export const Context=createContext()


export const CountProvider=({children})=>{

    const [count,setCount]=useState(0)
    const [fav,setfav] =useState([])
    const data={
      count,setCount,fav,setfav
    }
    return(
        <Context.Provider value={data}>{children}</Context.Provider>
    );
}

// export const useCount=()=>useContext(Context)