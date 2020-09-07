import React from 'react'
import { Button } from 'reactstrap'

const CommentForm = (props) => {
    return (
        <div>
            <Button outline onClick={props.onClick}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        </div>
    )
}

export default CommentForm;
