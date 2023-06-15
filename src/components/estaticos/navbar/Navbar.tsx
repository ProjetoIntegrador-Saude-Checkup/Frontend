import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Action';
import { toast } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState['tokens']>((state) => state.tokens);
    const navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        navigate('/login');
    }

    const handleSmoothScroll = () => {
        scroll.scrollTo(2570);
    };

    const handleLinkClick = () => {
        navigate('/home');
        setTimeout(handleSmoothScroll, 1000);
    };

    let navbarComponent = null;

    if (token !== '') {
        navbarComponent = (
            <AppBar position="static" className="nav">
                <Toolbar variant="regular">
                    <Box>
                        <img src="https://i.im.ge/2023/06/10/iFkj1Y.Logocoracao.png" alt="Imagem" width="70px" height="70px" />
                    </Box>
                    <Box display="flex" mx={4} className="cursor">
                        <Link to="/home" className="text-decorator-none">
                            <Typography variant="h6">Home</Typography>
                        </Link>
                        <Link to="/postagens" className="text-decorator-none">
                            <Typography variant="h6">Postagens</Typography>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Typography variant="h6">Temas</Typography>
                        </Link>
                        <Link to="/perfil" className="text-decorator-none">
                            <Typography variant="h6">Perfil</Typography>
                        </Link>
                        <Typography variant="h6" onClick={handleLinkClick} className="text-decorator-none">
                            Desenvolvedores
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <Box mx={4}>
                            <Button onClick={goLogout} variant="outlined" className="box2">
                                Sair
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;
