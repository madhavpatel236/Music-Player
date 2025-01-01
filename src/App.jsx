import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./utils/store";
import { Provider } from "react-redux";
import { Outlet, Route, useNavigate } from "react-router-dom";
import {allSongs} from './utils/Data'
import { ShowPlaylistData } from "./utils/playlistDataSlice";
import Header from './Components/Header'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(ShowPlaylistData(allSongs)) 
  },[])

  

  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
