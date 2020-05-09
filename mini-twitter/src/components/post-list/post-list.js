import React from 'react';
import PostListItem from '../post-list-item';

import "./post-list.css";

const PostList = ({posts, onDelete, onToggleProp}) => {

const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    
    return (
        <li key={id} className='list-group-item'>
            <PostListItem {...itemProps /* New format */}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleProp(id, 1)}
            onToggleLike={() => onToggleProp(id, 2)}/>
            {/*Old format <PostListItem 
            label={item.label} 
            important={item.important} /> */}
        </li>
    )
});

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;