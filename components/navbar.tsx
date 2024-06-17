"use client"

import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { PhoneCallIcon, SquarePenIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className='sm:hidden'>
            <NavbarMenuToggle 
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
        </NavbarContent>
        <NavbarBrand className='flex items-center justify-center sm:block '>
            <Link href='/'>
                <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </Link> 
        </NavbarBrand>
        <NavbarContent className='gap-12 hidden sm:flex' justify='center'>
            <NavbarItem>
                <Link href='/'>Home</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/diensten'>Diensten</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/over-ons'>Over ons</Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
            <NavbarItem className='hidden sm:flex'>
                <Button as={Link} href='/inschrijven' className='rounded-lg flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-black text-black'><SquarePenIcon size={20} />Inschrijven</Button>
            </NavbarItem>
            <NavbarItem className='hidden sm:flex'>
                <Button as={Link} href='/contact' className='flex items-center justify-center rounded-lg px-4 py-2 gap-2 bg-red-600 text-white'><PhoneCallIcon size={20} />Contact</Button>
            </NavbarItem>
            <NavbarItem className='sm:hidden'>
                <Button as={Link} href='/contact' isIconOnly className='flex items-center justify-center rounded-lg gap-2 bg-red-600 text-white'><PhoneCallIcon size={20} /></Button>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='gap-4'>
            <NavbarMenuItem className='text-2xl mt-4'>
                <Link href='/'>Home</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className='text-2xl'>
                <Link href='/diensten'>Diensten</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className='text-2xl'>
                <Link href='/over-ons'>Over ons</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className='text-2xl'>
                <Link href='/inschrijven'>Inschrijven</Link>
            </NavbarMenuItem>
        </NavbarMenu>
    </Navbar>
  )
}

export default NavbarComponent