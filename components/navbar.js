import React from "react";
import Link from "next/link";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import { Disclosure } from "@headlessui/react";
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
      <nav className="">
         <Disclosure>
         {({ open }) => (
          <>
            <div className="flex w-full">
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
                <div className="flex items-center m-8">
                    <Disclosure.Button  
                      aria-label="Toggle Menu"
                      className="md:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </Disclosure.Button>
                </div>
                <div className="flex-col items-center order-1 hidden w-full m-8 md:flex md:flex-row md:justify-end md:w-full md:order-none md:flex-1">
                    {rightmenu.map((item, index) => (
                    <Link href={item.href} key={index} className="px-5 py-2 text-sm font-medium text-white dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                    </Link>
                    ))}
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