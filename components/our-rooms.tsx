import { rooms } from "@/data/mock"
import Image from "next/image"
import Link from "next/link"

export default function OurRooms(){
    
      
    return(
        <div id="apartments" className="bg-white text-primary py-20 px-6 md:p-20">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl text-center">Our partments</h2>
                <div className="w-28 md:w-40 mt-4 mx-auto border-b-3 border-primary" />

                <div className="mt-14 flex flex-col md:flex-row  gap-20">
                  {rooms.map((room) => {
                    return(
                      <div key={room.slug}>
                        <div className="relative">
                          {/* <div className="absolute z-10 -top-3 bg-primary text-center left-[23%] md:left-[28%] font-bold py-1 px-10">Book 1 ( Per night)</div> */}
                          <Link href={"/details/" + room.slug} className="block overflow-hidden rounded-xl cursor-pointer">
                            <Image src={room.image} alt={room.title} width={270} height={180} className="w-full h-60 object-cover hover:scale-120 transition-transform duration-500"/>
                          </Link>
                        </div>
                        <div className="py-4">
                          <Link href={"/details/" + room.slug}>
                            {/* <h3 className="uppercase text-2xl font-semibold">{room.title}</h3> */}
                            <p className="text-lg">{room.address}</p>
                          </Link>
                        
                          <Link href={"/details/" + room.slug}>
                            <button className="mt-4 bg-primary text-center  hover:bg-primary/90 cursor-pointer hover:rounded-lg transition-all border border-primary/40 w-full text-light font-bold py-3 px-6">
                              Check Availability
                              {/* <Image src="/svg/arrow-right.svg" alt="arrow right" width={16} height={16} className="w-3 h-3 inline-block ml-2"/> */}
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