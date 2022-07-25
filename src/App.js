//import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import NoMatch from './routes/nomatch'
import CustomLink from './routes/CustomLink';
import Posts from './routes/posts'
import Post from './routes/post'
import PostIndex from './routes/postindex';

function App() {
  return (
    <div className='App'>
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li>
          <CustomLink to="/posts">Posts</CustomLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="/posts" element={<Posts />} >
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;


