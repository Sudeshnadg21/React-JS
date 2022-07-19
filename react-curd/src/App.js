import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Menu from './util/menu'
import Home from './component/home'
import Create from './component/create'
import Update from './component/update'
import Pnf from './util/pnf'
import{ToastContainer} from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'
/* bootstrap link */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
 function App(props){
  return(
    <BrowserRouter>
    <Menu/>
    <ToastContainer autoClose={5000} position={'top-right'} />
    <Routes>
      <Route path={`/`} element={<Home/>}/>
      <Route path={`/home`} element={<Home/>}/>
      <Route path={`/create`} element={<Create/>}/>
      <Route path={`/Update/:id`} element={<Update/>}/>
      <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
  )
 }
 export default App