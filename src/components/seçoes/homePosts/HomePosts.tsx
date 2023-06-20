import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Carrossel from '../../carrossel/Carrossel';
import './HomePosts.css'

function HomePosts() {
    return (
        <>
            <Grid className='containerHomePosts' container>
                <Grid className='textoHomePosts' item xs={12} sm={6} >
                    <Box>
                        <h6>Saúde Check-Up</h6>
                        <h2>Confira nossas postagens</h2>
                        <p>Deseja saber dicas de saúde para cuidar bem de você e de sua família, a fim de conquistar maior bem-estar e qualidade de vida? Aqui, você tem acesso a dicas de saúde relacionadas a alimentação, atividade física, saúde e bem-estar e também diversas curiosidades.

</p>
                    </Box>
                </Grid>
                <Grid className='carrosselPosts' item xs={12} sm={12} >
                    <Box>
                        <Carrossel />
                    </Box>
                </Grid>
            </Grid >
        </>
    );
}

export default HomePosts;