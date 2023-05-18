// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
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
                className="mySwiper"
            >

                <SwiperSlide>
                <img src="http://pastoraldasaudecnbb.com.br/wp-content/uploads/2021/04/DiaMundialdaSaude2021.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="http://pastoraldasaudecnbb.com.br/wp-content/uploads/2021/04/DiaMundialdaSaude2021.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="http://pastoraldasaudecnbb.com.br/wp-content/uploads/2021/04/DiaMundialdaSaude2021.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="http://pastoraldasaudecnbb.com.br/wp-content/uploads/2021/04/DiaMundialdaSaude2021.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel