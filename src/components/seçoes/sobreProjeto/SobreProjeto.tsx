import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SobreProjeto.css'

function SobreProjeto() {
    return (
        <>
            <Grid className='containerProjeto' container direction='row' item xs={12} sm={12}>
                <Grid className='serviços' item xs={12} sm={7} >
                    <Box>
                        <div className='linha'></div>
                        <h2>Conecte-se com informações sobre saúde e bem-estar</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam beatae sequi laboriosam pariatur iusto ipsa impedit accusantium quo voluptatibus aliquam consectetur saepe voluptas ea adipisci libero, iste, laborum tenetur magni?</p>
                    </Box>
                </Grid>
                    <Grid className='cards' item xs={12} sm={2} >
                        <Box>
                            <img className='imgCards' src="src\assets\images\imgCard.png" alt="" />
                            <h5>Divulgações</h5>
                            <div className='linha2'></div>
                            <p>Campanhas de saúde e vacinação em um só lugar</p>
                        </Box>
                    </Grid>
                    <Grid className='cards' id="card2" item xs={12} sm={2} >
                        <Box>
                            <img className='imgCards' src="src\assets\images\imgCard2.png" alt="" />
                            <h5>Dicas</h5>
                            <div className='linha2'></div>
                            <p>Compartilhe dicas que colaboram para o bem-estar</p>
                        </Box>
                    </Grid>
            </Grid >
        </>
    );
}

export default SobreProjeto;