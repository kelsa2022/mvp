import React from "react";
import {  Route, Routes, BrowserRouter,Routes } from 'react-router-dom';
import { LayoutRoute } from "./components/Layouts/layout-route"
import Home from './components/Home';
import Profile from './components/Profile';
 import EditProfile from './components/Edit_profile';
import JobDetail from './components/Job_detail';
import JobListing from './components/Job_listing';
import PostJob from './components/Post_job';

const AuthCluster = () => {   
    return (
       <div className="App">
         <BrowserRouter>
               <Routes>
               <Route exact path="/" element={<LayoutRoute><Home/></LayoutRoute>}/>
               <Route exact path="/profile" element={<LayoutRoute><Profile/></LayoutRoute>}/>
               <Route exact path="/edit_profile" element={<LayoutRoute><EditProfile/></LayoutRoute>}/>
               <Route exact path="/job_listing" element={<LayoutRoute><JobListing/></LayoutRoute>}/>
               <Route exact path="/job_detail" element={<LayoutRoute><JobDetail/></LayoutRoute>}/>
               <Route exact path="/post_job" element={<LayoutRoute><PostJob/></LayoutRoute>}/>
              </Routes>              
          </BrowserRouter>
       </div>
    )
}

export default AuthCluster;
