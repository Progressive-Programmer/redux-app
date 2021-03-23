import { Block, Page } from 'framework7-react'
import React, { useEffect, useState } from 'react'

export default ()=>{
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(json=> {setPosts(json)})
    })

    const postItems = posts.map(post=>
        (<div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>)
    )
    
    return (
        <Block>
           <h1>Posts</h1>
           {postItems}
        </Block>
    )
}
