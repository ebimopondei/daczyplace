import Image from "next/image";
import { title } from "process";

export function Services(){

    const features = [
        {
            title: "Reliable Power",
            description: "24/7 solar backup ensuresuninterrupted electricity for your comfort",
            icon: "/svg/power.svg"
        },
        {
            title: "Internet (Starlink)",
            description: "Stay connected with fast, reliable WiFi in all our properties",
            icon: "/svg/internet.svg"
        },
        {
            title: "Smart Security",
            description: "24/7 security personnel and CCTV surveillance for your safety",
            icon: "/svg/security.svg"
        },
        {
            title: "Home Comfort",
            description: "Fully furnished with premium amenities that feel like home",
            icon: "/svg/comfort.svg"
        },
        {
            title: "Peaceful Environs",
            description: "Located in serene neighborhoods perfect for relaxation",
            icon: "/svg/seren.svg"
        },
        {
            title: "Flexible Booking",
            description: "Daily, weekly, or monthly stays with easy booking process",
            icon: "/svg/booking.svg"
        }
    ]
    return (
        <div id="services" className="bg-dark p-6 md:py-32">
            <div className="flex flex-wrap gap-20 items-center justify-between  md:px-40">

                <div className=" cursor-pointer basis-full md:basis-5/12 flex items-center justify-center rounded-2xl bg-[url('/images/play-vid.jpg')] h-120 md:h-150 bg-black/70 bg-blend-multiply  bg-cover">
                    <Image src="/svg/play-button.svg" alt="play button" width={64} height={64} className=" w-30 md:w-40 h-30 md:h-40"/>
                </div>
                <div className="basis-full md:basis-5/12 gap-y-10 md:gap-10  flex items-center flex-wrap  font-vogera justify-between">
                    { features.map((feature) => (
                        <div key={feature.title} className="basis-5/12">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src={feature.icon} alt="" width={10} height={10} className="w-8 h-8" />
                                <h3 className="text-primary text-sm md:text- w-10">{feature.title}</h3>
                            </div>
                            <p className="text-xs">{feature.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}