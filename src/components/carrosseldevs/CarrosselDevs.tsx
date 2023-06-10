import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarrosselDevs.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";


import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from "@mui/icons-material";

function CarrosselDevs() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiperDev"
            >

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="https://i.im.ge/2023/06/10/iFkkpJ.imagemCamille.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Sou uma Desenvolvedora Java Júnior, formada como Técnico em Desenvolvimento de Sistemas.
                            Desenvolvi projetos utilizando diversas linguagens e tecnologias, tais como Java, SQL, Git, CSS, HTML, PHP, JavaScript, C#, Json. Assim como bibliotecas e frameworks como Bootstrap, Framework7, Spring, React.js e React Native.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Camille Bueno</h5>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Grid className='imgRedes' item xs={6} sm={6} container>
                                <a href="https://www.linkedin.com/in/camillepbueno/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
                            </a>         
                            <a href="https://github.com/CamillePB" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="https://i.im.ge/2023/06/10/iFkH2y.imagemGuilherme.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Desenvolvedor Full Stack, estudante de Análise e Desenvolvimento de Sistemas, com vivência em ambientes de equipes diversas com foco no desenvolvimento web e resolução de problemas, aplicando metodologias ágeis. Atuando tanto no Front-End, implementando React, como no Back-End de projetos utilizando o Spring e banco de dados, MySQL. </p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Guilherme Henrique</h5>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Grid className='imgRedes' item xs={6} sm={6} container>
                                <a href="https://www.linkedin.com/in/guilhermehenrique-lima/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
                            </a>         
                            <a href="https://github.com/guilhermehenriquelima" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="https://i.im.ge/2023/06/10/iFkvKz.imagemJeniffer.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Iniciei minha jornada profissional aos 16 anos, meu último trabalho foi no Hospital CEMA onde aprendi a ter um olhar clínico, flexibilidade e resolução de problemas, hoje estou transição de carreira para a área de tecnologia.
                            Sou formada como técnica de administração de empresas, tecnóloga em design gráfico e agora sou uma desenvolvedora Full Stack.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Jeniffer Souza</h5>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Grid className='imgRedes' item xs={6} sm={6} container>
                                <a href="https://www.linkedin.com/in/jeniffer-souza-ribeiro-8323971ab/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
                            </a>         
                            <a href="https://github.com/JenifferSR" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="https://i.im.ge/2023/06/10/iFk40F.imagemJoyce.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Tenho 20 anos. Sou uma Desenvolvedora Full Stack Junior, formada como Tecnólogo em Estética e Cosmética, e com cursos na área de Teste de Software.
                                Desenvolvi projetos utilizando diversas linguagens e tecnologias, tais como Java, SQL, Git, CSS, HTML, JavaScript, Json. Assim como bibliotecas e frameworks como Bootstrap, Framework7, Spring, React.js.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Joyce Caroline</h5>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Grid className='imgRedes' item xs={6} sm={6} container>
                                <a href="https://www.linkedin.com/in/joyce-caroline-rodrigues/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
                            </a>         
                            <a href="https://github.com/Carol20Joyce" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="https://i.im.ge/2023/06/10/iFkBcK.imagemLeticia.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Há um ano estudando o mundo da programação. Atualmente curso Ciência da Computação na UNICID e conclui cursos de programação, além do Bootcamp da Generation. Com  os meus conhecimentos sou capaz de construir apis, desenvolver sites completos e gerenciar bancos de dados.  
                                Profissional orientada a resultados com grande determinação para solucionar problemas.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Letícia Queiroga</h5>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Grid className='imgRedes' item xs={6} sm={6} container>
                                <a href="https://www.linkedin.com/in/leticiaqrg/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
                            </a>         
                            <a href="https://github.com/Letixs" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="https://i.im.ge/2023/06/10/iFzQC8.imagemStephany.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Sou uma jovem de 20 anos que depois do ensino médio foi se aventurar em Programação e informática.
                                Tenho habilidades de trabalhar em todas as partes de um projeto de software, desde a interface do usuário até o servidor e o banco de dados, combinando habilidades de front-end e back-end e tenho destaque em ser proativa e ter uma comunicação eficaz.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs" >
                                <h5>Stephany Camily</h5>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Grid className='imgRedes' item xs={6} sm={6} container>
                                <a href="https://www.linkedin.com/in/stephanycamily/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
                            </a>         
                            <a href="https://github.com/stefygrr" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default CarrosselDevs;


