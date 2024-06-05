import Card from '@/components/card'
import { Button } from '@nextui-org/button'
import { PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Homepage = () => {

    const team = [
        {
            title: 'Erwin Hensbergen',
            description: 'Wie zichzelf overwint is sterker dan die een stad inneemt',
            image: '/erwin.jpg'
        },
        {
            title: 'Theresa ten Have',
            description: 'Ik ben een enthousiaste en gedreven professional die graag mensen helpt om hun doelen te bereiken.',
            image: '/theresa.jpg'
        },
        {
            title: 'Debby Wiersema',
            description: 'Ik ben gemotiveerd om mensen de beste zorg te leveren, gericht op het vergroten van zelfstandigheid en de kwaliteit van hun leven.',
            image: '/debby.jpg'
        }
    ]



    return (
    <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
        <div className='my-12 flex items-center justify-center flex-col'>
            <h1 className='text-3xl font-semibold text-center'>Vita Salis Gezondheidscentrum</h1>
            <p className='text-lg text-center font-medium'>Een vast adres waar je terecht kan met een hulpvraag</p>
            <Button className='flex items-center justify-center rounded-lg px-4 py-2 gap-2 mt-4 bg-red-600 text-white'><PhoneCallIcon size={20} />Contact</Button>
            <div className='relative max-w-screen-md'>
                <Image src='/hero.jpg' className='mt-8 rounded-md' alt='Logo' width={2000} height={2000} />
            </div>
        </div>
        <div className='my-12 flex items-center justify-center flex-col gap-4 max'>
            <h2 className='text-3xl font-semibold'>Ons team</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:gird-cols-3 gap-4'>
                {team.map((member, index) => (
                    <Card key={index} title={member.title} description={member.description} image={member.image} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Homepage