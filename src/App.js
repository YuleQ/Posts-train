import React, { useMemo, useState, } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/main.scss'

function App() {
    const [posts, setPosts] = useState([
        {id: 1 , title: 'aa', body: 'bbb' },
        {id: 2 , title: 'vvv', body: 'ccc' },
        {id: 3 , title: 'bbb', body: 'vvv' }
    ])

   const [filter, setFilter] = useState({ sort: '' , query: ''})
    
    const [modal , setModal] = useState(false)

    const sortedPost = useMemo(() => {
        console.log('working')
        if(filter.sort){
           return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    } , [filter.sort, posts])


    const sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

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
             {/* <PostForm create={createPost}/> */}
             <hr style={{margin: '15px 0'}}/>
             <PostFilter
                filter= {filter}
                setFilter= {setFilter}
             />
                <PostList remove={removePost} posts={sortedAndSearchedPost} title='Посты по Js'/>     
         </div>
     )
     
}

export default App;

