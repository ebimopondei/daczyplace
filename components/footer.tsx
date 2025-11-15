import Image from "next/image"

export default function Footer(){
    const socialLinks = [
        {
            url: "",
            icon: "/svg/facebook.svg",
            title: "Facebook"
        },
        {
            url: "",
            icon: "/svg/x.svg",
            title: "X"
        },
        {
            url: "",
            icon: "/svg/instagram.svg",
            title: "Instagram"
        },
        {
            url: "",
            icon: "/svg/whatsapp.svg",
            title: "Whatsapp"
        },
        {
            url: "",
            icon: "/svg/dribble.svg",
            title: "Dribble"
        }
    ]
    return(
        <footer className="bg-[#352709] py-20 px-6 md:px-20">
            <div className="flex flex-wrap  items-center justify-between">
                <h3 className="font-bold text-lg">&copy; Copyright 2025 - <span className="text-primary font-bold">Daczy's Place</span></h3>
                <div className="flex items-center gap-4">
                    {socialLinks.map(social => (
                        <Image key={social.title} src={social.icon} width={24} height={24} alt={social.title} />
                    ))}
                </div>
            </div>
        </footer>
    )
}