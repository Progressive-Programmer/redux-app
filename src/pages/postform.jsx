import { Block, Button, List, ListInput, Page } from 'framework7-react'
import React, { useEffect, useState } from 'react'

export default ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const onSubmit = (e)=>{
        e.preventDefault();
        
        console.log(title, body)
        const post = {
            title: title,
            body: body,
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })  
        .then(res=> res.json())
        .then(data=>console.log(data))        
    }


    return (
        <Block style={{margin:"15%"}}>
            <h1>Add Posts</h1>
            <List noHairlinesMd inlineLabels>
                <ListInput name="title" label="Title:" onChange={e=>setTitle(e.target.value)} />

                <ListInput name="body" label="Body:" onChange={e=>setBody(e.target.value)} />
                <br/>
                <Button fill round onClick={onSubmit} >Submit</Button>
            </List>
        </Block>
    )
}
