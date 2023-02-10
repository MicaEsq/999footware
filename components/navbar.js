import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";
import Container from "./container";


export default function Navbar(props) {
  const rightmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const mobilemenu = [ ...rightmenu];

  return (
    <Container >
      <nav className=" ">
         <Disclosure>
         {({ open }) => (
          <>
            <div className="flex w-full items-center">
                <div className="flex-col items-center justify-start w-full">
                  <Link href="/" className="">
                        <Image
                        priority
                        src="/images/logo999.png"
                        className=""
                        height={200}
                        width={200}
                        alt=""
                        />
                  </Link>
                </div>
                <div className="sm:m-8 md:m-0 flex flex-row justify-end w-full order-none">
                    <Link href="/cart">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </Link>
                </div>
                <div className="flex items-center mr-10">
                    <Disclosure.Button  
                      aria-label="Toggle Menu"
                      className="md:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </Disclosure.Button>
                </div>
            </div>
            <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Link href={item.href} key={index} className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
            )}
          </Disclosure>
      </nav>
      </Container>
  );
}