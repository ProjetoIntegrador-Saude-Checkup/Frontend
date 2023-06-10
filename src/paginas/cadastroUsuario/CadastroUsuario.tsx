import React , {useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField, withStyles } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

//text estilizado
const StyledTitle = withStyles({
    root: {
        color: '#155263',
        paddingTop: '1.5rem', 
        textAlign:'center',
        fontWeight: 'bold'
    },
})(Typography);

//textfield estilizado
const FormStyled = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#62929E ',
        },
        '& label': {
            color: '#547f8a',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#62929E ',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor:'rgba(255, 255, 255, 0.5)',
            '& fieldset': {
                borderColor: '#7a959c',
            },
            '&:hover fieldset': {
                borderColor: '#62929E ',
                backgroundColor:'rgba(255, 255, 255, 0.24)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#62929E ',
            },
        },
}})(TextField);

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha == user.senha) {

            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuario cadastrado com sucesso', {
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
                toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
        } else {
            toast.error('As senhas digitadas não correspondem!', {
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

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validarEmail = emailRegex.test(user.usuario);

    const checaNome = user.nome.length > 0 && user.nome.length < 3
    const checaUsuario = !validarEmail && user.usuario.length > 0
    const checaSenha = user.senha.length > 0 && user.senha.length < 8
    const checaConfirmarSenha = confirmarSenha !== user.senha
    const checaVazio = user.nome.length === 0 || user.usuario.length === 0 || 
                user.senha.length === 0 || confirmarSenha.length === 0

    return (
        <Grid container className='bg-08-blue' direction='row'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6}>
                <Box paddingX={8} borderRadius={3} border={1} className='cadastroForm' marginRight={5} marginLeft={8}>
                    <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField
                            error={checaNome}
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            helperText={checaNome ? 'Digite um nome válido!' : ''} />
                        <TextField
                            error={checaUsuario}
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            helperText={checaUsuario ? 'Digite um e-mail válido!' : ''} />
                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            type='normal'
                            fullWidth />
                        <TextField
                            error={checaSenha}
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            helperText={checaSenha ? "A senha precisa ter no mínimo 8 caracteres" : ""} />
                        <TextField
                            error={checaConfirmarSenha}
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            helperText={checaConfirmarSenha ? 'As senhas não conferem!' : ''} />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='btncadastrar'
                                disabled={  checaNome || checaUsuario || checaSenha || 
                                            checaConfirmarSenha || checaVazio ? true : false}>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario