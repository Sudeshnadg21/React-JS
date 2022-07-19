import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Menu from './component/Menu';
import Pnf from './component/pnf';
import Track from './component/Track';
 function App(){
  return(
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route exact path={`/`} element={<Home/>}/>
      <Route exact path={`/home`} element={<Home/>}/>
      <Route exact path={`/track/:id`} element={<Track/>}/>
      <Route exact path={`/#`} element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
  );
 }
 export default App;