import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarComponent = () => {
  return (
    <Navbar isBordered>
        <NavbarBrand>
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </NavbarBrand>
        <NavbarContent className='gap-12 hidden sm:flex' justify='center'>
            <NavbarItem>
                <Link href='/'>Home</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/diensten'>Diensten</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href='/about'>Over ons</Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
            <NavbarItem>
                <Button as={Link} href='/contact' className='flex items-center justify-center rounded-lg px-4 py-2 gap-2 bg-red-600 text-white'><PhoneCallIcon size={20} />Contact</Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavbarComponent