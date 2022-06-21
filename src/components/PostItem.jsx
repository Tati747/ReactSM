import React from "react";
import MyButton from './UI/button/MyButton';
import { Link } from "react-router-dom";



export const PostItem = (props) => {


    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>{props.post.body}</div>
                <div className='link__open'>
                    <Link to={`/posts/${props.post.id}`} >Open</Link >
                </div>
            </div>
            <div className="post__btns">


                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    )
}