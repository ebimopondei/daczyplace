import Image from "next/image"

export default function OurRooms(){
    const rooms = [
        {
          title: "Standard Room",
          description: "At Dauzy Place, we understand that b away from doesnt mean compro on comfort. We provide premium short ",
          image: "/images/room-temp.jpg",
          available: 2
        },
        {
          title: "Standard Room",
          description: "At Dauzy Place, we understand that b away from home, doesnt mean compro on comfort. We provide premium short ",
          image: "/images/room-temp.jpg",
          available: 1
        },
        {
          title: "Standard Room",
          description: "At Dauzy Place, we understand that b away from home, mean compro on comfort. We provide premium short ",
          image: "/images/room-temp.jpg",
          available: 2
        },
    ]
      
    return(
        <div className="bg-[url('/images/hero.jpg')] bg-black/30 bg-blend-multiply bg-cover md:bg-black/80 py-20 px-6 md:p-20">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl text-center">Our Rooms</h2>
                <div className="w-28 md:w-40 mt-4 mx-auto border-b-3 border-primary" />

                <div className="mt-14 flex flex-col md:flex-row  gap-20">
                  {rooms.map((room) => {
                    return(
                      <div key={room.description}>
                        <div className="relative">
                          <div className="absolute -top-3 bg-[#D49236] text-center uppercase left-[23%] md:left-[28%] font-bold py-1 px-10">{room.available} rooms left</div>
                          <Image src={room.image} alt={room.title} width={270} height={180} className="w-full h-60 object-cover"/>
                        </div>
                        <div className="bg-black/30 p-4">
                          <h3 className="uppercase text-2xl font-semibold">{room.title}</h3>
                          <p className="text-lg">{room.description}</p>
                        
                          <div>
                            <button className="mt-4 bg-primary/20 border border-primary/40 w-full text-light font-bold py-2 px-6">
                              Book Now
                              <Image src="/svg/arrow-right.svg" alt="arrow right" width={16} height={16} className="w-3 h-3 inline-block ml-2"/>
                            </button>
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
    )
}