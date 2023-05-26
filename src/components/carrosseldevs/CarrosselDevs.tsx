import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarrosselDevs.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

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
                    delay: 200000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiperDev"
            >

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="src\assets\images\iconExemplo.png" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit sit laboriosam ad perspiciatis minus tempore optio harum incidunt aliquid laborum deleniti laudantium, nostrum deserunt, repellendus aut ratione, ut placeat.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Fulano</h5>
                                <h6><br /> Desenvolvedor FullStack Jr.</h6>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="src\assets\images\iconExemplo.png" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit sit laboriosam ad perspiciatis minus tempore optio harum incidunt aliquid laborum deleniti laudantium, nostrum deserunt, repellendus aut ratione, ut placeat.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Fulano</h5>
                                <h6><br /> Desenvolvedor FullStack Jr.</h6>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="src\assets\images\iconExemplo.png" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit sit laboriosam ad perspiciatis minus tempore optio harum incidunt aliquid laborum deleniti laudantium, nostrum deserunt, repellendus aut ratione, ut placeat.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Fulano</h5>
                                <h6><br /> Desenvolvedor FullStack Jr.</h6>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide className="slideDev">
                    <Grid className='cardDev' item xs={12} sm={12} container>
                        <Grid className='imgDev' item xs={12} sm={12} container>
                            <img src="src\assets\images\iconExemplo.png" alt="" />
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit sit laboriosam ad perspiciatis minus tempore optio harum incidunt aliquid laborum deleniti laudantium, nostrum deserunt, repellendus aut ratione, ut placeat.</p>
                        </Grid>
                        <Grid className='textoSlideDev' item xs={12} sm={12} container>
                            <Box className="subtitulosDevs">
                                <h5>Fulano</h5>
                                <h6><br /> Desenvolvedor FullStack Jr.</h6>
                            </Box>
                        </Grid>
                    </Grid>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default CarrosselDevs