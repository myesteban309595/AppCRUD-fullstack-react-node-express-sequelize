import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:9000/task/'

const CompGetBlogs = ()=> {

  const [blogs, setBlog] = useState([])
  useEffect( ()=>{
      getBlogs()
  },[])

  //procedimineto para mostrar todos los blogs
  const getBlogs = async () => {
      const res = await axios.get(URI)
      setBlog(res.data)
  }

  //procedimineto para eliminar un blog
  const deleteBlog = async (id) => {
     await axios.delete(`${URI}${id}`)
     getBlogs()
  }

  return(
      <div className='container'>
          <div className='row'>
              <div className='col'>
                  <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                  <table className='table'>
                      <thead className='table-primary'>
                          <tr>
                              <th>Title</th>
                              <th>Content</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          { blogs.map ( (blog) => (
                              <tr key={ blog.id}>
                                  <td> { blog.tittle } </td>
                                  <td> { blog.content } </td>
                                  <td>
                                      <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                      <button onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                  </td>
                              </tr>
                          )) }
                      </tbody>
                  </table>
              </div>    
          </div>
      </div>
  )
//^ el elemento thead contiene un bloque de filas
//^ <tr> define una fila de celdas en una tabla. Estas pueden ser una mezcla de elementos <td> y <th> 
//^ El elemento HTML <th> define una celda como encabezado de un grupo de celdas en una tabla. La naturaleza exacta de este grupo está definida por los atributos scope y headers .
//^ El elemento HTML tbody define un sección de cuerpo en una tabla (elemento HTML table).
//^ El elemento HTML Celda de tabla ( <td> ) define la celda de una tabla que contiene datos. Esta participa en el modelo de tablas.

}

export default CompGetBlogs