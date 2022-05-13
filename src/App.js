import './App.css';
import { Route, Routes, Navigate, Link, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import Header from './UI/header/Header';
import ComboPage from './pages/combo-page/ComboPage';
import HomePage from './pages/homepage/HomePage';
import MovieDetail from './pages/movie-details/MovieDetail';
import TheaterRoomPage from './pages/theater-room-page/TheaterRoomPage';
import AuthForm from './pages/loginpage/AuthForm';
import AuthContext from './store/auth-context';
function App() {

  const authCtx = useContext(AuthContext)

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {!authCtx.isLoggedIn && (<Route path='/auth' element={<AuthForm />} ></Route>)}
        {authCtx.isLoggedIn && (
          <Route path='/' element={<HomePage />} />)}
        <Route path='/booking/moive-detail/:movieId' element={<MovieDetail />} />
        <Route path='/booking/moive-detail/:id/room' element={<TheaterRoomPage />} />
        <Route path='/booking/moive-detail/:id/room/combo' element={<ComboPage />} />
        <Route path='*' element={authCtx.isLoggedIn ? <Navigate to='/'/> : <AuthForm/> }/>
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
