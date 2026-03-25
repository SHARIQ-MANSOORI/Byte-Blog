import React , {useState , useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {useDispatch} from 'react-redux' 
import authService from './appwrite/auth'
import {login , logout} from "./store/authSlice.js"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import './App.css'

function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false));
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-col justify-between bg-sky-50 text-slate-900'>
      <div className='w-full max-w-6xl mx-auto p-4'>
        <Header />
        <main className='mt-6 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
