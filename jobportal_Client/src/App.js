import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './components/common/Header/header';
import Home from './pages/Home/Home';
import SignUpForm from './pages/SignUp/signup';
import './global.css';
import SignInForm from "./pages/SignIn/SignIn";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "./redux/Auth/auth.action";
import ChangePassword from "./pages/ForgotPassword/ChangePassword";

const App = () => {
  const location = useLocation();
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getProfileAction(jwt));
    }
  }, [jwt, dispatch]);

  const isAuthenticated = !!auth.user;

  // Ẩn Header nếu người dùng đang ở trang đăng ký và đăng nhập
  const showHeader = location.pathname !== '/auth/sign-up' && location.pathname !== '/auth/sign-in';

  return (
    <>
      {showHeader && <Header />} 
      <Routes>
        <Route path="/auth/sign-up" element={<SignUpForm />} />
        <Route path="/auth/sign-in" element={<SignInForm />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <SignInForm />} />
        <Route path="/change-password" element={<ChangePassword />} />

      </Routes>
    </>
  );
};

export default App;
