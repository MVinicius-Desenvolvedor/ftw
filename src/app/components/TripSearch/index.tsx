'use client'

import React from 'react';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import CurrencyInput from '@/components/CurrencyInput';

const TripSearch = () => {

    return (

    <div className='container mx-auto p-5'>
        <h1 className=' font-semibold text-2xl text-primaryDarker text-center'>Encontra Sua Próxima <span className='text-primary'>Viagem!</span>
        </h1>
        <div className='flex fle-col gap-4 mt-5'>
            <Input placeholder='Onde você quer ir?'/>

        <div className="flex gap-4">
            <DatePicker placeholderText='Data de Ida' onChange={ () => {} } className="w-full"/>
            <CurrencyInput placeholder='Orçamento'/>
            
            </div>    
        </div>
   

    </div>
  )
}

export default TripSearch;