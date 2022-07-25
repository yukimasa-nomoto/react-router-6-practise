import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Post(){

    const[post , setPost] = useState('')
    const {postId} = useParams()

    useEffect(() =>{
        const fetchPost = async() => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            )
            const data = await res.json()
            setPost(data)
        }

        fetchPost()

    },[postId])

    return (
        <>
            <h2>Single Post</h2>
            <div>
                <p>ID:{post.id}</p>
                <p>タイトル:{post.title}</p>
                <p>内容:{post.body}</p>
            </div>
        </>
    )
}