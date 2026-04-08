import Image from "next/image"
import Link from "next/link"

export default function InfoCards(){
    const info = [
        {
          title: "Opening Times",
          description: "We are open 24/7 Mon - Sunday",
          icon: "/svg/clock.svg",
          link: "",
          color: "#D49236"
        },
    
        {
          title: "Location",
          description: "Family Homes Estate, Asaba",
          icon: "/svg/home.svg",
          link: "",
          color: "#A58525"
        },
        {
          title: "Contact",
          description: "+2349069987349",
          icon: "/svg/whatsapp.svg",
          link: "https://wa.link/zkvg9t",
          color: "#6E4B1A"
        }
    ]

    return (
        <div className="flex flex-col md:flex-row">

            {info.map((record) => (
                <div key={record.title} className={`bg-[${record.color}]  backdrop-blur-sm shadow-lg ring-1 ring-slate-900/5 p-6 grow`}>
            <Link href={record.link}  >
                <div>
                    <div className="flex items-center gap-4">
                    <Image src={record.icon} alt="clock icon" width={32} height={32} className="w-8 h-8 stroke-primary" />
                    <div>
                        <h2 className=" font-semibold ">{record.title}</h2>
                        <p className=" whitespace-pre-line">{record.description}</p>
                    </div>
                    </div>
                </div>
            </Link>
                </div>
            ))}
            {/* {info.map((record) => (
            <div key={record.title} className={`bg-[${record.color}]  backdrop-blur-sm shadow-lg ring-1 ring-slate-900/5 p-2 grow`}>
                <div className="flex items-center gap-2">
                <Image src={record.icon} alt="clock icon" width={32} height={32} className="w-4 h-4 stroke-primary" />
                <div>
                    <h2 className="text-[8px] font-semibold ">{record.title}</h2>
                    <p className="text-[6px] whitespace-pre-line">{record.description}</p>
                </div>
                </div>
            </div>
            ))} */}

        </div>
    )
}