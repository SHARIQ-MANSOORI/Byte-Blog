import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index.js'

function Footer() {
  return (
    <footer className='mt-10 border-t border-sky-200 bg-white py-6 text-center text-sm text-slate-500'>
      <div className='mx-auto max-w-6xl px-4'>
        <p className='mb-1'>ByteBlog</p>
        <p>&copy; {new Date().getFullYear()} ByteBlog. Minimalist blue theme.</p>
      </div>
    </footer>
  )
}

export default Footer