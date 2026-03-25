import React from 'react'
import {Logo , Container , LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate();
  const navItems = [
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active: !authStatus,
    },
    {
      name :"Signup",
      slug:"/signup",
      active:!authStatus,
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus,

    },
    {
      name:"Add Post",
      slug:"/add-post",
      active:authStatus
    }

  ]
  return (
    <header className='py-4 border-b border-sky-200 bg-white'>
      <Container>
        <nav className='flex items-center gap-3'>
          <Link to='/' className='flex items-center gap-2'>
            <Logo width='70px' />
            <span className='text-lg font-semibold text-sky-700'>ByteBlog</span>
          </Link>
          <ul className='ml-auto flex gap-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className='rounded-full border border-sky-200 px-4 py-2 text-sm font-medium text-sky-800 transition hover:bg-sky-100'
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header