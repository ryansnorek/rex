import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Search from "./components/Search";
import SearchItem from "./components/SearchItem";
import Account from "./components/Account";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <>
      <div className="wrapper">
      <Header/>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/item" element={<SearchItem/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route
              path="/account"
              element={
                <PrivateRoute redirectTo="/login">
                  <Account/>
                </PrivateRoute>
              }
            />
            <Route
              path="/friends"
              element={
                <PrivateRoute redirectTo="/friends">
                  <Friends/>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
