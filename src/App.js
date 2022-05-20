import "./App.css";
import { Route, Routes, Navigate, Link, Redirect } from "react-router-dom";
import { useContext } from "react";

import Header from "./UI/header/Header";
import ComboPage from "./pages/combo-page/ComboPage";
import HomePage from "./pages/homepage/HomePage";
import MovieDetail from "./pages/movie-details/MovieDetail";
import OrderPage from "./pages/orders/OrderPage";
import AuthForm from "./pages/authPage/AuthForm";
import AuthContext from "./store/auth-context";
import CheackOutPage from "./pages/check-out/CheackOutPage";
import { TicketContextProvider } from "./store/ticket-context";
import Profile from "./pages/profile/Profile";
import ChangeProfile from "./pages/profile/ChangeProfile";
function App() {
  const authCtx = useContext(AuthContext);

  return (
    <TicketContextProvider>
      <div className="App">
        <Header></Header>
        <Routes>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthForm />}></Route>
          )}
          {authCtx.isLoggedIn && <Route path="/" element={<HomePage />} />}
          <Route
            path="/booking/moive-detail/:movieId"
            element={<MovieDetail />}
          />
          <Route path="/booking/checkout" element={<CheackOutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/changeProfile" element={<ChangeProfile />} />
          <Route
            path="*"
            element={authCtx.isLoggedIn ? <Navigate to="/" /> : <AuthForm />}
          />
        </Routes>

        {/* <Profile></Profile> */}
        {/* <LoginPage></LoginPage>
      <HomePage></HomePage>
      <MovieDetail></MovieDetail>
      <ComboPage></ComboPage>
      <TheaterRoomPage></TheaterRoomPage> */}
      </div>
    </TicketContextProvider>
  );
}

export default App;
