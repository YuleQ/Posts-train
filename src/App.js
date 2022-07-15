import React, { useState, } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Counter from '../Fake components/Counter';
import './styles/main.scss'

function App() {
    const [posts, setPosts] = useState([
        {id: 1 , title: 'Javascript', body: 'Description' },
        {id: 2 , title: 'Javascript', body: 'Description' },
        {id: 3 , title: 'Javascript', body: 'Description' }
    ])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

     return(
         <div className='App'>
            <Counter/>
             <PostForm create={createPost}/>
             {posts.length !== 0 
                ?<PostList remove={removePost} posts={posts} title='Посты по Js'/>
                :<div>Постов нет</div>
             }

         </div>
     )
     
}

export default App;

