"use client"
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import InfoCards from "@/components/info-cards";
import OurRooms from "@/components/our-rooms";
import { Services } from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhatsAppButton from "@/components/whatsapp-float-button";
import { useState } from "react";
import Header from "@/components/header";


export const navigation = [
  { name: 'Service', href: '/#services' },
  { name: 'Apartments', href: '/#apartments' },
  { name: 'About', href: '/#about' },
  { name: 'Testimonial', href: '/#testimonial' },
]

export default function Home() {

  const [open, setOpen] = useState(false);
    
  return (
    <div className="font-sans">
      <div>
        <div className="">
          <div className="bg-[url('/images/hero.jpg')] bg-black/80 bg-blend-multiply md:flex md:flex-col md:justify-between bg-cover h-screen md:py-10">
            <Header open={open} setOpen={setOpen} />
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
      <WhatsAppButton />
    </div>
  );
}