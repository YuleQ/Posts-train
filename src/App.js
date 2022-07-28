import React, { useMemo, useState, useEffect } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/main.scss'

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '' , query: ''})
    const [modal , setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts , filter.sort , filter.query)
    const [postsLoading , setPostsloading] = useState(false)
    const [fetchPost , isPostsLoading , postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    useEffect(() => {
      fetchPost()
    }, [])
    


    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

     return(
         <div className='App'>
            <MyButton style={{marginTop : 30}} onClick={() => setModal(true)}>
                    Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
             <hr style={{margin: '15px 0'}}/>
             <PostFilter
                filter= {filter}
                setFilter= {setFilter}
             />
             {isPostsLoading
                ? <div style={{display: 'flex' , justifyContent: 'center' , marginTop: 50}}><Loader/></div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты по Js'/>     

             }
         </div>
     )
     
}

export default App;

