import { ULF, ULOR, ULOS, ULR, ULS } from "../constants/userConstants"
import axios from "axios";
export const userLogin = (userInfo)=> async (dispatch)=>{
    dispatch({type:ULR});
    console.log("From Dispatch", userInfo);
    const config={
        headers:{
            "Content-Type": "application/json"
        }
    }
    // let recieve;
    try{
        const recieve = await axios.post("http://localhost:5000/api/user/login", userInfo, config);
        // console.log(recieve.data);
        localStorage.setItem("user", recieve.data.token);
        dispatch({type:ULS, payload:recieve.data.token});

        
    }catch(error)
    {
        dispatch({type:ULF, payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});

    }
    
}


export const userlogout = ()=>async (dispatch)=>{
    dispatch({type:ULOR});
    localStorage.removeItem("user");
    dispatch({type:ULOS});
    console.log("Done")
}