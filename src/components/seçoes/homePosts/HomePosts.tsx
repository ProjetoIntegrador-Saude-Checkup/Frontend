import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Carrossel from '../../carrossel/Carrossel';
import './HomePosts.css'

function HomePosts() {
    return (
        <>
            <Grid className='containerHomePosts' container>
                <Grid className='textoHomePosts' item xs={12} sm={7} >
                    <Box>
                        <h6>Rede Social</h6>
                        <h2>Confira nossas postagens</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id qui sint, beatae ipsa delectus. Expedita, ducimus! Laborum quae odit, veniam amet iste non tempore sit cum iure atque vero.</p>
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