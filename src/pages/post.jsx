import { Block, Page } from 'framework7-react'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';


const Posts = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchPosts();
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

export default connect(null, {fetchPosts})(Posts);