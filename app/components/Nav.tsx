"use client"

import React, { useState } from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Link from 'next/link';
import Image from 'next/image';
import heallar from '../../public/images/heallar.png'
import '../globals.css'


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className='py-3 items-center w-full text-xs px-16' maxWidth='2xl' onMenuOpenChange={setIsMenuOpen} style={{fontFamily: 'Sora', fontWeight: 300}}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={heallar} alt='Heallar Logo' width={200}></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 " justify="center">
        <NavbarItem className='text-sm'>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive className='text-sm'>
          <Link href="#" aria-current="page">
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem className='text-sm'>
          <Link color="foreground" href="#">
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem className='text-sm'>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        
      </NavbarContent >
      <NavbarContent justify="end" className='gap-6 text-sm'>
        <NavbarItem className="hidden lg:flex text-sm">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex bg-heallar-primary px-4 py-2 text-white rounded-md text-sm'>
          <Link href='#'> Sign Up</Link>
         
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              // size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Nav