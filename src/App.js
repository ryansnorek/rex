import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import Item from "./components/Item";
import Account from "./components/Account";

function App() {
  return (
    <>
      <div className="wrapper">
      <Header/>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
