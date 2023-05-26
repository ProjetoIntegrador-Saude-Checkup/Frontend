import { Grid, Box } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
import SobreProjeto from '../../components/seçoes/sobreProjeto/SobreProjeto';
import HomePosts from '../../components/seçoes/homePosts/HomePosts';
import Devs from '../../components/seçoes/desenvolvedores/Devs';

function Home() {
    return (
        <>
            <Grid className='background' container direction='row'>
                <div className='retanguloMenor'></div>
                <div className='retanguloMaior'></div>
                <div className='formatos'><img src="src\assets\images\formatos.png" alt="" /></div>
                <Grid className='home' item xs={12} sm={12} container>
                    <Grid className='textoHome' item xs={12} sm={6} >
                        <Box>
                            <h5>Bem-vindo(a)</h5>
                            <h1>Conheça a Saúde-Checkup</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam beatae sequi laboriosam pariatur iusto ipsa impedit accusantium quo voluptatibus aliquam consectetur saepe voluptas ea adipisci libero, iste, laborum tenetur magni?</p>
                        </Box>
                        <Box>
                            <Link to='/cadastro'>
                                <button className="botaoCadastro"><span>Cadastre-se</span></button>
                            </Link>
                            <Link to='/sobre'>
                                <button className="botaoSobre"><span>Saiba mais</span></button>
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
            <Devs />
        </>
    );
}

export default Home;