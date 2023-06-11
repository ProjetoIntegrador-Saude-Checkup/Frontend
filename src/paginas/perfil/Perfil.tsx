import { Box, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import User from '../../models/User';
import { buscaId } from '../../services/Service';
import { UserState } from '../../store/token/Reducer';
import './Perfil.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { addToken } from '../../store/token/Action';
import AtualizarUsuario from '../../components/atualizarusuario/AtualizarUsuario';

function Perfil() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const id = useSelector<UserState, UserState['id']>((state) => state.id);

    const token = useSelector<UserState, UserState['tokens']>((state) => state.tokens);

    const [user, setUser] = useState<User>({
        id: +id,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
    });

    useEffect(() => {
        if (token === '') {
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
            navigate('/login');
        }
    }, [token]);

    async function findById(id: string) {
        try {
            await buscaId(`/usuarios/${id}`, setUser, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.response?.status === 403) {
                dispatch(addToken(''));
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const exibirFormulario = () => {
        setMostrarFormulario(true);
    };

    const renderizarFormulario = () => {
        if (mostrarFormulario) {
            return <AtualizarUsuario />;
        }
        return null;
    };

    const cardPerfilClass = `card-perfil ${mostrarFormulario ? 'expandido' : ''}`;

    return (
        <>
            <div className={`center-card ${mostrarFormulario ? 'expandido' : ''}`}>
                <Grid direction='row' className={cardPerfilClass}>
                    <Grid item xs={12} sm={3} className='card-perfil-imagem'>
                        <img src={user.foto} alt={user.nome} />
                        {mostrarFormulario && <div className='quadrado-verde'></div>}
                    </Grid>
                    <Grid item xs={12} sm={6} className='card-grid-info'>
                        <Box className='card-box-info'>
                            <div className='info-nome'>
                                <h5>Nome</h5>
                                <p>{user.nome}</p>
                            </div>
                            <div className='info-email'>
                                <h5>Email</h5>
                                <p>{user.usuario}</p>
                            </div>
                            <Box className='card-box-info-button'>
                                <Button
                                    onClick={exibirFormulario}
                                    style={{ backgroundColor: '#96bb7c' }}
                                    variant='contained'
                                    color='info'
                                >
                                    Editar Perfil
                                </Button>
                            </Box>
                            <div className='formulario'>
                                {renderizarFormulario()}
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </div >
        </>
    );
}

export default Perfil;