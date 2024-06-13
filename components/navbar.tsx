import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { PhoneCallIcon, SquarePenIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarComponent = () => {
  return (
    <Navbar isBordered>
        <NavbarBrand>
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
            <NavbarItem>
                <Button as={Link} href='/inschrijven' className='rounded-lg flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-black text-black'><SquarePenIcon size={20} />Inschrijven</Button>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} href='/contact' className='flex items-center justify-center rounded-lg px-4 py-2 gap-2 bg-red-600 text-white'><PhoneCallIcon size={20} />Contact</Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavbarComponent