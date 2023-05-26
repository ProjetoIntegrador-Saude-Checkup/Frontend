import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import imagem from '../../../assets/images/Logocoracao.png';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Action';
import { toast } from 'react-toastify';


function Navbar() {
    //const [token, setToken] = useLocalStorage('token');
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }
    return (
        <>
            <AppBar className='appbar' position="static">
            <Toolbar className='toolbar'>
                <Box className='toolbar-menu'>
                <img className='toolbar-logo' src={imagem} alt="Imagem" />
                    <a className='href-subli ' href='/home'><Typography>Home</Typography></a>
                    <a className='href-subli' href='/sobre'><Typography>Sobre</Typography></a>
                    <a className='href-subli' href='/postagens'><Typography>Postagens</Typography></a>
                    <a className='href-subli' href='/contato'><Typography>Contato</Typography></a>
                </Box>
                <Box className='toolbar-login' onClick={goLogout}>
                    <Button variant="contained" href='/login'>logout</Button>
                </Box>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;