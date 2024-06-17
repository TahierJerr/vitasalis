"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ServicesPage = () => {

  const router = useRouter()

  const handleClick = (link: string) => {
    router.push(`${link}`)
  }

  const diensten = [
    {
      id: '99f17732-4a7a-494b-9fac-5260a0ca4bb1',
      title: 'Fysiotherapie',
      description: 'Onze fysiotherapeuten helpen je bij het herstel van blessures en pijnklachten.',
      image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
      link: '/diensten/99f17732-4a7a-494b-9fac-5260a0ca4bb1'
    },
    {
      id: 'a7a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
      title: 'Podotherapie',
      description: 'Onze podotherapeuten helpen je bij het verhelpen van voetklachten en het aanmeten van steunzolen.',
      image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
      link: '/diensten/a7a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a'
    },
    {
      id: 'b3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
      title: 'Diëtiek',
      description: 'Onze diëtisten helpen je bij het verbeteren van je voedingspatroon en het behalen van jouw gezondheidsdoelen.',
      image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
      link: '/diensten/b3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a'
    },
    {
      id: 'c3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
      title: 'Logopedie',
      description: 'Onze logopedisten helpen je bij het verbeteren van je spraak en taal.',
      image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
      link: '/diensten/c3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a'
    },
    {
      id: 'd3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
      title: 'Buurtzorg',
      description: 'Onze buurtzorgmedewerkers helpen je bij het verlenen van zorg aan huis.',
      image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
      link: '/diensten/d3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a'
    },
    {
      id: 'e3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a',
      title: 'Zorgboerderij',
      description: 'Onze zorgboerderij biedt dagbesteding aan mensen met een zorgvraag.',
      image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
      link: '/diensten/e3a2c9b1-0c1d-4f5b-8b7f-3b6e7b4b5e0a'
    }
  ]
  return (
    <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
      <div className='my-12 flex items-center justify-center flex-col gap-4 mx-4'>
        <h1 className='text-3xl font-semibold'>Onze diensten</h1>
        <p className='text-lg font-medium text-center'>Bij Vita Salis Gezondheidscentrum bieden wij een breed scala aan diensten aan om jou te helpen met jouw gezondheid.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {diensten.map((dienst, index) => (
            <div onClick={() => handleClick(dienst.link)} key={index} className='border rounded-md bg-red-600 cursor-pointer'>
              <Image src={dienst.image} alt={dienst.title} className='rounded-t-md' width={10000} height={10000} />
              <div className='w-full bg-red-600 rounded-b-md py-2 px-4 text-white'>
                <p className='text-lg font-medium'>{dienst.title}</p>
                <p>{dienst.description}</p>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default ServicesPage