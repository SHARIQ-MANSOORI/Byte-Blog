import React , {useEffect , useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
 
 export default function Protected({children , authentication}) {
    const [loader , setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);

    useEffect(()=>{
        // authentication = true means login required
        // authentication = false means login should NOT be required (login/signup pages)
        if(authentication && !authStatus){
            navigate("/login")
        }else if(!authentication && authStatus){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,authentication,navigate])
  
    return loader ? (
      <div className='flex min-h-[60vh] items-center justify-center text-sky-700'>
        <h1 className='text-lg font-medium'>Loading...</h1>
      </div>
    ) : (
      <>{children}</>
    )
}

