import React, { useMemo, useState, } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
// import Counter from '../Fake components/Counter';
import './styles/main.scss'

function App() {
    const [posts, setPosts] = useState([
        {id: 1 , title: 'aa', body: 'bbb' },
        {id: 2 , title: 'vvv', body: 'ccc' },
        {id: 3 , title: 'bbb', body: 'vvv' }
    ])

    const [selectedSort , setSelectedSort] = useState('')
    const [searchQuery , setSerchQuery] = useState('')

    const sortedPost = useMemo(() => {
        console.log('working')
        if(selectedSort){
           return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    } , [selectedSort, posts])


    const sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPost])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
        
    }

     return(
         <div className='App'>
             <PostForm create={createPost}/>
             <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder = 'Поиск...'
                    value ={searchQuery}
                    onChange = { e => setSerchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange ={sortPost}
                    defaultValue='Сортировка'
                    options ={[
                        {value: 'title' , name:'По названию'},
                        {value: 'body' , name:'По описанию'}
                    ]}
                />
            </div>
             {sortedAndSearchedPost.length !== 0 
                ?<PostList remove={removePost} posts={sortedAndSearchedPost} title='Посты по Js'/>
                :<h1 style={{textAlign: 'center'}}>Постов нет</h1>
             }

         </div>
     )
     
}

export default App;

