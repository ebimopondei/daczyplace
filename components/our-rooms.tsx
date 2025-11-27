import { rooms } from "@/data/mock"
import Image from "next/image"
import Link from "next/link"

export default function OurRooms(){
    
      
    return(
        <div id="apartments" className="bg-[url('/images/hero.jpg')] bg-black/30 bg-blend-multiply bg-cover md:bg-black/80 py-20 px-6 md:p-20">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl text-center">Our Rooms</h2>
                <div className="w-28 md:w-40 mt-4 mx-auto border-b-3 border-primary" />

                <div className="mt-14 flex flex-col md:flex-row  gap-20">
                  {rooms.map((room) => {
                    return(
                      <div key={room.description}>
                        <div className="relative">
                          <div className="absolute z-10 -top-3 bg-[#D49236] text-center uppercase left-[23%] md:left-[28%] font-bold py-1 px-10">{room.available} rooms left</div>
                          <Link href={"/details/" + room.slug} className="block overflow-hidden rounded-xl cursor-pointer">
                            <Image src={room.image} alt={room.title} width={270} height={180} className="w-full h-60 object-cover hover:scale-120 transition-transform duration-500"/>
                          </Link>
                        </div>
                        <div className="bg-black/30 p-4">
                          <Link href={"/details/" + room.slug}>
                            <h3 className="uppercase text-2xl font-semibold">{room.title}</h3>
                          </Link>
                          <p className="text-lg">{room.short_description}</p>
                        
                          <Link href={"/details/" + room.slug}>
                            <button className="mt-4 bg-primary/20  hover:bg-primary/80 cursor-pointer hover:rounded-lg transition-all border border-primary/40 w-full text-light font-bold py-3 px-6">
                              Book Now
                              <Image src="/svg/arrow-right.svg" alt="arrow right" width={16} height={16} className="w-3 h-3 inline-block ml-2"/>
                            </button>
                          </Link >
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
    )
}