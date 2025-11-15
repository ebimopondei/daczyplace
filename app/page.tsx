"use client"
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import InfoCards from "@/components/info-cards";
import { MenuIcon } from "@/components/menu-icon";
import OurRooms from "@/components/our-rooms";
import { Services } from "@/components/services";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const navigation = [
    { name: 'Service', href: '#services' },
    { name: 'Apartments', href: '#apartments' },
    { name: 'About', href: '#about' },
    // { name: 'Contact', href: '#' },
    { name: 'Testimonial', href: '#testimonial' },
  ]

  const [open, setOpen] = useState(false);

  useEffect(() => {
        if (open) {
            // When the menu is open, add 'overflow-hidden' to the body
            document.body.classList.add('overflow-hidden');
        } else {
            // When the menu is closed, remove 'overflow-hidden'
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup function: Ensures the class is removed if the component unmounts
        // or before the next effect runs.
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    
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

              <nav 
                className={`
                    p-10
                    lg:flex lg:items-center 
                    bg-[#fffbf4] z-20
                    text-dark
                    fixed w-3/4 h-full  top-0
                    ${open ? 'left-0': '-left-100'}
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
            <Footer />
          </main>
        </div>
      </div>

    </div>
  );
}