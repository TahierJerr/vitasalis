import Card from '@/components/card'
import React from 'react'

const AboutPage = () => {
    
    const team = [
    {
        title: 'Erwin Hensbergen',
        description: 'Wie zichzelf overwint is sterker dan die een stad inneemt.',
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

    
    return (
    <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
        <div className='my-12 flex items-center justify-center flex-col gap-4 mx-4'>
            <h2 className='text-3xl font-semibold'>Ons team</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:gird-cols-3 gap-4'>
                {team.map((member, index) => (
                    <Card key={index} title={member.title} description={member.description} image={member.image} />
                    ))}
                </div>
            </div>
            <div className='my-12  flex items-center justify-center flex-col gap-4 mx-4'>
                <h2 className='text-3xl font-semibold'>Blog</h2>
                <p className='text-xl font-medium'>Lees hier de laatste blogs van ons team</p>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:gird-cols-3 gap-4'>
                    {blog.map((blog, index) => (
                        <Card link={blog.link} key={index} title={blog.title} description={blog.description} image={blog.image} />
                        ))}
                    </div>
                </div>
            </div>
            )
        }
        
        export default AboutPage