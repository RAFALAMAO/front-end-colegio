import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ThemeProvider } from 'styled-components'
import theme from "./theme/default";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './routes/Login'
import Home from './routes/Home'
import About from "./routes/About";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/front-end-colegio/" element={<Home />} />
        <Route path="/front-end-colegio/login" element={<Login />} />
        <Route path="/front-end-colegio/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
)
