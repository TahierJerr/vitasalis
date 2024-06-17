'use client'

import Image from "next/image";
import { useParams } from "next/navigation";


const BlogPage = () => {

    const params = useParams();    

    const blog = [
        {
            id: 'bb048608-37f3-4b49-a794-03db5c787a2d',
            title: 'Health Center Blog',
            description: 'Welcome to our Health Center Blog! Here you will find informative articles about various health topics to help you live a healthier life.',
            image: 'https://i.ytimg.com/vi/BKHsF49uIsY/maxresdefault.jpg',
            link: '/over-ons/bb048608-37f3-4b49-a794-03db5c787a2d'
        },
        {
            id: '17ed38f2-9dce-4b85-9e5a-17160dd5684f',
            title: 'Health Tips for a Better Life',
            description: 'Discover our top health tips for a better life. From nutrition and exercise to mental well-being, we cover a wide range of topics to help you achieve optimal health.',
            image: 'https://lh6.googleusercontent.com/proxy/V6MMVBx9MTSe_WICOqZPv726r16ag6dYUpheyJ3ewNBoH2P_qZLEi7Cct6GOqWczg4SMUS8P3kyCgmEMpGeDtfBZB3AU-PTY2UOQWr9anfxM4-8',
            link: '/over-ons/17ed38f2-9dce-4b85-9e5a-17160dd5684f'
        },
        {
            id: '01b92734-c060-4ac7-b421-56ca243d2887',
            title: 'The Importance of Regular Check-ups',
            description: 'Learn about the importance of regular check-ups and preventive care. Regular visits to our Health Center can help detect and prevent potential health issues before they become serious.',
            image: 'https://www.vitasalis.nl/wp-content/uploads/2021/09/faciliteiten_origene.jpg',
            link: '/over-ons/01b92734-c060-4ac7-b421-56ca243d2887'
        }
    ];

    const data = blog.find((item) => item.id === params.blogId)

    if (!data) {
        return (
            <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
                <h1 className='text-3xl font-semibold'>Blog not found</h1>
            </div>
        )
    }

  return (
    <div className='flex items-center justify-center flex-col max-w-screen-md mx-auto'>
        <div className='my-12 flex items-center justify-center flex-col gap-4 mx-4'>
            <h2 className='text-3xl font-semibold'>{data.title}</h2>
            <p className='text-xl font-medium'>{data.description}</p>
            <div className='relative max-w-screen-md'>
                <Image src={data.image} className='mt-8 rounded-md' alt={data.title} width={20000} height={20000} />
            </div>
        </div>
    </div>
  )
}

export default BlogPage