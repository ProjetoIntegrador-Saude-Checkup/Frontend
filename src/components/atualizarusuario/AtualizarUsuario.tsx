import { Box, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AtualizarUsuario.css';
import { buscaId, put } from '../../services/Service';
import { UserState } from "../../store/token/Reducer";
import { addToken } from "../../store/token/Action";
import User from "../../models/User";

function AtualizarUsuario() {

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const [user, setUser] = useState<User>({
        id: +id,
        nome: '',
        usuario: '',
        senha: ' ',
        foto: ''
    })

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    useEffect(() => {
        if (token === "") {
            toast.error('Usuário não autenticado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)

        }
    }, [id])

    async function findById(id: string) {
        try {
            await buscaId(`/usuarios/${id}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })

        } catch (error: any) {
            if (error.response?.status === 403) {
                dispatch(addToken(''))
            }
        }
    }

    function updatedUsuario(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })


    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            if (id !== undefined) {
                console.log(user)
                put(`/usuarios/atualizar`, user, setUser, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Usuario atualizado com sucesso', {
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
            setUser({ ...user, senha: "" })
            setConfirmarSenha("")
        }

        back()

    }

    function back() {
        setUser({ ...user, senha: "" })
        setConfirmarSenha("")
        navigate('/perfil')
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validarEmail = emailRegex.test(user.usuario);

    const checaNome = user.nome.length > 0 && user.nome.length < 3
    const checaUsuario = !validarEmail && user.usuario.length > 0
    const checaVazio = user.nome.length === 0 || user.usuario.length === 0 ||
        confirmarSenha.length === 0

    return (

        <Box marginTop={8}>
            <Container maxWidth="sm">
                <Box className='form-user' paddingX={8} paddingY={3} borderRadius={4} border={1}>

                    <form className="input-user" onSubmit={onSubmit}>
                        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Atualizar dados</Typography>
                        <TextField
                            error={checaNome}
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}
                            id="nome"
                            label="nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                            helperText={checaNome ? 'Digite um nome válido!' : ''}
                        />
                        <TextField
                            error={checaUsuario}
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}
                            id="usuario"
                            label="usuario"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                            helperText={checaUsuario ? 'Digite um e-mail válido!' : ''}
                            disabled
                        />
                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}
                            id="foto"
                            label="foto"
                            variant="outlined"
                            name="foto"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            error={user.senha !== undefined ? user.senha.length > 0 && user.senha.length < 8 : false}
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)}
                            id="senha"
                            label="senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type='password'
                            fullWidth
                            helperText={user.senha !== undefined && user.senha.length > 0 && user.senha.length < 8 ? "A senha precisa ter no mínimo 8 caracteres" : ""}
                        />
                        <TextField
                            error={user.senha !== undefined && confirmarSenha !== user.senha ? true : false}
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            helperText={user.senha !== undefined && confirmarSenha !== user.senha ? 'As senhas não conferem!' : ''}
                        />
                        <Box style={{justifyContent:"center"}}>
                            <Button type="submit" variant="contained"
                                disabled={checaNome || checaUsuario ||
                                    confirmarSenha !== user.senha || checaVazio ? true : false}
                                    className={checaNome || checaUsuario || confirmarSenha !== user.senha || checaVazio ? '' : 'btn-atualizar'}

                            >
                                Atualizar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>

    )
}

export default AtualizarUsuario;