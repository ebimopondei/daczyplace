import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <div className='bg-black/90 py-32'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='py-20'>
            <div className=''>
                <h3 className='text-2xl md:text-6xl font-bold text-primary text-center'>Testimonials</h3>
                <div className='w-11/12 md:w-6/12  mx-auto text-center mt-4'>
                    <p className='md:text-2xl font-light tracking-widest md:leading-10'>They were extremely accommodating and allowed us to check
                        in early at like 10am. We got to the apartment super early and I didn't
                        want to wait. So this was a big plus. The service was exceptional
                        as well. Would definitely send a friend there.
                    </p>
                    <h4 className='mt-10'>- Amanda Akuchinyelu</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='py-20'>
            <div className=''>
                <h3 className='text-2xl md:text-6xl font-bold text-primary text-center'>Testimonials</h3>
                <div className='w-11/12 md:w-6/12  mx-auto text-center mt-4'>
                    <p className='md:text-2xl font-light tracking-widest md:leading-10'>They were extremely accommodating and allowed us to check
                        in early at like 10am. We got to the apartment super early and I didn't
                        want to wait. So this was a big plus. The service was exceptional
                        as well. Would definitely send a friend there.
                    </p>
                    <h4 className='mt-10'>- Amanda Akuchinyelu</h4>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
