import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function PostIndex(){
    
    const[posts,setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await 
                fetch('https://jsonplaceholder.typicode.com/posts')

            const data = await res.json()
            setPosts(data)
        }

        fetchPosts()
    },[])

    return (
        <>
            <ul>
                {
                    posts.map( (p) => (
                        <li key={p.id}>
                            <Link to={`${p.id}`}>
                                {p.id}:{p.title}
                            </Link>        
                        </li>
                    ))
                }
            </ul>
        </>
    )
}