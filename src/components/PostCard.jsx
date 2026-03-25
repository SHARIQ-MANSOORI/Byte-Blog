import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full rounded-xl border border-sky-100 bg-white p-4 shadow-sm transition hover:shadow-md'>
        <div className='w-full overflow-hidden rounded-xl mb-3'>
          <img
            src={appwriteService.getFileDownload(featuredImage)}
            alt={title}
            className='h-44 w-full object-cover transition duration-300 hover:scale-105'
          />
        </div>
        <h2 className='text-lg font-semibold text-slate-800'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard