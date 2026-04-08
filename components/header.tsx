'use client'
import Image from "next/image"
import { MenuIcon } from "./menu-icon"
import { Dispatch, SetStateAction, useEffect } from "react"
import { navigation } from "@/app/page";
import Link from "next/link";

export default function Header({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {


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
    <header className="relative flex justify-between items-center px-6 py-4 bg-secondary/80 md:bg-secondary/70 md:mx-auto md:w-10/12">
      <Image
        src={"/logo/Mono-logo-4@3x.png"}
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
                    ${open ? 'left-0' : '-left-400'}
                    transition-all duration-500 ease-in-out
                `}
      >
        <Image
          src={"/logo/Logo-3@3x.png"}
          alt="logo"
          className="w-[190px] md:-[228px] h-[72px]"
          width={228}
          height={30}
        />
        <ul className="mt-10 flex flex-col gap-10 text-primary font-bold lg:flex-row lg:space-x-4">
          {navigation.map((item) => (
            <a
              onClick={() => setOpen(prev => !prev)}
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
          {navigation.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href}
                className="uppercase hover:text-primary-alt transition-all duration-300 hover:scale-105 hover:border-l-2 hover:border-primary-alt hover:pl-3"
              >{item.name}</a>
            )
          })}
        </nav>

        <div className="cursor-pointer bg-primary text-dark text-lg font-bold py-4 px-10">
          <Link href={`https://wa.link/zkvg9t`}>
            <p>Book Now</p>
          </Link>
        </div>
      </div>
    </header>
  )
}