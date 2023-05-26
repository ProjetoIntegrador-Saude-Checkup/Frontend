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
                        <h2>Sobre os desenvolvedores</h2>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id qui sint, beatae ipsa delectus. Expedita, ducimus! Laborum quae odit, veniam amet iste non tempore sit cum iure atque vero.</p>
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