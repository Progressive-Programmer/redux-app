import { Block, Button, List, ListInput, Page } from 'framework7-react'
import React, { useEffect, useState } from 'react'

export default ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const submit = ()=>{
        console.log(title, body)
    }


    return (
        <Block>
            <h1>Add Posts</h1>
            <List noHairlinesMd inlineLabels>
                <ListInput name="title" label="Title:" onChange={e=>setTitle(e.target.value)} />

                <ListInput name="body" label="Body:" onChange={e=>setBody(e.target.value)} />
                <br/>
                <Button fill round onClick={submit} >Submit</Button>
            </List>
        </Block>
    )
}
