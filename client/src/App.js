import React, {useState} from "react";
import {createContext, useReducer} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewChat from "./pages/NewChat";
import Login from "./pages/Login";
import ChatHistory from "./pages/ChatHistory";
import Logout from "./pages/Logout";
import {initialState, reducer} from "../src/reducer/UseReducer";

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newchat' element={<NewChat />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/chathistory' element={<ChatHistory />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
