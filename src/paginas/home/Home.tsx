import { Grid, Box } from '@material-ui/core';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import SobreProjeto from '../../components/seçoes/sobreProjeto/SobreProjeto';
import HomePosts from '../../components/seçoes/homePosts/HomePosts';
import Devs from '../../components/seçoes/desenvolvedores/Devs';
import { UserState } from '../../store/token/Reducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


function Home() {


    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

  
  
    const isLoggedIn = !!token ;
    
    return (
        <><div className="marge">
            <Grid className='background' container direction='row'>
                <div className='retanguloMenor'></div>
                <div className='retanguloMaior'></div>
                <div className='formatos'><img src="https://i.im.ge/2023/06/12/i7LhaP.formatos.png" alt="" /></div>
                <Grid className='home' item xs={12} sm={12} container>
                    <Grid className='textoHome' item xs={12} sm={6} >
                        <Box>
                            <h5>Bem-vindo(a)</h5>
                            <h1>Conheça a Saúde Check-Up</h1>

                        </Box>
                        <Box className='div-botoes'>
                            {isLoggedIn && (
                                    <Link to="/perfil">
                                        <button className="botaoPerfil">
                                            <span>Meu Perfil</span>
                                        </button>
                                    </Link>
                                )}
                                {!isLoggedIn && (
                                    <>
                                        <Link to="/cadastrousuario">
                                            <button className="botaoCadastro">
                                                <span>Cadastre-se</span>
                                            </button>
                                        </Link>
                                        <Link to="/login">
                                            <button className="botaoSobre">
                                                <span>Login</span>
                                            </button>
                                        </Link>
                                    </>
                                )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box className='imagemHome'>
                            <img src="src\assets\images\logo.png" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <SobreProjeto />
            <HomePosts />
            <Devs key="desenvolvedores"/>
            </div>
        </>
    );
}

export default Home;