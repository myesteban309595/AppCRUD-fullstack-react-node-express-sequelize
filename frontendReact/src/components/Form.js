import React, { Fragment, useState } from 'react'
import {
    Button,
    TextField,
    Typography,
    makeStyles,
    Avatar,
    Container,
    Grid,
    Paper,
    Box,
    FormControl
  } from "@mui/material";

const Formulario = ()=> {

    return (
     <Fragment>
         <h1>Formulario :D</h1>
         <form>
             <input 
               name="titulo"  
               className='form-control my-2'/>
             <button className=' btn btn-primary'>ENVIAR</button>
         </form>
    </Fragment>
    )
}
export default Formulario