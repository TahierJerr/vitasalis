import { Button } from '@nextui-org/button'
import { PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Homepage = () => {

    const kwaliteiten = [
        { title: 'Professioneel', description: 'Onze medewerkers zijn professioneel en hebben jarenlange ervaring in de zorg.' },
        { title: 'Persoonlijk', description: 'Wij vinden het belangrijk dat onze cliënten zich op hun gemak voelen.' },
        { title: 'Toegankelijk', description: 'Wij zijn goed bereikbaar en staan altijd voor je klaar.' },
    ]

    



    return (
    <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
        <div className='my-12 flex items-center justify-center flex-col mx-4'>
            <h1 className='text-3xl font-semibold text-center'>Vita Salis Gezondheidscentrum</h1>
            <p className='text-lg text-center font-medium'>Een vast adres waar je terecht kan met een hulpvraag</p>
            <Button className='flex items-center justify-center rounded-lg px-4 py-2 gap-2 mt-4 bg-red-600 text-white'><PhoneCallIcon size={20} />Contact</Button>
            <div className='relative max-w-screen-md'>
                <Image src='/hero.jpg' className='mt-8 rounded-md' alt='Logo' width={20000} height={20000} />
            </div>
        </div>
        <div className='my-12 flex items-center justify-center flex-col gap-4 mx-4'>
            <h2 className='text-3xl font-semibold mb-4'>Waarom Vita Salis kiezen?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:gird-cols-3 gap-4'>
                {kwaliteiten.map((kwaliteit, index) => (
                    <div key={index} className='border rounded-md flex flex-col h-full'>
                        <div className='p-4 bg-red-600 text-white rounded-md h-44'>
                            <h3 className='text-xl font-semibold'>{kwaliteit.title}</h3>
                            <p className=''>{kwaliteit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Homepage