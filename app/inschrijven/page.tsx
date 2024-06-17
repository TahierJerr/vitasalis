"use client"

import { getLocalTimeZone, today } from '@internationalized/date'
import { Button } from '@nextui-org/button'
import { DatePicker } from '@nextui-org/date-picker'
import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/select'
import { MailIcon, PhoneIcon, CakeIcon } from 'lucide-react'

const InschrijvenPage = () => {

    const geslacht = [
        { label: 'Man' },
        { label: 'Vrouw' },
        { label: 'Anders' },
        { label: 'Zeg ik liever niet'}
    ]

    return (
        <div className='flex items-center justify-center flex-col max-w-screen-lg mx-auto sm:h-auto    '>
            <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start'>
                <div className='sm:my-12 my-4 flex items-center justify-center flex-col gap-4 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Inscrhijven</h1>
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
                            <Select label='Geslacht' labelPlacement='outside' placeholder='Man' isRequired items={geslacht}>
                                {(geslacht) => <SelectItem key={geslacht.label}>{geslacht.label}</SelectItem>}
                            </Select>
                        </div>
                        <div>
                            <DatePicker
                                showMonthAndYearPickers
                                isRequired
                                label='Geboortedatum'
                                placeholderValue={today(getLocalTimeZone()).subtract({ years: 42 })}
                                maxValue={today(getLocalTimeZone()).subtract({ years: 14 })}
                                labelPlacement='outside'
                                startContent={<CakeIcon size={20} />}
                                fullWidth
                            />
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
                                label='Telefoonnummer'
                                isRequired
                            />
                        </div>
                        <div className='mt-4'>
                            <Button className=' text-lg flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white w-full'>
                                Inschrijven
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='sm:my-12 my-4 sm:mx-0 mx-4 sm:max-w-56 mb-12'>
                    <p className='text-xl font-medium mb-6'>Lukt het niet?</p>
                    <div className='bg-gray-200 p-4 rounded-lg'>
                        <p>Neem contact met ons op of kom even langs en wij helpen je verder</p>
                        <div className='flex flex-col my-2'>
                            <p className='text-lg font-medium'>Contactinfo:</p>
                            <a href='tel: 0597 – 646049' className=' cursor-pointer underline-offset-2 underline hover:text-red-600'>
                                0597 646049
                            </a>
                            <a href='mailto: info@vitasalis.nl' className='cursor-pointer underline-offset-2 underline hover:text-red-600'>
                                info@vitasalis.nl
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InschrijvenPage