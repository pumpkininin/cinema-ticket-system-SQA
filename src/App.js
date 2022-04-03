import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import ComboPage from './pages/combo-page/ComboPage';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/loginpage/LoginPage';
import MovieDetail from './pages/movie-details/MovieDetail';
import TheaterRoomPage from './pages/theater-room-page/TheaterRoomPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/booking/moive-detail/:id' element={<MovieDetail/>} />
        <Route path='/booking/moive-detail/:id/room' element={<TheaterRoomPage/>} />
        <Route path='/booking/moive-detail/:id/room/combo' element={<ComboPage/>} />
      </Routes>
      
      {/* <Profile></Profile> */}
      {/* <LoginPage></LoginPage>
      <HomePage></HomePage>
      <MovieDetail></MovieDetail>
      <ComboPage></ComboPage>
      <TheaterRoomPage></TheaterRoomPage> */}
    </div>
  );
}

export default App;
