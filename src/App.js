import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />

        <div className="  overflow-hidden">
          <Routes>

            <Route element={<Home />} path="/" />

            <Route element={<PageNotFound />} path="*" />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App