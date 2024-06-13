import { MailIcon, PhoneCallIcon } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
    return (
        <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto'>
            <div className='my-12'>
                <h1 className='text-xl font-semibold text-center'>Neem contact met ons op</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-4'>
                    <div className='bg-gray-300 rounded-md py-4 px-8 w-full flex items-center flex-col justify-center'>
                        <p className='text-lg font-medium mb-4'>Wilt u ons bellen?</p>
                        <a href="tel: 0597646049" className='rounded-lg bg-red-600 text-white px-4 py-2 flex items-center justify-center'><PhoneCallIcon size={20} className="mr-2" />0597 – 646049</a>
                    </div>
                    <div className='bg-gray-300 rounded-md py-4 px-8 w-full flex items-center flex-col justify-center'>
                        <p className='text-lg font-medium mb-4'>Wilt u ons mailen?</p>
                        <a href="mailto: info@vitasalis.nl" className='rounded-lg bg-red-600 text-white px-4 py-2 flex items-center justify-center'><MailIcon size={20} className='mr-2' />info@vitasalis.nl</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage