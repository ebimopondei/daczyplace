import Image from "next/image"

export default function InfoCards(){
    const info = [
        {
          title: "Opening Times",
          description: "Mon - Fri: 9:00 AM - 6:00 PM",
          icon: "/svg/clock.svg",
          color: "#D49236"
        },
    
        {
          title: "Location",
          description: "123 Main Street, Cityville",
          icon: "/svg/home.svg",
          color: "#A58525"
        },
        {
          title: "Contact",
          description: "+23481000000000",
          icon: "/svg/phone.svg",
          color: "#6E4B1A"
        }
    ]

    return (
        <div className="flex flex-col md:flex-row">

            {info.map((record) => (
            <div key={record.title} className={`bg-[${record.color}]  backdrop-blur-sm shadow-lg ring-1 ring-slate-900/5 p-6 grow`}>
                <div className="flex items-center gap-4">
                <Image src={record.icon} alt="clock icon" width={32} height={32} className="w-8 h-8 stroke-primary" />
                <div>
                    <h2 className=" font-semibold ">{record.title}</h2>
                    <p className=" whitespace-pre-line">{record.description}</p>
                </div>
                </div>
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