import React from 'react';
import PostItems from './PostItem';
const PostList = ({posts, title , remove}) => {

    if (!posts.length) {
        return(
            <h1 style={{textAlign: 'center'}}>
                Постов нет</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
            <PostItems remove={remove} number={index +1} post={post} key={post.id}/>    
            )}  
        </div>
    );
}
 
export default PostList;