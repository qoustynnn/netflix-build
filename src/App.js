import React, {useEffect} from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if (userAuth){
          // logged in
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        } else {
          // logged out
          dispatch(logout());
        }
      });

      return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path='/login' element={<LoginScreen/>}/>
          ) : (
            <React.Fragment>
              <Route path="/profile" element={<ProfileScreen/>}/>
              <Route path="/" element={<HomeScreen/>}/>
            </React.Fragment>
          )}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
