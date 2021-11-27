import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosAuthorization from "./utils"

import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import Item from "./components/Item";
import Account from "./components/Account";


function App() {
  const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   axiosAuthorization()
  //     .get("/3/movie/550")
  //     .then(res => setMovie(res.data))
  //     .catch(err => console.log(err))
  // },[])

  return (
    <>
      <div className="wrapper">
      <Header/>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/main" element={<Main movie={movie}/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
