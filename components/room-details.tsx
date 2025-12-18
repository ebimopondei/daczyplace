'use client'
import { Room } from "@/data/mock";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "./menu-icon";
import { navigation } from "@/app/page";
import Link from "next/link";
import { message, phone } from "@/app/details/[slug]/page";
import Footer from "./footer";
import { ArrowLeft } from "lucide-react";

export default function RoomDetails({room}: {room: Room}){
    const [open, setOpen] = useState(false);

    const icons: { [key: string]: string } = {
        'power': '/svg/power.svg',
        'wifi': '/svg/internet.svg',
        'food': '/svg/food.svg',
        'bed': '/images/bed.png',
    }

    return(
        <div className="  bg-white min-h-screen text-black">
            <header className="relative flex justify-between items-center px-6 py-4 bg-secondary/80 md:bg-secondary/70 md:mx-auto md:w-10/12">
              <Image
                src={"/logo.png"}
                alt="logo"
                className="w-[182px] md:-[228px] h-6"
                width={228}
                height={30}
              />

              <MenuIcon open={open} setOpen={setOpen} />

              <nav 
                className={`
                    p-10
                    lg:flex lg:items-center 
                    bg-[#fffbf4] z-20
                    text-dark
                    fixed w-3/4 h-full  top-0
                    ${open ? 'left-0': '-left-400'}
                    transition-all duration-500 ease-in-out
                `}
            >   
                <Image
                  src={"/logo-dark.png"}
                  alt="logo"
                  className="w-[190px] md:-[228px] h-[72px]"
                  width={228}
                  height={30}
                />
                <ul className="mt-10 flex flex-col gap-10 text-primary font-bold lg:flex-row lg:space-x-4">
                    {navigation.map((item) => (
                      <a
                        onClick={()=>setOpen(prev => !prev )}
                        key={item.name}
                        href={item.href}
                        className="uppercase hover:text-primary-alt transition-all duration-300 hover:scale-105 hover:border-l-2 hover:border-primary-alt hover:pl-3"
                      >{item.name}</a>
                    ))}
                </ul>
            </nav>

              {/* <div className="absolute top-0 left-0 h-screen bg-black w-full">
                <nav>
                  { navigation.map((item) => {
                    return(
                      <a
                        key={item.name}
                        href={item.href}
                        className="uppercase hover:text-primary-alt transition-all duration-300 hover:scale-105 hover:border-l-2 hover:border-primary-alt hover:pl-3"
                      >{item.name}</a>
                    )
                  })}
                </nav>

              </div> */}
              
              <div className=" hidden md:flex text-sm items-center justify-center text-background  gap-10">
                <nav className="flex items-center font-bold gap-6">
                  { navigation.map((item) => {
                    return(
                      <a
                        key={item.name}
                        href={item.href}
                        className="uppercase hover:text-primary-alt transition-all duration-300 hover:scale-105 hover:border-l-2 hover:border-primary-alt hover:pl-3"
                      >{item.name}</a>
                    )
                  })}
                </nav>
                
                <div className="cursor-pointer bg-primary text-dark text-lg font-bold py-4 px-10">
                  <Link href={`https://wa.me/${phone}text=${encodeURIComponent(message)}`}>
                    <p>Book Now</p>
                  </Link>
                </div>
              </div>
            </header>
            <div className="md:px-20 px-4 pb-12 pt-8">
                <Link href={'/#apartments'} className="pb-4 pt-0 flex items-center gap-4">
                    <span className="border rounded-full inline-block p-2"><ArrowLeft /></span> <span className="font-bold">Go back</span>
                </Link>
                <div>
                    <div className="grid grid-cols-4 gap-2 md:gap-6">
                        <div className="overflow-hidden relative h-full row-span-2 col-span-2 w-full">
                            <Image
                            src={room?.image || ''}
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64">
                            <Image
                            src={room?.images[0] || ''}
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64">
                            <Image
                            src={room?.images[1] || ''}
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64">
                            <Image
                            src={room?.images[2] || ''}
                            alt="Hero"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative w-full h-20 md:h-64 col-span-1">
                            <Image
                            src={room?.images[3] || ''}
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
                                    <h1 className="text-xl md:text-2xl font-semibold">{room?.title}</h1>
                                    <p className=" md:text-xl text-primary">{room?.address}</p>
                                </div>

                                <div className="mt-4">
                                    <h2 className="font-semibold md:text-xl">Apartment Features</h2>
                                    <ul className="flex flex-wrap gap-2">
                                        {room?.features.map((feature) => {
                                            return(
                                                <li key={feature.label} className="flex items-center gap-1 text-sm md:text-base">
                                                    <Image color="black" src={icons[feature.icon] as string} alt={feature.icon} width={18} height={18}/>
                                                    {feature.label}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>


                            </div>

                            <div className="my-6">
                                <h3 className="text-xl font-semibold">Description</h3>
                                <p className="text-base md:text-lg text-justify">{room?.description}</p>
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
                                <Link href={`https://wa.me/${phone}text=${encodeURIComponent(message)}`} className="block bg-green-500 text-white px-4 py-6 mt-4 ">
                                    <button className="font-bold text-2xl flex items-center justify-center gap-4 text-center w-full">
                                        <Image src="/svg/whatsapp.svg" alt="whatsapp" width={32} height={32}/>
                                        Whatsapp</button>
                                </Link>
                                <Link href='#' className="block bg-white text-rose-500 border border-rose-500 px-4 py-6 mt-4 ">
                                    <button className="font-bold text-2xl flex items-center justify-center gap-4 text-center w-full">
                                        <Image src="/svg/airbnb.svg" alt="airbnb" width={32} height={32}/>
                                        airbnb</button>
                                </Link>
                                <Link href='#' className="block border border-blue-900 text-blue-900 px-4 py-6 mt-4 ">
                                    <button className="font-extrabold text-2xl flex items-center justify-center gap-4 text-center w-full">
                                        <Image src="/svg/booking.svg" alt="booking" width={32} height={32}/>
                                        Booking.com</button>
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