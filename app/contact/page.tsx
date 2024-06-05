import React from 'react'

const ContactPage = () => {
    return (
        <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
            <div className='my-12'>
                <h1 className='text-xl font-semibold'>Neem contact met ons op</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div className='bg-gray-300 rounded-md py-4 px-8'>
                        <p className='text-lg font-medium'>Wilt u ons bellen?</p>
                        <a href='tel: +'></a>
                    </div>
                    <div className='bg-gray-300 rounded-md py-4 px'>
                        <p className='text-lg font-medium'>Wilt u ons mailen?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage