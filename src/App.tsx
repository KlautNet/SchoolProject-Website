import './styles/app.css';
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import LandingContent from './components/LandingContent';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import apiRequest from './components/apiRequest';
import { Posts } from './components/Posts';
import { PostPage } from './components/PostPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [posts, setPosts] = useState<[]>([]);
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
    fetchPosts();

  }, []);
//    {isLoading && <p>Loading Posts... </p>}
// {fetchError && <p>{`Error: ${fetchError}`}</p>}
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
              
              <Route path="/posts" element={<Posts posts={posts}/>} />
              <Route path="/post/:id" element={ <PostPage />} />        
            </Routes> 
          </main>
        <Footer />
    </div>
  );
}

export default App;
