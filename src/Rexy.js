import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Login from "./components/Login";
import Join from "./components/Join";
import ItemDetails from "./components/ItemDetails";
import Account from "./components/Account";
import SearchUsers from "./components/SearchUsers";
import UserView from "./components/UserView";
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
            <Route path="/users" element={<SearchUsers/>}/>
            <Route path="/userview" element={<UserView/>}/>
            <Route
              path="/account"
              element={
                <PrivateRoute redirectTo="/login">
                  <Account/>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default Rexy;
