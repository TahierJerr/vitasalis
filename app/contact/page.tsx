"use client"

import { Time, getLocalTimeZone, today } from '@internationalized/date';
import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { MailIcon, PhoneIcon } from 'lucide-react'

const InschrijvenPage = () => {


    const currentDay = today(getLocalTimeZone())

    const time = new Time

    console.log(time)

    return (
        <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto sm:h-auto    '>
            <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start'>
                <div className='sm:my-12 my-4 flex items-center justify-center flex-col gap-4 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Contact</h1>
                    <form
                        className='flex flex-col justify-center gap-4 p-4 bg-gray-200 mx-4 rounded-lg'
                    >
                        <div className='flex items-center gap-2'>
                            <div>
                                <Input label='Voornaam' placeholder='Jan' labelPlacement='outside' isRequired />
                            </div>
                            <div>
                                <Input label='Achternaam' placeholder='Modaal' labelPlacement='outside' isRequired />
                            </div>
                        </div>
                        <div>
                            <Input
                                startContent={<MailIcon size={20} className='text-gray-400' />}
                                type='email'
                                label='E-mail'
                                placeholder='Janmodaal@gmail.com'
                                labelPlacement='outside'
                                isRequired
                            />
                        </div>
                        <div>
                            <Input
                                startContent={<PhoneIcon size={20} className='text-gray-400' />}
                                type='tel'
                                placeholder='06123456789'
                                labelPlacement='outside'
                                label='Telefoonnummer (optioneel)'
                            />
                        </div>
                        <div>
                            <Textarea 
                            isRequired
                            label='Bericht'
                            placeholder='Typ hier je bericht'
                            labelPlacement='outside'
                            size='lg'
                            />
                        </div>
                        
                        <div className='mt-4'>
                            <Button className=' text-lg flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white w-full'>
                                Bericht versturen
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='sm:my-12 my-4 sm:mx-0 mx-4 sm:max-w-56 mb-12'>
                    <p className='text-xl font-medium mb-5'>Liever bellen?</p>
                    <div className='bg-gray-200 p-4 rounded-lg'>
                        <p>U kunt ons bereiken op maandag t/m vrijdag van 8:00 tot 18:00 of zaterdag van 12:00 tot 18:00</p>
                        <p></p>
                        <div className='flex flex-col my-2'>
                            <p className='text-lg font-medium'>Telefoonnummer:</p>
                            <a href='tel: 0597 – 646049' className=' cursor-pointer underline-offset-2 underline hover:text-red-600'>
                                0597 646049
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InschrijvenPage