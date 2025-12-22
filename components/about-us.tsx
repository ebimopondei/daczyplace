import Image from "next/image";
import MotionCountUp from "./motion-count-up";
import { useInView } from "react-intersection-observer";


export default function AboutUs(){
    const { ref, inView } = useInView({
        triggerOnce: false,   // animate only once
        threshold: 0.3,      // 30% visible before triggering
        delay: 2000,

    });

    const stats = [
        {
            amount: 2,
            title: "Apartments"
        },
        {
            amount: 1,
            title: "Locations"
        },

    ]
    return (
        <div id="about">
            <div className="flex flex-wrap justify-end items-center bg-[#2c220f] px-6 py-20 md:pl-20 md:pr-0 gap-10">
                <div className="md:basis-3/12">
                    <h2 className="text-background font-bold uppercase mb-3">About us</h2>
                    <h2 className="font-vogera text-primary font-bold text-4xl mb-5">Daczy's Place, Home is never missed</h2>
                    <p className="md:text-xl text-primary">At Daczy Place, we understand that being
                        away from home doesn't mean compromising
                        on comfort. We provide premium short-let
                        apartments and serviced accommodations.
                    </p>

                    <div ref={ref} className="grid grid-cols-2 font-vogera text-3xl">
                        {stats.map((stat)=>(
                            <div key={stat.title} className="mt-6">
                                <h3 className="text-5xl font-bold text-primary">
                                    <MotionCountUp from={0} to={stat.amount} duration={5} inView={inView} />+
                                </h3>
                                <p className="text-lg text-primary font-sans font-semibold">{stat.title}</p>
                            </div>
                        ))}
                    </div>

                    <button className="cursor-pointer hover:bg-primary-alt px-8 py-3 mt-10 bg-primary text-dark font-semibold text-2xl">Book Now</button>
                </div>
                <div className="basis-full md:basis-8/12">
                    <div className="grid md:grid-cols-5 gap-6">
                        <div className="rounded-2xl overflow-hidden relative h-64 md:h-full md:row-span-2 col-span-2 w-full">
                            <Image
                            src="/images/IMG_8730.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative w-full h-64 col-span-2">
                            <Image
                            src="/images/IMG_8638.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative w-full h-64">
                            <Image
                            src="/images/IMG_8619.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative w-full h-64">
                            <Image
                            src="/images/IMG_8697.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative w-full h-64 col-span-2 md:col-span-1">
                            <Image
                            src="/images/IMG_8634.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden hidden md:block relative w-full h-64">
                            <Image
                            src="/images/IMG_8709.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}