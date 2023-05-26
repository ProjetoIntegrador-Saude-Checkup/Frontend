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
                            <img src="https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg?w=2000" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Tema</h5>
                            <h4>Titulo</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat ratione? Ex, nemo expedita. Delectus illo praesentium qui adipisci hic dolores harum, nostrum sequi placeat? Omnis sunt temporibus expedita voluptate.</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg?w=2000" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Tema</h5>
                            <h4>Titulo</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat ratione? Ex, nemo expedita. Delectus illo praesentium qui adipisci hic dolores harum, nostrum sequi placeat? Omnis sunt temporibus expedita voluptate.</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg?w=2000" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Tema</h5>
                            <h4>Titulo</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat ratione? Ex, nemo expedita. Delectus illo praesentium qui adipisci hic dolores harum, nostrum sequi placeat? Omnis sunt temporibus expedita voluptate.</p>
                            <Link to='/cadastro'>
                                <button className="botaoHomePosts"><span>Ler mais </span></button>
                            </Link>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <Grid className='cardPost' item xs={12} sm={12} container>
                        <Grid item xs={12} sm={6} container>
                            <img src="https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg?w=2000" alt="" />
                        </Grid>
                        <Grid className='textoSlide' item xs={12} sm={6} container>
                            <h5 >Tema</h5>
                            <h4>Titulo</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat ratione? Ex, nemo expedita. Delectus illo praesentium qui adipisci hic dolores harum, nostrum sequi placeat? Omnis sunt temporibus expedita voluptate.</p>
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