import PortraitVideo from "./video-component";
import { Bold, Home, Leaf, Sun, Webcam, Wifi } from "lucide-react";

export function Services(){

    const features = [
        {
            title: "Reliable Power",
            description: "24/7 solar backup ensuresuninterrupted electricity for your comfort",
            icon: Sun
        },
        {
            title: "Internet (Starlink)",
            description: "Stay connected with fast, reliable WiFi in all our properties",
            icon: Wifi
        },
        {
            title: "Smart Security",
            description: "24/7 security personnel and CCTV surveillance for your safety",
            icon: Webcam
        },
        {
            title: "Home Comfort",
            description: "Fully furnished with premium amenities that feel like home",
            icon: Home
        },
        {
            title: "Peaceful Environs",
            description: "Located in serene neighborhoods perfect for relaxation",
            icon: Leaf
        },
        {
            title: "Flexible Booking",
            description: "Daily, weekly, or monthly stays with easy booking process",
            icon: Bold
        }
    ]
    return (
        <div id="services" className="bg-white p-6 md:py-32">
            <div className="flex flex-wrap gap-20 items-center justify-between  md:pl-40 md:pr-28">

                <div className=" cursor-pointer basis-full md:basis-5/12  items-center justify-center rounded-2xl bg-[url('/images/play-vid.jpg')] h-120 md:h-150 bg-black/70 bg-blend-multiply  bg-cover">
                    <PortraitVideo src="/video/output.mp4" poster="/images/daczy-vid-placeholder.png" />  
                </div>
                <div className="basis-full md:basis-6/12  gap-y-10 md:gap-10  flex items-center flex-wrap  font-vogera justify-between">
                    { features.map((feature) => (
                        <div key={feature.title} className="basis-5/12">
                            <div className="flex items-center gap-3 mb-4">
                                {/* <Image src={feature.icon} alt="" width={10} height={10} className="w-8 h-8 text-black" /> */}
                                <feature.icon color="black" size={24} />
                                <h3 className="text-primary text-sm md:text-xl w-10">{feature.title}</h3>
                            </div>
                            <p className="text-xs md:text-lg text-black">{feature.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}