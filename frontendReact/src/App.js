import React, { Fragment, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompGetBlogs from './components/GetBlogs'
import CompCreateBlog from './components/CreateBlog'
import CompEditBlog from './components/UpdateBlog'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompGetBlogs/>}/>
          <Route path='/create' element={<CompCreateBlog/>}/>
          <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
