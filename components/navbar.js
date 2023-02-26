import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";
import Container from "./container";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/outline";


export default function Navbar(props) {
  const rightmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Products",
      href: "/products"
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
                        title="999Footware"
                        />
                  </Link>
                </div>
                <div className="m-5 lg:m-0 flex flex-row justify-end w-full items-center">
                    <Link href="/cart">
                      <ShoppingBagIcon className="h-6 w-6 text-white transition ease-out delay-100 hover:text-yellow-500" title="Shopping bag"/>
                    </Link>
                    <Link href="/account" className="ml-5">
                      <div className="group">
                        <Image
                          priority
                          src="/images/icons/user1.png"
                          className="absolute transition ease-out delay-100 hover:opacity-0"
                          height={27}
                          width={27}
                          alt="My account"
                          title="My account"
                          />
                        <Image
                          priority
                          src="/images/icons/user2.png"
                          className=""
                          height={27}
                          width={27}
                          alt="My account"
                          title="My account"
                          />
                      </div>
                    </Link>
                </div>
                <div className="flex items-center mr-10">
                    <Disclosure.Button  
                      aria-label="Toggle Menu"
                      className="lg:hidden"
                    >
                        <Bars3Icon className="absolute h-7 w-7 text-white hover:opacity-0" title="Menu"/>
                        <Bars3BottomRightIcon className="h-7 w-7 text-white " title="Menu"/>
                    </Disclosure.Button>
                </div>
            </div>
            <Disclosure.Panel>
                <div className="flex flex-col items-center justify-end col-end w-full lg:hidden">
                  {mobilemenu.map((item, index) => (
                    <Link href={item.href} key={index} className="px-5 py-1 text-md font-medium text-slate-100 dark:text-gray-400 hover:italic" style={{textDecoration:"none"}}>
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