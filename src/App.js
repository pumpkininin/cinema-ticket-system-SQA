import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Header from './UI/header/Header';
import ComboPage from './pages/combo-page/ComboPage';
import HomePage from './pages/homepage/HomePage';
import MovieDetail from './pages/movie-details/MovieDetail';
import TheaterRoomPage from './pages/theater-room-page/TheaterRoomPage';
import { AuthContextProvider } from './store/auth-context';
import AuthForm from './pages/loginpage/AuthForm';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthForm />} />
          <Route path='/booking/moive-detail/:id' element={<MovieDetail />} />
          <Route path='/booking/moive-detail/:id/room' element={<TheaterRoomPage />} />
          <Route path='/booking/moive-detail/:id/room/combo' element={<ComboPage />} />
        </Routes>
      </AuthContextProvider>

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
