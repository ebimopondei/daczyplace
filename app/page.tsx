"use client"
import AboutUs from "@/components/about-us";
import InfoCards from "@/components/info-cards";
import { MenuIcon } from "@/components/menu-icon";
import OurRooms from "@/components/our-rooms";
import { Services } from "@/components/services";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const navigation = [
    { name: 'Service', href: '#' },
    { name: 'Apartments', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Testimonial', href: '#' },
  ]

  const [open, setOpen] = useState(false);


    
  return (
    <div className="font-sans">
      <div>
        <div className="">
          <div className="bg-[url('/images/hero.jpg')] bg-black/80 bg-blend-multiply md:flex md:flex-col md:justify-between bg-cover h-screen md:py-10">
            <header className="relative flex justify-between items-center px-6 py-4 bg-secondary/80 md:bg-secondary/70 md:mx-auto md:w-10/12">
              <Image
                src={"/logo.png"}
                alt="logo"
                className="w-[182px] md:-[228px] h-6"
                width={228}
                height={30}
              />

              <MenuIcon open={open} setOpen={setOpen} />
              
              <div className=" hidden md:flex text-sm items-center justify-center text-background  gap-10">
                <nav className="flex items-center font-bold gap-6">
                  { navigation.map((item) => {
                    return(
                      <a
                        key={item.name}
                        href={item.href}
                        className="uppercase"
                      >{item.name}</a>
                    )
                  })}
                </nav>
                
                <div className="bg-primary text-dark text-lg font-bold py-4 px-10">
                  <p>Book Now</p>
                </div>
              </div>
            </header>
            <div className="mt-10 md:w-10/12 mx-auto">
              <div className="flex items-end">
                <div className="basis-full px-6 py-20 ">
                  <h1 className="text-6xl md:w-7/12 md:leading-22 md:font-bold md:tracking-wider font-vogera">Discover Your Next Stay With Style</h1>
                  <p className="mt-4 md:text-2xl md:w-5/12 font-semibold ">Explore curated spaces that combine comfort, elegance and community - All in one place.</p>

                </div>
              </div>

              <div className="bg-[#6E4B1A] bg-[#A58525] bg-[#D49236]"></div>

            </div>
          </div>

          <main>
            <InfoCards />
            <OurRooms />
            <AboutUs />
            <Services />
            <Testimonials />
          </main>
        </div>
      </div>

    </div>
  );
}