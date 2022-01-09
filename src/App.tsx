import './styles/app.css';
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import LandingContent from './components/LandingContent';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import { Posts } from './components/Posts';
import { PostPage } from './components/PostPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPost from './interfaces/IPost';
import { Author } from './components/Author';

function App() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  //TODO Find elegant solution
  const [post, setPost] = useState<IPost>({id: 0, content: JSON.parse("{}"), author: "", created_at: 0, title: "", category: ""});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:1087/api/getPosts');
        if(!response.ok) throw Error('Did not recieve expected data');
        const posts = await response.json();
        setPosts(posts);
        setFetchError('');
      } catch (err: unknown) {
        if(typeof err === "string") {
          setFetchError(err);
        }else if(err instanceof Error) {
          setFetchError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchPosts();
    }, 2000)

  }, []);

  const getPost = (postID:number) => {
      console.log("Posts: " + posts)
      posts.map((post:IPost) => {
        if(typeof post != undefined && post.id === postID) {
          let cPost = {id: post.id, content: post.content, author: post.author, created_at: post.created_at, category: post.category, title: post.title} as IPost;
          setPost(cPost);
        }
    })
  }
  
  return (
    <div className="App">
        <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <LandingContent/>
                </>
              }/>
              
              <Route path="/posts" element={<Posts posts={posts} fetchError={fetchError} isLoading={isLoading}/>} />
              <Route path="/post/:id" element={ <PostPage posts={posts} fetchError={fetchError} isLoading={isLoading} post={post} getPost={getPost}/>} />   
              <Route path="/author/:author" element={<Author posts={posts} fetchError={fetchError} isLoading={isLoading}/>}/>
            </Routes> 
          </main>
        <Footer />
    </div>
  );
}

export default App;
