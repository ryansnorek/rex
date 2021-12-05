import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Search from "./components/Search";
import ItemDetails from "./components/ItemDetails";
import Account from "./components/Account";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function Rexy() {
  return (
      <div className="wrapper">
      <Header/>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/item/:id" element={<ItemDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route
              path="/account"
              element={
                <PrivateRoute redirectTo="/login">
                  <Account/>
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/friends"
              element={
                <PrivateRoute redirectTo="/friends">
                  <Friends/>
                </PrivateRoute>
              }
            /> */}
            <Route path="/friends" element={<Friends/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default Rexy;
