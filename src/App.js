
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Player from './pages/Player';
import TvShow from './pages/TvShow';
import Netflix from './pages/Netflix';
import MoviePage from './pages/MoviePage';






function App() {
  return (
  <BrowserRouter>

  <Routes>
<Route exact path='/login' element={<Login/>}></Route>
<Route exact path='/signup' element={<SignUp/>}></Route>
<Route exact path='/player' element={<Player/>}></Route>
<Route exact path='/tv' element={<TvShow/>}></Route>
<Route exact path='/' element={<Netflix/>}></Route>
<Route exact path='/movie' element={<MoviePage/>}></Route>
</Routes>
 
  
  </BrowserRouter>
  );
}

export default App;
