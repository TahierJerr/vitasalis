"use client"

import { Button } from '@nextui-org/button';
import { PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    
    const params = useParams();
    
    const Id = params.dienstId;
    
    const diensten = [
    {
        id: '99f17732-4a7a-494b-9fac-5260a0ca4bb1',
        title: 'Fysiotherapie',
        description: 'Onze fysiotherapeuten helpen je bij het herstel van blessures en pijnklachten.',
        image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
        link: '/diensten/99f17732-4a7a-494b-9fac-5260a0ca4bb1',
        externalLink: '',
        tel: '0597 640 6049'
    },
    {
        id: 'a7a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        title: 'Podotherapie',
        description: 'Onze podotherapeuten helpen je bij het verhelpen van voetklachten en het aanmeten van steunzolen.',
        image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
        link: '/diensten/a7a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        externalLink: 'https://www.voetstuk.nl/',
        tel: '0599 – 729009'
    },
    {
        id: 'b3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        title: 'Diëtiek',
        description: 'Onze diëtisten helpen je bij het verbeteren van je voedingspatroon en het behalen van jouw gezondheidsdoelen.',
        image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
        link: '/diensten/b3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        externalLink: 'https://www.zgmeander.nl/behandelingen/dieet--en-voedingsadvies%20%20',
        tel: '0598 – 686868'
    },
    {
        id: 'c3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        title: 'Logopedie',
        description: 'Onze logopedisten helpen je bij het verbeteren van je spraak en taal.',
        image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
        link: '/diensten/c3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        externalLink: 'https://oetara.nl/',
        tel: '0598 620 978'
    },
    {
        id: 'd3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        title: 'Buurtzorg',
        description: 'Onze buurtzorgmedewerkers helpen je bij het verlenen van zorg aan huis.',
        image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
        link: '/diensten/d3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        externalLink: '',
        tel: '06 - 53 41 36 76'
    },
    {
        id: 'e3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        title: 'Zorgboerderij',
        description: 'Onze zorgboerderij biedt dagbesteding aan mensen met een zorgvraag.',
        image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
        link: '/diensten/e3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
        externalLink: 'https://www.zorgboerderijvrijenblij.nl/',
        tel: '085 208 0869'
    }
    ]
    
    const data = diensten.find((item) => item.id === Id)

    if (!data) {
        return (
            <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
                <h1 className='text-3xl font-semibold'>Dienst niet gevonden</h1>
            </div>
        )
    }
    return (
    <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
        <div className='my-12 flex items-start justify-center gap-4 mx-4 flex-col sm:flex-row'>
            <div className='sm:w-2/3 w-full'>
                <h1 className='text-3xl font-semibold'>{data.title}</h1>
                <p className='text-lg mt-2'>{data.description}</p>
                <div className='w-full rounded-md mt-4'>
                    <Image src={data.image} alt={data.title} width={20000} height={20000} className='object-contain rounded-md' />
                </div>
            </div>
            <div className='sm:w-1/3 w-full border bg-gray-200 py-4 px-4 rounded-md'>
                <h2 className='text-xl mb-4'>Wilt u contact opnemen?</h2>
                <p>Bel ons via dit nummer of druk op het contact knopje om een bericht achter te laten.</p>
                <a className='underline underline-offset-2 cursor-pointer' href={`tel: ${data.tel}`}>{data.tel}</a>
                <Button className='flex items-center justify-center rounded-lg px-4 py-2 gap-2 mt-4 bg-red-600 text-white w-full'><PhoneCallIcon size={20} />Contact</Button>
            </div>
        </div>
    </div>
    )
}

export default page