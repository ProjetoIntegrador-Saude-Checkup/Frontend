import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrossel.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function Carrossel() {
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
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://cdn.progresso.com.br/img/pc/780/530/dn_arquivo/2021/03/image26690.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Vacinação</h5>
                            <h4>Vacina contra a gripe</h4>
  
                            <p>A vacina é oferecida todos os anos, antes do inverno, período em que as doenças respiratórias são mais comuns. Os imunizantes têm perfil de segurança excelente e, geralmente, são bem tolerados.</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://static1.minhavida.com.br/articles/4a/e3/31/8d/chekup-article-1.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Exame</h5>
                            <h4>Porque fazer check-up</h4>
                            <p>A realização do check-up é muito importante, pois permite que, através de uma série de exames simples, o estado de saúde do paciente seja avaliado de forma completa. O check-up atua de forma preventiva, auxiliando na detecção de possíveis alterações no organismo ou doenças.</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://telemedicinamorsch.com.br/wp-content/uploads/2022/09/protocolo-de-seguranca-do-paciente-telemedicina-morsch.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Saúde</h5>
                            <h4>Acompanhamento médico</h4>
                            <p>Um dos melhores benefícios de ser acompanhado por um médico é sentir que o atendimento é personalizado, ou seja, seu histórico é levado em conta e pode funcionar como um mapa para prevenir futuros problemas de saúde</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://www.saocamiloimagem.com.br/wp-content/uploads/2020/04/Exames-de-Imagem.jpg" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Exame</h5>
                            <h4>Exames de imagem</h4>
                            <p>Os exames de imagem são aplicados para o acompanhamento de doenças crônicas, descobrimento de doenças, visualização de órgãos, confirmação de cura de doenças, verificação do resultado de cirurgias, entre outros.</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel