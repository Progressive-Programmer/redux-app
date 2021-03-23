import { Block, Button, List, ListInput, Page } from 'framework7-react'
import React, { useEffect, useState } from 'react'

export default ()=>{

    return (
        <Block>
            <h1>Add Posts</h1>
            <List noHairlinesMd inlineLabels>
                <ListInput name="title" label="Title:" />

                <ListInput name="body" label="Body:" />
                <Button label="Submit" onClick={()=>{console.log('submit')}} />
            </List>
        </Block>
    )
}
