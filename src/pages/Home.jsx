import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((response) => {
            const documents = Array.isArray(response?.documents) ? response.documents : []
            setPosts(documents)
        }).catch((error) => {
            console.error('Failed to load posts:', error)
            setPosts([])
        })
    }, [])
  
    if (!Array.isArray(posts) || posts.length === 0) {
        return (
            <div className="w-full py-12 mt-4 text-center">
                <Container>
                    <div className="flex justify-center">
                        <div className="p-6 w-full rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
                            <h1 className="text-2xl font-semibold text-sky-700">
                                Login to read posts
                            </h1>
                            <p className="mt-2 text-sm text-slate-500">No posts available yet. Create your first post.</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home