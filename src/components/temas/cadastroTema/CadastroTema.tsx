import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button, withStyles, Box } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Action';

//text estilizado
const StyledTitle = withStyles({
    root: {
        color: '#155263',
        paddingTop: '3rem',
        paddingBottom: '1rem',
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
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
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

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();

    const dispatch = useDispatch()


    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    const [tema, setTema] = useState<Tema>({
        id: 0,
        assunto: '',
        status: true,
        data: '',
        postagens: []

    })

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        try {
            await buscaId(`/temas/${id}`, setTema, {
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

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema atualizado com sucesso!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error: any) {
                if (error.response?.status === 403) {
                    dispatch(addToken(''))
                } else {
                    toast.error("Erro ao Atualizar o Tema", {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: 'colored',
                        progress: undefined,
                    });
                }
            }
        } else {
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema cadastrado com sucesso!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error: any) {
                if (error.response?.status === 403) {
                    dispatch(addToken(''))
                } else {
                    toast.error("Erro ao Cadastrar o Tema", {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: 'colored',
                        progress: undefined,
                    });
                }
            }
        }
        back()

    }

    function back() {
        navigate('/temas')
    }


    return (
        <Box marginTop={20}>
        <Container maxWidth="sm">
            <Box className='temaForm' paddingX={8} borderRadius={4} border={1}>
            <form onSubmit={onSubmit}>
                <StyledTitle variant="h4">Cadastrar Tema</StyledTitle>
                <FormStyled value={tema.assunto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="assunto" label="assunto" variant="outlined" name="assunto" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='btnEnviar'>
                    Enviar
                </Button>
            </form>
            </Box>
        </Container>
        </Box>
    )
}

export default CadastroTema;