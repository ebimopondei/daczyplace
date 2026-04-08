"use client"
import { MenuIcon } from "@/components/menu-icon";
import Image from "next/image";
import { use } from 'react'
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = use(params)
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
  return <div className="font-sans bg-white">
        <div>
          <div className="">
            <div className=" bg-blend-multiply md:flex md:flex-col md:justify-between bg-cover h-screen md:py-10">
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
                    <p>Book Now</p>
                  </div>
                </div>
              </header>
            </div>
  
            <main>
              <h2 className="text-3xl">{slug}</h2>
            </main>
          </div>
        </div>
  
      </div>
}