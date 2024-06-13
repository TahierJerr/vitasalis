import Image from 'next/image'
import React from 'react'

interface CardProps {
        title: string
        description: string
        image: string
        className?: string
}

const Card: React.FC<CardProps> = ({ title, description, image, className }) => {
    return (
        <div className={`${className} border border-black rounded-md flex flex-col h-full`}>
                <div className='h-2/3'>
                        <Image src={image} alt={title} className='rounded-t-md h-full object-cover' width={1000} height={1000} />
                </div>
                <div className='p-4 bg-red-600 text-white h-44'>
                        <h3 className='text-xl font-semibold'>{title}</h3>
                        <p className=''>{description}</p>
                </div>
        </div>
    )
}

export default Card