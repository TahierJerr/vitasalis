'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CardProps {
    title: string
    description: string
    image: string
    className?: string
    link?: string
}

const Card: React.FC<CardProps> = ({ title, description, image, className, link }) => {
    
    const router = useRouter()
    
    const handleLink = () => {
        if (!link) {
            return
        }
        router.push(`${link}`)
    }

    return (
    <div onClick={handleLink} className={`${className} border border-black rounded-md flex flex-col h-full max-h-fit ${link ? 'cursor-pointer' : ''}`}>
        <div className='h-2/3'>
            <Image src={image} alt={title} className='rounded-t-md h-full max-h-44 object-cover' width={1000} height={1000} />
        </div>
        <div className='p-4 bg-red-600 text-white h-full'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className=''>{description}</p>
        </div>
    </div>
    )
}

export default Card