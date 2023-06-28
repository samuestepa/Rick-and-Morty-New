import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About';
import Deatil from './components/Detail/Deatil';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

const email = 'samuestepa@gmail.com';
const password = '123456';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);


   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
            } else {
            alert('¡No hay personajes con este ID!');
         }
      })
      .catch((error) => {
         console.log(error)
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <div className='particles-containter'></div>
         {
            location.pathname !== '/' && <Nav onSearch = { onSearch } access = {access} setAccess = {setAccess}/>
         }

         <Routes>
            <Route path = '/' element = {<Form login = { login }/>}/>
            <Route path = '/home' element = {<Cards characters={characters} onClose = { onClose }/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/home/detail/:id' element = {<Deatil/>}/>
            <Route path=    '/favorites' element = { <Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;

