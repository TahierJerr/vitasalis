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
    </div>
  )
}

export default AboutPage