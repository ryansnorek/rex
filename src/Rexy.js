import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Login from "./components/Login";
import Join from "./components/Join";
import ItemDetails from "./components/ItemDetails";
import Account from "./components/Account";
import Friends from "./components/Friends";
import FriendView from "./components/FriendView";
import PrivateRoute from "./components/PrivateRoute";

function Rexy() {
  return (
    <main>
      <div className="wrapper">
      <Header/>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/item/:id" element={<ItemDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/friendview" element={<FriendView/>}/>
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
                <PrivateRoute redirectTo="/login">
                  <Friends/>
                </PrivateRoute>
              }
            /> */}
            <Route path="/friends" element={<Friends/>}/>
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default Rexy;
