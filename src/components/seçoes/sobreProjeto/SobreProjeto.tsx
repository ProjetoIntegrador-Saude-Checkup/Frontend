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
                        <h2>Sobre Saúde Check-Up</h2>
                        <p>O projeto tem como intuito informar e manter a população atualizada, essa rede social irá aumentar a veracidade das informações, promover o bem-estar e poder atingir um maior número de pessoas com informações sobre saúde e bem estar. 
Parte da população não tem esse acesso às informações causando impacto na saúde. Sendo necessário uma plataforma que contenha informações sobre eventos, campanha de vacina, exames, atendimentos e locais onde poderão encontrar atendimento em hospitais e postos de saúde.
</p>
                    </Box>
                </Grid>
                    <Grid className='cards' item xs={12} sm={2} >
                        <Box>
                            <img className='imgCards' src="https://i.im.ge/2023/06/10/iFz2ep.imgCard.png" alt="" />
                            <h5>Divulgações</h5>
                            <div className='linha2'></div>
                            <p>Campanhas de saúde e vacinação em um só lugar.</p>
                        </Box>
                    </Grid>
                    <Grid className='cards' id="card2" item xs={12} sm={2} >
                        <Box>
                            <img className='imgCards' src="https://i.im.ge/2023/06/10/iFzO0C.imgCard2.png" alt="" />
                            <h5>Dicas</h5>
                            <div className='linha2'></div>
                            <p>Compartilhe dicas que colaboram para o bem-estar.</p>
                        </Box>
                    </Grid>
            </Grid >
        </>
    );
}

export default SobreProjeto;