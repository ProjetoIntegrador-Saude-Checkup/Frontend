import React , {useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField, withStyles } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

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
            color: '#762672',
        },
        '& label': {
            color: '#547f8a',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#762672',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor:'rgba(255, 255, 255, 0.5)',
            '& fieldset': {
                borderColor: '#7a959c',
            },
            '&:hover fieldset': {
                borderColor: '#762672',
                backgroundColor:'rgba(255, 255, 255, 0.24)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#762672',
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
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuário cadastrado com sucesso!')
        }else{
            alert('Dados inválidos. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container className='bg-08-blue' direction='row'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6}>
                <Box paddingX={8} borderRadius={3} border={1} className='cadastroForm' marginRight={5} marginLeft={8}>
                    <form onSubmit={onSubmit}>
                        <StyledTitle variant='h3' gutterBottom color='textPrimary' align='center' className='textos2'>Cadastrar</StyledTitle>
                        <FormStyled value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <FormStyled value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <FormStyled value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='foto' label='foto' variant='outlined' name='foto' margin='normal'fullWidth />
                        <FormStyled value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <FormStyled value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' style={{backgroundColor:'#537A56', color:'white'}}>
                                    Cadastrar
                            </Button>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className='btnCancelar' color='secondary'>
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;