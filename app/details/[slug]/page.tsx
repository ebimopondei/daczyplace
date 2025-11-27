import Footer from "@/components/footer";
import { rooms } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";

export default async function ApartmentDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}){

    const { slug } = await params
    const room = rooms.find((room) => room.slug === slug)

    const icons: { [key: string]: string } = {
        'power': '/svg/power.svg',
        'wifi': '/svg/internet.svg',
        'food': '/svg/food.svg',
        'bed': '/svg/bed.svg',
    }   
    
    return (
        <div className="  bg-white min-h-screen text-black">
            <div className="md:px-20 px-4 py-12">
                <div>
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                        <div className="overflow-hidden relative h-full row-span-2 col-span-2 w-full">
                            <Image
                            src="/images/IMG_8653.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64">
                            <Image
                            src="/images/IMG_8638.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64">
                            <Image
                            src="/images/IMG_8619.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64">
                            <Image
                            src="/images/IMG_8697.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64 col-span-1">
                            <Image
                            src="/images/IMG_8634.svg"
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex items-start justify-between flex-wrap mt-8 md:mt-14 gap-10">
                        <div className="basis-full md:basis-[47%]">
                            <div className="border-b border-primary pb-6">
                                <div>
                                    <h1 className="text-lg md:text-2xl font-semibold">{room?.title}</h1>
                                    <p className="text-xs text-primary">{room?.address}</p>
                                </div>

                                <div>
                                    <h2 className="font-semibold text-sm">Apartment Features</h2>
                                    <ul className="flex flex-wrap gap-2">
                                        {room?.features.map((feature) => {
                                            return(
                                                <li key={feature.label} className="flex items-center gap-1 text-xs">
                                                    <Image color="black" src={icons[feature.icon] as string} alt={feature.icon} width={18} height={18}/>
                                                    {feature.label}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>


                            </div>

                            <div className="my-6">
                                <h3>Description</h3>
                                <p className="text-xs text-justify">{room?.description}</p>
                            </div>
                        </div>

                        <div className="basis-full md:basis-[47%]">
                            <div className="text-black">
                                <p className="text-3xl font-semibold"><span className="line-through">N</span>{room?.price}<span className="text-sm">/Night</span></p>
                            </div>
                            <div className="p-4 border mt-4 text-lg">
                                <p className="font-semibold">Guests</p>
                                <p className="font-semibold">{room?.guests}</p>
                            </div>
                            <div>
                                <Link href='#' className="block bg-green-500 text-white px-4 py-6 mt-4 ">
                                    <button className="font-bold text-2xl text-center w-full">Whatsapp</button>
                                </Link>
                                <Link href='#' className="block bg-rose-500 text-white px-4 py-6 mt-4 ">
                                    <button className="font-bold text-2xl text-center w-full">airbnb</button>
                                </Link>
                                <Link href='#' className="block border border-black text-blue-900 px-4 py-6 mt-4 ">
                                    <button className="font-extrabold text-2xl text-center w-full">Booking.com</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}