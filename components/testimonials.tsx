import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
    const testimonials = [
    {
        message: "Booking was incredibly smooth, and the team's communication was excellent from start to finish. The apartment itself was pristine, exactly as advertised, and the self check-in guide was flawless. Will definitely use this service again!",
        user: "David Ezenwa"
    },
    {
        message: "The property was immaculate—truly hotel-level clean with all the amenities needed for a week-long stay. The central location made accessing the city a breeze. Far superior to any corporate hotel I've stayed in.",
        user: "Lara Bello"
    },
    {
        message: "Exceptional service! I needed to extend my stay last minute, and the customer support was quick, accommodating, and handled the change seamlessly. They really went above and beyond to make things easy.",
        user: "Chisom Nnadi"
    },
    {
        message: "Perfect for business travel. Reliable Wi-Fi, a comfortable workspace, and a quiet environment. It felt like a home away from home, which is exactly what I needed after long work days.",
        user: "Mark G. (Tech Consultant)"
    },
    {
        message: "The value we got for the price was unbelievable. A stylish, spacious apartment in a secure neighborhood. It was the ideal base for our family vacation. Highly recommend for anyone traveling with kids.",
        user: "Aisha Tukur"
    },
    {
        message: "They were extremely accommodating and allowed us to check in early at like 10am. We got to the apartment super early and I didn't want to wait. So this was a big plus. The service was exceptional as well. Would definitely send a friend there.",
        user: "Amanda Akuchinyelu"
    },
]
  return (
    <div id='testimonial' className='bg-black/90 py-32'>
        <div>
            <h3 className='text-2xl md:text-6xl font-bold text-primary text-center'>Testimonials</h3>
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
                { testimonials.map(testimony => (
                    <SwiperSlide className='py-20'>
                        <div>
                            <div className='w-11/12 md:w-6/12  mx-auto text-center mt-4'>
                                <p className='md:text-2xl font-light tracking-widest md:leading-10'>{testimony.message}</p>
                                <h4 className='mt-10 text-primary-alt text-lg font-bold'>- {testimony.user} </h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
}
