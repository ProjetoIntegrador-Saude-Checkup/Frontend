import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import imagem from '../../../assets/images/Logoteste.png';
import './Navbar.css'


function Navbar() {
    return (
        <>
            <Toolbar className='toolbar'>
                <Box className='toolbar-menu'>
                <img className='toolbar-logo' src={imagem} alt="Imagem" />
                    <a className='href-subli ' href='/home'><Typography>Home</Typography></a>
                    <a className='href-subli' href='/sobre'><Typography>Sobre</Typography></a>
                    <a className='href-subli' href='/postagens'><Typography>Postagens</Typography></a>
                    <a className='href-subli' href='/contato'><Typography>Contato</Typography></a>
                </Box>
                <Box className='toolbar-login'>
                    <Button variant="contained">login</Button>
                </Box>
            </Toolbar>
        </>
    )
}

export default Navbar;