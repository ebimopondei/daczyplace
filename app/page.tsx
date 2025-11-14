"use client"
import { MenuIcon } from "@/components/menu-icon";
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
    <div>
      <div>
        <div className="bg-[url('/images/hero.jpg')] bg-cover h-screen flex flex-col">
          <div className="flex items-center justify-center md:py-10">
            <header className="relative flex justify-between items-center p-4 bg-secondary/80 md:bg-secondary/70 basis-full  md:basis-10/12">
              <Image
                src={"/logo.png"}
                alt="logo"
                className="w-[182px] md:-[228px] h-6"
                width={228}
                height={30}
              />

              <MenuIcon open={open} setOpen={setOpen} />

              {/* <div> */}
                <div className=" hidden md:flex items-center justify-center text-background font-bold gap-10">
                  <nav className="flex items-center gap-6">
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
              {/* </div> */}
    

            </header>

          </div>

          <main>
            <section className="flex items-end border">
              <div className="basis-10/12">
                <h1>Discover Your Next Stay With Style</h1>

              </div>
            </section>
          </main>
        </div>
      </div>

    </div>
  );
}