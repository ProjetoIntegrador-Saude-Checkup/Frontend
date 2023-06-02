import { Grid, Box } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
import SobreProjeto from '../../components/seçoes/sobreProjeto/SobreProjeto';
import HomePosts from '../../components/seçoes/homePosts/HomePosts';
import Devs from '../../components/seçoes/desenvolvedores/Devs';

function Home() {
    return (
        <><div className="marge">
            <Grid className='background' container direction='row'>
                <div className='formatos'><img src="src\assets\images\formatos.png" alt="" /></div>
                <Grid className='home' item xs={12} sm={12} container>
                    <Grid className='textoHome' item xs={12} sm={6} >
                        <Box>
                            <h5>Bem-vindo(a)</h5>
                            <h1>Conheça a Saúde-Checkup</h1>
                            
                        </Box>
                        <Box>
                        <Link to='/cadastrousuario'>
                                <button className="botaoCadastro"><span>Cadastre-se</span></button>
                            </Link>
                            <Link to='/login'>
                                <button className="botaoSobre"><span>Login</span></button>
                            </Link>
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
            <Devs /></div>
        </>
    );
}

export default Home;