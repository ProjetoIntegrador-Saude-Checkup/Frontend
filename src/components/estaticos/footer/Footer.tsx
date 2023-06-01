import react from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import './Footer.css';
import { GitHub } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Action';

function Footer() {
    let navigate = useNavigate();

    const dispatch = useDispatch()
    
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    
    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado")
        navigate('/login')
    }

    var footerComponent;

if (token !== '') {
    footerComponent =
<Grid id="meu-footer" className='footer' style={{ backgroundColor: "#ffffff", width: "100%", margin: 0 }} spacing={3} container direction="row" justifyContent="center">

{/* Sobre o projeto */}
<Grid item xs={5}>
    <Box>
        <h4 className='titulos'>SOBRE O PROJETO</h4>
        <p className="texto">
        O projeto consiste em uma rede social que tem como objetivo informar e atualizar a cidade, aumentando a veracidade das informações e promovendo o bem-estar da população. Essa plataforma busca atingir um maior número de pessoas, oferecendo informações sobre saúde, eventos, campanhas de vacinação, exames e locais de atendimento médico em hospitais e postos de saúde. Isso é necessário devido à falta de acesso a informações que afeta a saúde da população. </p>
    </Box>
</Grid>

{/* lista de tecnologias */}
<Grid item xs={3}>
    <Box>
        <h4 className='titulos'>TECNOLOGIAS UTILIZADAS</h4>
        <p className="texto">
            Linguagem Java 
        </p>
        <p className="texto">
            JavaScript
        </p>
        <p className="texto">
            React
        </p>
        <p className="texto">
            Css
        </p>
        <p className="texto">
            MySQL
        </p>
    </Box>
</Grid>

{/* redes */}
<Grid item xs={3} >
    <Box style={{ marginRight: "0px" }}>
        <h4 className='titulos'>REDES</h4>
        <Box className='redes' style={{ display: "flex" }}>
            <p className='texto1'>Siga-nos</p>
            <Box className='redesIcon'>
                <a href="mailto:saudecheckup03@gmail.com" target="_blank">
                    <EmailIcon style={{ fontSize: 49, color: "537a56" }} />
                </a>
                <a className='iconGit' href="https://github.com/ProjetoIntegrador-Saude-Checkup" target="_blank">
                    <GitHubIcon style={{ fontSize: 48, color: "537a56" }} />
                </a>
            </Box>
        </Box>
    </Box>
</Grid>

{/* copyright */}
<Grid item xs={11} style={{ marginBottom: "-7px" }}>
    <hr></hr>
    <Box justifyContent='center' style={{ paddingTop: "4px" }}>
        <Typography variant="subtitle2" align="center" style={{ color: "black" }}>© 2023 Copyright: SaúdeCheckup</Typography>
    </Box>
</Grid>
</Grid>
}
return (
    <>
    {footerComponent}
    </>
)
}

export default Footer;