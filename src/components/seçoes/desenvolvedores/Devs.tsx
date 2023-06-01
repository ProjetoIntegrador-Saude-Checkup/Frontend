import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Carrossel from '../../carrossel/Carrossel';
import './Devs.css'
import CarrosselDevs from '../../carrosseldevs/CarrosselDevs';

function Devs() {
    return (
        <>
            <Grid className='containerDevs' container>
                <Grid className='textoDevs' item xs={12} sm={12} >
                    <Box>
                        <h2>Sobre os Desenvolvedores Full Stack</h2>
                        <p>Como desenvolvedores, buscamos solucionar um anseio da sociedade. Desenvolvendo uma rede social com intuito de informar e conscientizar a população sobre uma questão tão importante, que é a saúde. Projeto elaborado, graças aos conhecimentos técnicos e comportamentais, em destaque para o trabalho em equipe e comunicação assertiva, adquiridos ao longo do programa e aplicados com muita dedicação, atenção e persistência. Logo abaixo, deixamos nossos perfis, fiquem a vontade para entrarem em contanto e tirarem quaisquer dúvidas, agradecemos pela atenção!</p>
                    </Box>
                </Grid>
                <Grid className='carrosselDevs' item xs={12} sm={12} >
                    <Box>
                        <CarrosselDevs />
                    </Box>
                </Grid>
            </Grid >
        </>
    );
}

export default Devs;