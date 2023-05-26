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
                <Link to='/home'  >
                <Typography className='href-subli '> Home</Typography>
                </Link>
                <Link to='/sobre'  >
                <Typography className='href-subli '> Sobre</Typography>
                </Link>
                <Link to='/postagens'  >
                <Typography className='href-subli '> Postagens</Typography>
                </Link>
                <Link to='/formularioPostagem'  >
                <Typography className='href-subli '>Cadastrar Postagem</Typography>
                </Link>
                <Link to='/temas'  >
                <Typography className='href-subli '>Temas</Typography>
                </Link>
                <Link to='/formularioTema'  >
                <Typography className='href-subli '> cadastrar tema</Typography>
                </Link>
                <Link to='/Contato'  >
                <Typography className='href-subli '>Contato</Typography>
                </Link>
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