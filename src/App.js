//import logo from './logo.svg';
import {Routes,Route ,NavLink} from 'react-router-dom'
import './App.css';
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import NoMatch from './routes/nomatch'

function App() {
  return (
    <div className='App'>
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink className={({isActive}) => (isActive? 'active' : undefined)} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive?'active':undefined}  to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive?'active':undefined}  to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;


