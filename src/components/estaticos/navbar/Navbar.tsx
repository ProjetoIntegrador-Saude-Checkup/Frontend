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
    var navbarComponent;
    
    if(token !== ''){
        navbarComponent =
            <AppBar position="static" className='nav'>
                <Toolbar variant="regular">
                    
                        <Box >
                            <img src={imagem} alt="Imagem" width="70px" height="70px" />
                        </Box>
                        <Box display="flex" mx={4} className='cursor'  >
                            <Link to='/home' className='text-decorator-none'>
                                <Typography variant="h6" >
                                    Home
                                </Typography>
                            </Link>
                            <Link to="/postagens" className="text-decorator-none">
                                <Typography variant="h6" >
                                    Postagens
                                </Typography>
                            </Link>
                            <Link to="/temas" className="text-decorator-none">
                                <Typography variant="h6" >
                                    Temas
                                </Typography>
                            </Link>
                            <Link to="/perfil" className="text-decorator-none" >
                                <Typography variant="h6" >
                                    Perfil
                                </Typography>          
                                
                                </Link>

                        </Box>
                    <Box display="flex" >
                        <Box mx={4}  >
                        <Link to="/login">
                            <Button onClick={goLogout} variant="outlined"className="box2" >Sair</Button>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
}
return (
    <>
    {navbarComponent}
    </>
)
}

export default Navbar;