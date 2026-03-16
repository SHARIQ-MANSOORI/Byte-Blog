import React , {useEffect , useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
 
 export default function Protected({children , authentication}) {
    const [loader , setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,authentication,navigate])
  
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

