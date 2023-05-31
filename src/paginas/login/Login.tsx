import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button, withStyles } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../store/token/Action';

//text estilizado
const StyledTitle = withStyles({
    root: {
        color: '#155263',
        paddingTop: '3rem',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})(Typography);

//textfield estilizado
const FormStyled = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#762672',
        },
        '& label': {
            color: '#547f8a',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#762672',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '& fieldset': {
                borderColor: '#7a959c',
            },
            '&:hover fieldset': {
                borderColor: '#762672',
                backgroundColor: 'rgba(255, 255, 255, 0.24)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#762672',
            },
        },
    }
})(TextField);

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState("");

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            //console.log("Token:", token)//(Para visualizar o token com o reducer )
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        }
    }

    return (
        <Grid className='bg-08-blue' container direction='row'>
            <Grid xs={5} >
                <Box paddingX={8} className='loginForm' borderRadius={3} border={1} marginLeft={10} >
                    <form onSubmit={onSubmit}>
                        <StyledTitle variant='h3' gutterBottom>Entrar</StyledTitle>
                        <FormStyled value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <FormStyled value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' style={{ backgroundColor: '#537A56', color: 'white' }}>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={3}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' className='textos1'>
                            <Typography variant='subtitle1' gutterBottom className='textos1'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}>
<Box  className='imagem' marginLeft={12}>
    
</Box>
            </Grid>
        </Grid>
    );
}

export default Login;